import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../lib/supabase';
import {
  checkDatabaseRateLimit,
  getClientIp,
  isAllowedOrigin,
  validate,
  verifyCsrfToken,
  checkHoneypot,
  errorResponse,
  successResponse,
  jsonResponse,
} from '../../lib/security.ts';
import { ContactFormSchema } from '../../lib/schemas.ts';

// 🌟 OBLIGATOIRE POUR ASTRO v6
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!isAllowedOrigin(request)) {
    return errorResponse('Origine non autorisée', 403);
  }

  const ip = getClientIp(request);
  const rl = await checkDatabaseRateLimit(ip, {
    bucket: 'contact',
    limit: 5,
    windowMs: 60 * 1000, // 5 requêtes par minute max
  });
  if (!rl.success) {
    const secondsToReset = Math.ceil((rl.resetAt - Date.now()) / 1000);
    return jsonResponse(
      { ok: false, error: 'Trop de demandes. Réessayez dans une minute.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(secondsToReset),
        },
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse('Corps de requête invalide', 400);
  }

  // Honeypot anti-spam check
  if (!checkHoneypot(body as Record<string, unknown>)) {
    return successResponse({ success: true }); // Retourne 200 silencieusement
  }

  // Zod validation (qui applique également sanitizeDeep récursivement)
  const v = validate(ContactFormSchema, body);
  if (!v.ok) {
    return errorResponse(v.errors[0]?.message ?? 'Données de formulaire invalides', 400);
  }

  // CSRF Token validation
  if (!(await verifyCsrfToken(v.data.csrfToken))) {
    return errorResponse('Token de sécurité CSRF invalide ou expiré', 403);
  }

  try {
    // Insertion des données validées et nettoyées dans Supabase
    const { error } = await supabaseAdmin
      .from('contact_messages')
      .insert({
        name: v.data.name,
        email: v.data.email,
        phone: v.data.phone || null,
        subject: v.data.subject,
        message: v.data.message, // Déjà nettoyé par sanitizeDeep via validate()
        ip: ip,
        user_agent: request.headers.get('user-agent'),
      });

    if (error) {
      console.error('[Contact] Erreur Supabase:', error.message);
      return errorResponse('Une erreur interne est survenue lors de l\'enregistrement.', 500);
    }

    return successResponse({ success: true });
  } catch (err: any) {
    console.error('[Contact] Erreur API:', err.message);
    return errorResponse('Une erreur interne est survenue.', 500);
  }
};