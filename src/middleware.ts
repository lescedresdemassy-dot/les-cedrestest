import { defineMiddleware } from 'astro:middleware';

/**
 * Middleware Astro — uniquement sur les routes dynamiques (/api/*).
 * Les pages prérendues n'ont pas accès à request.headers car elles sont statiques.
 * Le rate limiting et la sécurité primaire vivent dans /lib/security.ts,
 * appelés depuis chaque API route individuellement.
 */

const SUSPICIOUS_USER_AGENTS = [
  /nikto/i,
  /sqlmap/i,
  /nessus/i,
  /metasploit/i,
  /wpscan/i,
  /masscan/i,
];

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Ne touche QUE les routes API (les pages prérendues ne devraient pas
  // déclencher d'accès aux headers en static)
  if (!url.pathname.startsWith('/api/')) {
    return next();
  }

  const userAgent = context.request.headers.get('user-agent') ?? '';

  if (SUSPICIOUS_USER_AGENTS.some((p) => p.test(userAgent))) {
    return new Response('Forbidden', { status: 403 });
  }

  if (!userAgent) {
    return new Response('Forbidden', { status: 403 });
  }

  const response = await next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  return response;
});
