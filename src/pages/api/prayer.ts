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
import { PrayerRequestSchema } from '../../lib/schemas.ts';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!isAllowedOrigin(request)) {
    return errorResponse('Origine non autorisée', 403);
  }

  const ip = getClientIp(request);
  const rl = checkRateLimit(ip, {
    bucket: 'prayer',
    limit: 3,
    windowMs: 60 * 1000,
  });
  if (!rl.success) {
    return errorResponse('Trop de demandes. Réessayez dans une minute.', 429);
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

  const v = validate(PrayerRequestSchema, body);
  if (!v.ok) {
    return errorResponse(v.errors[0]?.message ?? 'Données invalides', 400);
  }

  if (!(await verifyCsrfToken(v.data.csrfToken))) {
    return errorResponse('Token de sécurité invalide', 403);
  }

  // TODO Supabase :
  // await supabase.from('prayer_requests').insert({
  //   name: v.data.isAnonymous ? null : v.data.name || null,
  //   request: v.data.request,
  //   is_anonymous: v.data.isAnonymous,
  // });

  console.log('[Prayer] Nouvelle demande reçue', {
    anonymous: v.data.isAnonymous,
    timestamp: new Date().toISOString(),
  });

  return successResponse({
    message: 'Votre demande a été transmise à notre équipe de prière.',
  });
};
