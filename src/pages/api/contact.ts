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
import { ContactFormSchema } from '../../lib/schemas.ts';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // 1. Origin check
  if (!isAllowedOrigin(request)) {
    return errorResponse('Origine non autorisée', 403);
  }

  // 2. Rate limiting (5 messages / minute / IP)
  const ip = getClientIp(request);
  const rl = checkRateLimit(ip, {
    bucket: 'contact',
    limit: 5,
    windowMs: 60 * 1000,
  });
  if (!rl.success) {
    return errorResponse(
      'Trop de messages envoyés. Réessayez dans une minute.',
      429,
      { resetAt: rl.resetAt }
    );
  }

  // 3. Parse JSON
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse('Corps de requête invalide', 400);
  }

  // 4. Honeypot
  if (!checkHoneypot(body as Record<string, unknown>)) {
    // Bot détecté — réponse de succès factice (pas d'indice au bot)
    return successResponse({ message: 'OK' });
  }

  // 5. Zod validation + sanitization
  const v = validate(ContactFormSchema, body);
  if (!v.ok) {
    return errorResponse(v.errors[0]?.message ?? 'Données invalides', 400, {
      errors: v.errors,
    });
  }

  // 6. CSRF
  if (!(await verifyCsrfToken(v.data.csrfToken))) {
    return errorResponse('Token de sécurité invalide ou expiré. Rechargez la page.', 403);
  }

  // 7. Traitement métier
  // TODO: Brancher Supabase ici
  // await supabase.from('contact_messages').insert({
  //   name: v.data.name,
  //   email: v.data.email,
  //   phone: v.data.phone || null,
  //   subject: v.data.subject,
  //   message: v.data.message,
  //   ip,
  //   user_agent: request.headers.get('user-agent'),
  // });

  // TODO: Envoyer email de notification
  // await sendEmail({
  //   to: 'contact@eglise-massy.fr',
  //   subject: `[EEB Massy] Contact ${v.data.subject}`,
  //   body: ...,
  // });

  console.log('[Contact] Nouveau message reçu', {
    from: v.data.email,
    subject: v.data.subject,
    timestamp: new Date().toISOString(),
  });

  return successResponse({
    message: 'Votre message a bien été reçu.',
  });
};
