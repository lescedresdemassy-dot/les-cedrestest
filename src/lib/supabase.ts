import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = import.meta.env.PUBLIC_SUPABASE_SERVICE_ROLE_KEY; // 🧠 Mis à jour ici avec "PUBLIC_"

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  console.error("⚠️ Attention : Les variables d'environnement Supabase ne sont pas chargées correctement.");
}

// Client public (dédié à la lecture)
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

// Client admin (dédié à l'écriture - Contourne la sécurité RLS)
export const supabaseAdmin = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseServiceKey || 'placeholder-key',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);