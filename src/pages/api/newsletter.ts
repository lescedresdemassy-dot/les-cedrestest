import type { APIRoute } from 'astro';
import {
  checkRateLimit,
  getClientIp,
  isAllowedOrigin,
  validate,
  verifyCsrfToken,
  checkHoneypot,
  errorResponse,
  successResponse,
} from '../../lib/security.ts';
import { NewsletterSchema } from '../../lib/schemas.ts';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!isAllowedOrigin(request)) {
    return errorResponse('Origine non autorisée', 403);
  }

  const ip = getClientIp(request);
  const rl = checkRateLimit(ip, {
    bucket: 'newsletter',
    limit: 2,
    windowMs: 60 * 1000,
  });
  if (!rl.success) {
    return errorResponse('Trop de tentatives. Réessayez dans une minute.', 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse('Corps de requête invalide', 400);
  }

  if (!checkHoneypot(body as Record<string, unknown>)) {
    return successResponse({ message: 'OK' });
  }

  const v = validate(NewsletterSchema, body);
  if (!v.ok) {
    return errorResponse(v.errors[0]?.message ?? 'Email invalide', 400);
  }

  if (!(await verifyCsrfToken(v.data.csrfToken))) {
    return errorResponse('Token de sécurité invalide', 403);
  }

  // TODO Supabase
  console.log('[Newsletter] Inscription', {
    email: v.data.email,
    preference: v.data.preference,
    timestamp: new Date().toISOString(),
  });

  return successResponse({
    message: 'Inscription confirmée. À très bientôt !',
  });
};
