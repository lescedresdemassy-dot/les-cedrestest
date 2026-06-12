/**
 * Liste des prédications.
 * Générée automatiquement pour correspondre exactement aux vidéos du site.
 */

export interface Sermon {
  id: string;
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

export const sermons: Sermon[] = [
  {
    id: 'sermon-2026-05-24',
    youtubeId: 'BJu4OqsLuas',
    title: "Pourquoi le Christ envoie-t-il l'Esprit Saint aux chrétiens ?",
    speaker: 'Simon KEGLO',
    date: '2026-05-24',
    scripture: 'Jean 14:16-18 ; Jean 16:13 ; Actes 1:8 ; Romains 8:26-27 ; Éphésiens 1:13-14',
    durationMinutes: 40,
    featured: true,
  },
  {
    id: 'sermon-2026-05-17',
    youtubeId: 'vvYX-bYPjls',
    title: 'La consolation de DIEU pour ceux qui écoutent sa parole',
    speaker: 'Anne DEBA',
    date: '2026-05-17',
    scripture: 'Ésaïe 66:5-14',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-05-10',
    youtubeId: 'LkRUEBNIED0',
    title: 'Portrait de disciples (5)',
    speaker: 'Éric Le Guéhennec',
    date: '2026-05-10',
    scripture: 'Matthieu 7:1-12',
    series: 'Portrait de disciples',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-05-03',
    youtubeId: 'VJHep2kQSuo',
    title: "LE JUSTE VIVRA PAR LA FOI — Vivre sans voir",
    speaker: "Simon KEGLO",
    date: '2026-05-03',
    scripture: 'Habacuc 2:1-4',
    series: 'Le juste vivra par la foi',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-04-26',
    youtubeId: 'X0HqnbTpHeY',
    title: "Dimanche des vocations",
    speaker: "Jason PEREIRA",
    date: '2026-04-26',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-04-12',
    youtubeId: 'Xu5W9ZHtsE8',
    title: "Ne vous inquiétez pas !",
    speaker: "Eric LE GUEHENNEC",
    date: '2026-04-12',
    scripture: 'Matthieu 6:19-34',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-04-05',
    youtubeId: 'IEJvTgCzYRc',
    title: "Il est vraiment ressuscité !",
    speaker: "Eric LE GUEHENNEC",
    date: '2026-04-05',
    scripture: 'Jean 20:1-9',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-03-22',
    youtubeId: '1ce7HokZ0vM',
    title: "Jacob",
    speaker: "Colette JEUCH",
    date: '2026-03-22',
    scripture: 'Genèse 28:5 ; 10-22',
    series: 'Jacob',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-03-15',
    youtubeId: 'SvKGRaE4KPA',
    title: "LE TRAVAIL COMME DON, DÉFI ET UN CHEMIN DE SOLIDARITÉ",
    speaker: "Emile BOODJE",
    date: '2026-03-15',
    scripture: 'Genèse 2:15 ; Genèse 3:19 ; Éphésiens 4:28',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-03-08',
    youtubeId: '3FagoqhG0aE',
    title: "LA VISION ATTEND SON TEMPS",
    speaker: "Simon KEGLO",
    date: '2026-03-08',
    scripture: 'Habacuc 2:1-4',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-02-22',
    youtubeId: 'n-se-OA3Yn4',
    title: "Quand la foi choisit d'attendre",
    speaker: "Simon KEGLO",
    date: '2026-02-22',
    scripture: 'Habacuc 2:1',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-02-15',
    youtubeId: 'wJSiwm7pW9A',
    title: "Quand Dieu change les temps",
    speaker: "Simon KEGLO",
    date: '2026-02-15',
    scripture: 'Daniel 2:21',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-02-08',
    youtubeId: 'm8AkEpDxhEg',
    title: "Prédication du 8 février 2026",
    speaker: "Eric Le Guéhennec",
    date: '2026-02-08',
    scripture: 'Matthieu 5:17-48',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-02-01',
    youtubeId: 'UlZy31Iunf8',
    title: "Prédication du 1er février 2026",
    speaker: "Simon KEGLO",
    date: '2026-02-01',
    scripture: 'Genèse 16',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-01-25',
    youtubeId: '8rreaBQeRmU',
    title: "Prédication du 25 janvier 2026",
    speaker: "Emile BOODJE",
    date: '2026-01-25',
    scripture: 'Ézéchiel 28:1-19',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-01-18',
    youtubeId: 'VMK3p_qVwvw',
    title: "Prédication du 18 janvier 2026",
    speaker: "Philippe HALLIDAY",
    date: '2026-01-18',
    scripture: '1 Samuel 1:1-18',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-01-11',
    youtubeId: 'QOcS8FhcrwQ',
    title: "Prédication du 11 janvier 2026",
    speaker: "Colette JEUCH",
    date: '2026-01-11',
    scripture: 'Genèse 25:29-34',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2026-01-04',
    youtubeId: 'mZT_AMxnULc',
    title: "Prédication du 4 janvier 2026",
    speaker: "Anne DEBA",
    date: '2026-01-04',
    scripture: 'Marc 8:34-38',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-12-14',
    youtubeId: 'CLTA8JM8W5E',
    title: "Prédication du 14 décembre 2025",
    speaker: "Simon KEGLO",
    date: '2025-12-14',
    scripture: '2 Samuel 7:1-16 ; Luc 1:26-38',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-11-30',
    youtubeId: 'OQKvl5ryGEI',
    title: "Prédication du 30 novembre 2025",
    speaker: "Simon KEGLO",
    date: '2025-11-30',
    scripture: 'Ésaïe 63:16-64:7 ; 1 Corinthiens 1:3-9 ; Marc 13:33-37',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-11-23',
    youtubeId: 'eWTLXO4J4Aw',
    title: "Prédication du 23 novembre 2025",
    speaker: "Anne DEBA",
    date: '2025-11-23',
    scripture: 'Esther 4:11-17',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-11-16',
    youtubeId: 'DU3JjlW5tgc',
    title: "Jacob",
    speaker: "Colette JEUCH",
    date: '2025-11-16',
    scripture: 'Genèse 25:29-34',
    series: 'Jacob',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-11-09',
    youtubeId: 'S7Se2JIu62k',
    title: "Prédication du 9 novembre 2025",
    speaker: "Emile BOODJE",
    date: '2025-11-09',
    scripture: '1 Samuel 7:12',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-11-02',
    youtubeId: 'wR-BAbw0AoA',
    title: "Jacob",
    speaker: "Colette JEUCH",
    date: '2025-11-02',
    scripture: 'Genèse 25:19-28',
    series: 'Jacob',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-10-26',
    youtubeId: '7IOV5vam-fY',
    title: "Dimanche de la réformation",
    speaker: "Didier PETIT",
    date: '2025-10-26',
    scripture: 'Jean 6:63-69',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-10-19',
    youtubeId: 'zNVtDZTHALY',
    title: "La parabole des dix jeunes filles",
    speaker: "Simon KEGLO",
    date: '2025-10-19',
    scripture: 'Matthieu 25:1-13',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-10-05',
    youtubeId: '7ymNRbUSCz0',
    title: "Portrait de disciples",
    speaker: "Eric LE GUEHENNEC",
    date: '2025-10-05',
    scripture: 'Matthieu 5:1-16',
    series: 'Portrait de disciples',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-09-21',
    youtubeId: 'pHXlBI4KC5c',
    title: "David et Goliath",
    speaker: "Colette JEUCH",
    date: '2025-09-21',
    scripture: '1 Samuel 17:1-51',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-09-14',
    youtubeId: 'l5bpgk5jEWo',
    title: "Dieu est souverain ; il fait ce qu'il veut. Mais il nous demande d'agir",
    speaker: "Simon KEGLO",
    date: '2025-09-14',
    scripture: 'Philippiens 2:12-13',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-09-07',
    youtubeId: 'lcyJfunaFhs',
    title: "Tout ce que Dieu fait, est bon !",
    speaker: "Simon KEGLO",
    date: '2025-09-07',
    scripture: 'Romains 8:18-30',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-08-24',
    youtubeId: 'Qi0etfVjalA',
    title: "Prédication du 24 août 2025",
    speaker: "Emile BOODJE",
    date: '2025-08-24',
    scripture: 'Galates 4:21-31',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-08-17',
    youtubeId: 'XEGLpXRybVM',
    title: "Prédication du 17 août 2025",
    speaker: "Eric LE GUEHENNEC",
    date: '2025-08-17',
    scripture: 'Luc 12:49-53',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-08-10',
    youtubeId: 'BJImimVcKeg',
    title: "Prédication du 10 août 2025",
    speaker: "Simon KEGLO",
    date: '2025-08-10',
    scripture: 'Psaumes 57 ; Romains 7',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-08-03',
    youtubeId: 'P2cG7vsszD8',
    title: "Prédication du 3 août 2025",
    speaker: "Anne DEBA",
    date: '2025-08-03',
    scripture: 'Juges 13:1-5, 24 ; 16:4-6, 16-21',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-07-20',
    youtubeId: '_KrAdeGjmco',
    title: "Prédication du 20 juillet 2025",
    speaker: "Simon KEGLO",
    date: '2025-07-20',
    scripture: 'Jérémie 7:1-15',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-07-13',
    youtubeId: 'SLGxLrgs1P4',
    title: "Le Sacrifice d'Isaac",
    speaker: "Colette JEUCH",
    date: '2025-07-13',
    scripture: 'Genèse 22:1-19',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-04-20',
    youtubeId: 'MrKYK_-1LgE',
    title: "Prédication du 20 avril 2025",
    speaker: "Simon KEGLO",
    date: '2025-04-20',
    scripture: '1 Corinthiens 15',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-04-13',
    youtubeId: 'qCkIirzk018',
    title: "Prédication du 13 avril 2025",
    speaker: "Thierry AUGUSTE",
    date: '2025-04-13',
    scripture: '2 Chroniques 6:12-42 ; 2 Chroniques 7:1-3',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-04-06',
    youtubeId: 'Irn1x_BPNmg',
    title: "Prédication du 6 avril 2025",
    speaker: "Simon KEGLO",
    date: '2025-04-06',
    scripture: 'Galates 4:1-31',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-03-30',
    youtubeId: 'gds7LLI9nu4',
    title: "Prédication du 30 mars 2025",
    speaker: "Anne DEBA",
    date: '2025-03-30',
    scripture: 'Galates 3:19-29',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-03-23',
    youtubeId: 'eRHL92m31NU',
    title: "Prédication du 23 mars 2025",
    speaker: "Eric LE GUEHENNEC",
    date: '2025-03-23',
    scripture: '1 Samuel 1:1-11',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-03-16',
    youtubeId: 'r-zzkCMYIqw',
    title: "Prédication du 16 mars 2025",
    speaker: "Emile BOODJE",
    date: '2025-03-16',
    scripture: 'Galates 6:6-14',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-03-09',
    youtubeId: 'ykpLxx-odww',
    title: "Prédication du 9 mars 2025",
    speaker: "Stéphane TOTI",
    date: '2025-03-09',
    scripture: 'Actes 10:34-44',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-03-02',
    youtubeId: 'BFuVQ3V2i9Y',
    title: "Prédication du 2 mars 2025",
    speaker: "Colette JEUCH",
    date: '2025-03-02',
    scripture: 'Galates 2:11-21',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-02-23',
    youtubeId: 'ljElu_QcfIs',
    title: "Prédication du 23 février 2025",
    speaker: "Simon KEGLO",
    date: '2025-02-23',
    scripture: 'Galates 2:1-10',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-02-16',
    youtubeId: 'fcgePGSauts',
    title: "Prédication du 16 février 2025",
    speaker: "Simon KEGLO",
    date: '2025-02-16',
    scripture: 'Galates 1:10-24',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-02-02',
    youtubeId: 'xLnkRFj4tGA',
    title: "Prédication du 2 février 2025",
    speaker: "Simon KEGLO",
    date: '2025-02-02',
    scripture: 'Galates 1:1-5',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-01-26',
    youtubeId: 'ffaxIDM83tg',
    title: "Prédication du 26 janvier 2025",
    speaker: "Simon BARAKAT",
    date: '2025-01-26',
    scripture: 'Esdras 4:1-15',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-01-19',
    youtubeId: 'YB5EOWtx_IA',
    title: "Prédication du 19 janvier 2025",
    speaker: "Anne DEBA",
    date: '2025-01-19',
    scripture: 'Juges 11:1-11 et 29-40',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-01-12',
    youtubeId: 'dVDc91610KQ',
    title: "Prédication du 12 janvier 2025",
    speaker: "Emile BOODJE",
    date: '2025-01-12',
    scripture: 'Luc 19:1-10',
    durationMinutes: 40,
  },
  {
    id: 'sermon-2025-01-05',
    youtubeId: 'bot-XXZovk8',
    title: "Prédication du 5 janvier 2025",
    speaker: "Simon KEGLO",
    date: '2025-01-05',
    scripture: 'Romains 5:1-8',
    durationMinutes: 40,
  },
];

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
