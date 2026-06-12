import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../lib/supabase';

// 🌟 OBLIGATOIRE POUR ASTRO v6 (Empêche Astro de figer cette route en fichier statique)
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Récupération de l'adresse IP du visiteur depuis les headers standard
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

    // Insertion des données directement dans ta table PostgreSQL Supabase
    const { error } = await supabaseAdmin
      .from('contact_messages')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject,
        message: data.message,
        ip: ip,
        user_agent: request.headers.get('user-agent'),
      });

    // Si Supabase renvoie une erreur, on la capture immédiatement
    if (error) {
      console.error('[Contact] Erreur Supabase:', error);
      return new Response(JSON.stringify({ error: 'Erreur lors de l\'enregistrement' }), { status: 500 });
    }

    // Tout s'est bien passé
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err: any) {
    console.error('[Contact] Erreur API:', err.message);
    return new Response(JSON.stringify({ error: 'Requête invalide' }), { status: 400 });
  }
};