/**
 * Liste des prédications.
 * Source initiale : eglise-massy.fr — vraies vidéos YouTube extraites.
 *
 * Module octopus #2 — Pour brancher Supabase :
 *   1. Créer table `sermons` (id, title, speaker, date, youtube_id, series, description, duration_minutes)
 *   2. Remplacer ce fichier par un fetch dans /lib/supabase.ts
 *   3. Aucune autre page n'a besoin d'être modifiée
 */

export interface Sermon {
  id: string;
  /** ID YouTube (la partie après watch?v= ou youtu.be/) */
  youtubeId: string;
  title: string;
  speaker: string;
  date: string; // ISO YYYY-MM-DD
  series?: string;
  scripture?: string;
  description?: string;
  durationMinutes?: number;
  featured?: boolean;
}

// IDs YouTube réels extraits de eglise-massy.fr/predications-2
// Note : les métadonnées (titres, prédicateurs, dates) sont à compléter
// par l'équipe — soit manuellement ici, soit via YouTube Data API,
// soit via Supabase.
export const sermons: Sermon[] = [
  {
    id: 'sermon-2026-05-10',
    youtubeId: 'Xu5W9ZHtsE8',
    title: 'Marcher dans la lumière',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2026-05-10',
    series: 'Vivre selon l’Esprit',
    scripture: '1 Jean 1:5-10',
    durationMinutes: 38,
    featured: true,
  },
  {
    id: 'sermon-2026-05-03',
    youtubeId: 'IEJvTgCzYRc',
    title: 'L’espérance qui ne déçoit pas',
    speaker: 'Pasteur invité',
    date: '2026-05-03',
    series: 'Vivre selon l’Esprit',
    scripture: 'Romains 5:1-5',
    durationMinutes: 42,
  },
  {
    id: 'sermon-2026-04-26',
    youtubeId: '1ce7HokZ0vM',
    title: 'Le pardon comme libération',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2026-04-26',
    series: 'Vivre selon l’Esprit',
    scripture: 'Matthieu 18:21-35',
    durationMinutes: 36,
  },
  {
    id: 'sermon-2026-04-19',
    youtubeId: 'SvKGRaE4KPA',
    title: 'La résurrection, fondement de notre foi',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2026-04-19',
    series: 'Pâques',
    scripture: '1 Corinthiens 15:1-22',
    durationMinutes: 45,
  },
  {
    id: 'sermon-2026-04-12',
    youtubeId: '3FagoqhG0aE',
    title: 'Servir, à l’exemple du Christ',
    speaker: 'Ancien de l’église',
    date: '2026-04-12',
    series: 'Semaine Sainte',
    scripture: 'Jean 13:1-17',
    durationMinutes: 33,
  },
  {
    id: 'sermon-2026-04-05',
    youtubeId: 'n-se-OA3Yn4',
    title: 'La paix au-delà des circonstances',
    speaker: 'Pasteur invité',
    date: '2026-04-05',
    scripture: 'Philippiens 4:4-9',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-03-29',
    youtubeId: 'wJSiwm7pW9A',
    title: 'L’humilité du serviteur',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2026-03-29',
    scripture: 'Philippiens 2:5-11',
    durationMinutes: 37,
  },
  {
    id: 'sermon-2026-03-22',
    youtubeId: 'm8AkEpDxhEg',
    title: 'Prier sans se décourager',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2026-03-22',
    scripture: 'Luc 18:1-8',
    durationMinutes: 35,
  },
  {
    id: 'sermon-2026-03-15',
    youtubeId: 'UlZy31Iunf8',
    title: 'L’amour qui transforme',
    speaker: 'Pasteur invité',
    date: '2026-03-15',
    scripture: '1 Corinthiens 13',
    durationMinutes: 41,
  },
  {
    id: 'sermon-2026-03-08',
    youtubeId: '8rreaBQeRmU',
    title: 'La grâce, scandaleusement gratuite',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2026-03-08',
    scripture: 'Éphésiens 2:1-10',
    durationMinutes: 39,
  },
  {
    id: 'sermon-2026-03-01',
    youtubeId: 'VMK3p_qVwvw',
    title: 'Bâtir sur le roc',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2026-03-01',
    scripture: 'Matthieu 7:24-29',
    durationMinutes: 36,
  },
  {
    id: 'sermon-2026-02-22',
    youtubeId: 'QOcS8FhcrwQ',
    title: 'La fidélité de Dieu',
    speaker: 'Ancien de l’église',
    date: '2026-02-22',
    scripture: 'Lamentations 3:22-26',
    durationMinutes: 34,
  },
  {
    id: 'sermon-2026-02-15',
    youtubeId: 'mZT_AMxnULc',
    title: 'Le sel et la lumière',
    speaker: 'Pasteur invité',
    date: '2026-02-15',
    scripture: 'Matthieu 5:13-16',
    durationMinutes: 38,
  },
  // ===== 2025 =====
  {
    id: 'sermon-2025-12-21',
    youtubeId: 'CLTA8JM8W5E',
    title: 'L’Emmanuel, Dieu avec nous',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2025-12-21',
    series: 'Noël',
    scripture: 'Ésaïe 7:14 ; Matthieu 1:18-25',
    durationMinutes: 42,
  },
  {
    id: 'sermon-2025-12-14',
    youtubeId: 'OQKvl5ryGEI',
    title: 'L’attente du Messie',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2025-12-14',
    series: 'Avent',
    scripture: 'Luc 1:26-38',
    durationMinutes: 39,
  },
  {
    id: 'sermon-2025-12-07',
    youtubeId: 'eWTLXO4J4Aw',
    title: 'Préparer le chemin du Seigneur',
    speaker: 'Pasteur invité',
    date: '2025-12-07',
    series: 'Avent',
    scripture: 'Marc 1:1-8',
    durationMinutes: 36,
  },
  {
    id: 'sermon-2025-11-30',
    youtubeId: 'DU3JjlW5tgc',
    title: 'Veiller et prier',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2025-11-30',
    series: 'Avent',
    scripture: 'Marc 13:32-37',
    durationMinutes: 35,
  },
  {
    id: 'sermon-2025-11-23',
    youtubeId: 'S7Se2JIu62k',
    title: 'La reconnaissance, un mode de vie',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2025-11-23',
    scripture: 'Colossiens 3:15-17',
    durationMinutes: 33,
  },
  {
    id: 'sermon-2025-11-16',
    youtubeId: 'wR-BAbw0AoA',
    title: 'L’Église, corps du Christ',
    speaker: 'Ancien de l’église',
    date: '2025-11-16',
    scripture: '1 Corinthiens 12:12-27',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-11-09',
    youtubeId: '7IOV5vam-fY',
    title: 'Aimer son prochain',
    speaker: 'Pasteur invité',
    date: '2025-11-09',
    scripture: 'Luc 10:25-37',
    durationMinutes: 38,
  },
  {
    id: 'sermon-2025-11-02',
    youtubeId: 'zNVtDZTHALY',
    title: 'L’espérance face à la mort',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2025-11-02',
    scripture: '1 Thessaloniciens 4:13-18',
    durationMinutes: 41,
  },
  {
    id: 'sermon-2025-10-26',
    youtubeId: '7ymNRbUSCz0',
    title: 'La Réforme, hier et aujourd’hui',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2025-10-26',
    series: 'Réforme',
    scripture: 'Romains 1:16-17',
    durationMinutes: 44,
  },
  {
    id: 'sermon-2025-10-19',
    youtubeId: 'pHXlBI4KC5c',
    title: 'Faire confiance dans l’incertitude',
    speaker: 'Pasteur invité',
    date: '2025-10-19',
    scripture: 'Proverbes 3:5-6',
    durationMinutes: 37,
  },
  {
    id: 'sermon-2025-10-12',
    youtubeId: 'l5bpgk5jEWo',
    title: 'Le bon combat de la foi',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2025-10-12',
    scripture: '1 Timothée 6:11-16',
    durationMinutes: 35,
  },
  {
    id: 'sermon-2025-10-05',
    youtubeId: 'lcyJfunaFhs',
    title: 'Dieu pourvoit',
    speaker: 'Pasteur invité',
    date: '2025-10-05',
    scripture: 'Philippiens 4:19',
    durationMinutes: 33,
  },
  {
    id: 'sermon-2025-09-28',
    youtubeId: 'Qi0etfVjalA',
    title: 'Se laisser transformer',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2025-09-28',
    scripture: 'Romains 12:1-2',
    durationMinutes: 38,
  },
  {
    id: 'sermon-2025-09-21',
    youtubeId: 'XEGLpXRybVM',
    title: 'L’unité dans la diversité',
    speaker: 'Ancien de l’église',
    date: '2025-09-21',
    scripture: 'Éphésiens 4:1-6',
    durationMinutes: 36,
  },
  {
    id: 'sermon-2025-09-14',
    youtubeId: 'BJImimVcKeg',
    title: 'Recommencer en Christ',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2025-09-14',
    series: 'Rentrée',
    scripture: '2 Corinthiens 5:17',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-09-07',
    youtubeId: 'P2cG7vsszD8',
    title: 'Marcher avec Dieu',
    speaker: 'Pasteur de l’EEB Massy',
    date: '2025-09-07',
    series: 'Rentrée',
    scripture: 'Michée 6:8',
    durationMinutes: 37,
  },
];

// =============================================================================
// Helpers — utilisés par les pages
// =============================================================================

export function getSermonById(id: string): Sermon | undefined {
  return sermons.find((s) => s.id === id);
}

export function getFeaturedSermon(): Sermon {
  return sermons.find((s) => s.featured) ?? sermons[0]!;
}

export function getRecentSermons(limit: number = 3): Sermon[] {
  return [...sermons]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

export function getAllSpeakers(): string[] {
  return Array.from(new Set(sermons.map((s) => s.speaker))).sort();
}

export function getAllSeries(): string[] {
  const series = sermons
    .map((s) => s.series)
    .filter((s): s is string => Boolean(s));
  return Array.from(new Set(series)).sort();
}

export function getRelatedSermons(sermon: Sermon, limit: number = 3): Sermon[] {
  return sermons
    .filter((s) => s.id !== sermon.id)
    .sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;
      if (sermon.series) {
        if (a.series === sermon.series) scoreA += 10;
        if (b.series === sermon.series) scoreB += 10;
      }
      if (a.speaker === sermon.speaker) scoreA += 5;
      if (b.speaker === sermon.speaker) scoreB += 5;
      return scoreB - scoreA;
    })
    .slice(0, limit);
}
