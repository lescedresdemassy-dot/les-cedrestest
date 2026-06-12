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
import { GroupJoinSchema } from '../../lib/schemas.ts';
import { getGroupById } from '../../data/groups.ts';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!isAllowedOrigin(request)) {
    return errorResponse('Origine non autorisée', 403);
  }

  const contentLength = Number(request.headers.get('content-length') || '0');
  if (contentLength > 50 * 1024) {
    return errorResponse('Flux de données trop volumineux', 413);
  }

  const ip = getClientIp(request);
  const rl = checkRateLimit(ip, {
    bucket: 'group-join',
    limit: 10,
    windowMs: 60 * 60 * 1000, // 10/h
  });
  if (!rl.success) {
    return errorResponse(
      'Trop de demandes en peu de temps. Réessayez plus tard.',
      429
    );
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

  const v = validate(GroupJoinSchema, body);
  if (!v.ok) {
    return errorResponse(v.errors[0]?.message ?? 'Données invalides', 400);
  }

  if (!(await verifyCsrfToken(v.data.csrfToken))) {
    return errorResponse('Token de sécurité invalide', 403);
  }

  // Vérifie que le groupe existe
  const group = getGroupById(v.data.groupId);
  if (!group) {
    return errorResponse('Groupe introuvable', 404);
  }
  if (!group.accepting) {
    return errorResponse(
      'Ce groupe n’accepte plus de nouveaux membres pour le moment',
      400
    );
  }

  // TODO Supabase
  console.log('[GroupJoin] Nouvelle demande', {
    group: group.name,
    from: v.data.email,
    timestamp: new Date().toISOString(),
  });

  return successResponse({
    message: `Votre demande pour rejoindre ${group.name} a été envoyée.`,
  });
};
