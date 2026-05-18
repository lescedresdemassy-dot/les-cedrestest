/**
 * Briques de sécurité partagées par toutes les routes API.
 * Architecture octopus : chaque fonction est indépendante et remplaçable.
 */

import { z } from 'zod';

// =============================================================================
// 1. RATE LIMITING — in-memory (single-instance) ou Redis (multi-instance)
// =============================================================================

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Map<string, RateLimitRecord>>();

export interface RateLimitOptions {
  /** Nom du bucket (ex: "contact", "prayer") */
  bucket: string;
  /** Nombre max de requêtes pendant la fenêtre */
  limit: number;
  /** Fenêtre en millisecondes */
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

/**
 * Vérifie et incrémente le compteur pour un identifiant donné.
 * Retourne { success: false } si la limite est dépassée.
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions
): RateLimitResult {
  const now = Date.now();
  let bucket = buckets.get(options.bucket);
  if (!bucket) {
    bucket = new Map();
    buckets.set(options.bucket, bucket);
  }

  // Nettoyage opportuniste (1% de chance) — évite les leaks mémoire
  if (Math.random() < 0.01) {
    for (const [key, record] of bucket.entries()) {
      if (record.resetAt < now) bucket.delete(key);
    }
  }

  const record = bucket.get(identifier);

  if (!record || record.resetAt < now) {
    bucket.set(identifier, {
      count: 1,
      resetAt: now + options.windowMs,
    });
    return {
      success: true,
      remaining: options.limit - 1,
      resetAt: now + options.windowMs,
    };
  }

  if (record.count >= options.limit) {
    return {
      success: false,
      remaining: 0,
      resetAt: record.resetAt,
    };
  }

  record.count++;
  return {
    success: true,
    remaining: options.limit - record.count,
    resetAt: record.resetAt,
  };
}

/**
 * Récupère l'IP client de manière fiable derrière Vercel.
 */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]!.trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();
  return 'unknown';
}

// =============================================================================
// 2. ORIGIN / CORS — validation stricte
// =============================================================================

const ALLOWED_ORIGINS = [
  'https://eglise-massy.fr',
  'https://www.eglise-massy.fr',
];

if (import.meta.env.DEV) {
  ALLOWED_ORIGINS.push('http://localhost:4321', 'http://localhost:3000');
}

export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true; // Same-origin (pas de header origin)
  return ALLOWED_ORIGINS.includes(origin);
}

export function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get('origin');
  return {
    'Access-Control-Allow-Origin':
      origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]!,
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-Token',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

// =============================================================================
// 3. SANITIZATION — strip tout HTML/JS de toute string utilisateur
// =============================================================================

/**
 * Sanitization native, sans dépendance.
 * Stratégie : retirer toutes les balises HTML + escape des entités HTML résiduelles.
 *
 * Pour les formulaires d'une église (champs courts texte/email/téléphone/message),
 * cette approche est suffisante combinée à Zod. Aucune balise n'est jamais
 * autorisée — tout est traité comme texte brut.
 */
const HTML_TAG_REGEX = /<[^>]*>/g;
const HTML_ENTITY_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
// Protocoles dangereux dans des URLs textuelles
const DANGEROUS_PROTOCOL_REGEX = /\b(javascript|data|vbscript|file):/gi;

export function sanitize(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    // 1. Supprime toutes les balises HTML
    .replace(HTML_TAG_REGEX, '')
    // 2. Neutralise protocoles dangereux dans les URLs
    .replace(DANGEROUS_PROTOCOL_REGEX, 'blocked:')
    // 3. Échappe les entités HTML résiduelles (au cas où)
    .replace(/[&<>"'/]/g, (c) => HTML_ENTITY_MAP[c] ?? c)
    // 4. Normalise espaces et trim
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Sanitize récursivement toutes les strings d'un objet.
 */
export function sanitizeDeep<T>(data: T): T {
  if (typeof data === 'string') {
    return sanitize(data) as T;
  }
  if (Array.isArray(data)) {
    return data.map(sanitizeDeep) as T;
  }
  if (data && typeof data === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(data as Record<string, unknown>)) {
      out[k] = sanitizeDeep(v);
    }
    return out as T;
  }
  return data;
}

// =============================================================================
// 4. ZOD — validation + sanitization combinées
// =============================================================================

export interface ValidationSuccess<T> {
  ok: true;
  data: T;
}
export interface ValidationFailure {
  ok: false;
  errors: { field: string; message: string }[];
}

export function validate<T>(
  schema: z.ZodSchema<T>,
  raw: unknown
): ValidationSuccess<T> | ValidationFailure {
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.errors.map((e) => ({
        field: e.path.join('.') || '_root',
        message: e.message,
      })),
    };
  }
  return { ok: true, data: sanitizeDeep(parsed.data) };
}

// =============================================================================
// 5. CSRF — token signé stateless
// =============================================================================

const encoder = new TextEncoder();
let _cachedSecret: string | null = null;

function getCsrfSecret(): string {
  if (_cachedSecret !== null) return _cachedSecret;
  const s = import.meta.env.CSRF_SECRET;
  if (!s || s.length < 32) {
    if (import.meta.env.PROD) {
      // Au runtime production sans secret valide, on log et utilise une valeur
      // qui invalidera tous les tokens (= sécurité maximale, panne franche)
      console.error('[SECURITY] CSRF_SECRET manquant ou trop court — tokens invalides');
      _cachedSecret = 'INVALID-RUNTIME-' + crypto.randomUUID();
      return _cachedSecret;
    }
    _cachedSecret = 'dev-only-secret-do-not-use-in-prod-min32';
    return _cachedSecret;
  }
  _cachedSecret = s;
  return _cachedSecret;
}

async function hmac(message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(getCsrfSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(message));
  return btoa(String.fromCharCode(...new Uint8Array(sig)));
}

/**
 * Génère un token CSRF lié au timestamp (validité 2h).
 * À appeler dans le layout pour injecter dans les formulaires.
 */
export async function generateCsrfToken(): Promise<string> {
  const ts = Date.now();
  const nonce = crypto.randomUUID();
  const message = `${ts}.${nonce}`;
  const sig = await hmac(message);
  return `${ts}.${nonce}.${sig}`;
}

/**
 * Vérifie un token CSRF (constant time via HMAC comparison).
 */
export async function verifyCsrfToken(token: string): Promise<boolean> {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [tsStr, nonce, sig] = parts;
  if (!tsStr || !nonce || !sig) return false;

  const ts = Number(tsStr);
  if (!Number.isFinite(ts)) return false;

  // Token valide 2h
  if (Date.now() - ts > 2 * 60 * 60 * 1000) return false;
  if (ts > Date.now() + 60_000) return false; // futur impossible

  const expected = await hmac(`${ts}.${nonce}`);
  // Constant-time comparison
  if (sig.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) {
    diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

// =============================================================================
// 6. HONEYPOT — anti-bot champ caché
// =============================================================================

/**
 * Les bots remplissent tous les champs. On ajoute un champ "website" caché
 * en CSS qui DOIT rester vide. Si rempli → bot détecté.
 */
export function checkHoneypot(formData: Record<string, unknown>): boolean {
  const honey = formData.website;
  return !honey || (typeof honey === 'string' && honey.length === 0);
}

// =============================================================================
// 7. RÉPONSES JSON normalisées
// =============================================================================

export function jsonResponse(
  body: Record<string, unknown>,
  init: ResponseInit = {}
): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      ...init.headers,
    },
  });
}

export function errorResponse(
  message: string,
  status: number = 400,
  extra: Record<string, unknown> = {}
): Response {
  return jsonResponse({ ok: false, error: message, ...extra }, { status });
}

export function successResponse(
  data: Record<string, unknown> = {}
): Response {
  return jsonResponse({ ok: true, ...data }, { status: 200 });
}
