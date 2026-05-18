import type { APIRoute } from 'astro';
import { generateCsrfToken, jsonResponse } from '../../lib/security.ts';

export const prerender = false;

export const GET: APIRoute = async () => {
  const token = await generateCsrfToken();
  return jsonResponse(
    { token, expiresIn: 2 * 60 * 60 * 1000 },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    }
  );
};
