/**
 * Événements ponctuels de l'église.
 * Module octopus #5 — à brancher Supabase ultérieurement.
 */

export interface ChurchEvent {
  id: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  time?: string; // HH:MM
  endTime?: string;
  location: string;
  category: 'culte' | 'priere' | 'jeunes' | 'enfants' | 'special' | 'formation';
  description: string;
  imageUrl?: string;
}

// Événements générés avec dates relatives — à remplacer par les vrais
const today = new Date();
const inDays = (n: number) => {
  const d = new Date(today);
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0]!;
};

export const events: ChurchEvent[] = [
  {
    id: 'evt-culte-prochain',
    title: 'Culte du dimanche',
    date: inDays(7 - today.getDay()),
    time: '10:30',
    endTime: '12:00',
    location: 'Centre Évangélique Les Cèdres',
    category: 'culte',
    description:
      'Notre culte hebdomadaire avec prédication, louange et temps de prière. Garderie et école du dimanche disponibles.',
  },
  {
    id: 'evt-bible-1an',
    title: 'Bible en 1 an — brunch',
    date: inDays(13 - today.getDay()),
    time: '09:30',
    endTime: '11:30',
    location: 'Les Cèdres (avec l’église d’Antony)',
    category: 'formation',
    description:
      'Rendez-vous hebdomadaire pour échanger sur les lectures de la semaine, autour d’un brunch convivial.',
  },
  {
    id: 'evt-groupe-jeunes',
    title: 'Groupe de jeunes',
    date: inDays(6 - today.getDay()),
    time: '19:30',
    endTime: '22:00',
    location: 'Salle des jeunes — Les Cèdres',
    category: 'jeunes',
    description:
      'Soirée pour les 15-20 ans : étude biblique, jeux, partage et détente.',
  },
  {
    id: 'evt-repas-fraternel',
    title: 'Repas fraternel',
    date: inDays(14),
    time: '12:00',
    endTime: '14:30',
    location: 'Les Cèdres',
    category: 'special',
    description:
      'Notre repas communautaire mensuel — chacun apporte un plat à partager. Moment idéal pour faire connaissance.',
  },
  {
    id: 'evt-soiree-priere',
    title: 'Soirée de prière',
    date: inDays(10),
    time: '20:00',
    endTime: '21:30',
    location: 'Chapelle des Cèdres',
    category: 'priere',
    description:
      'Temps de prière communautaire pour l’église, le quartier et le monde. Ouvert à tous.',
  },
  {
    id: 'evt-parcours-alpha',
    title: 'Parcours Alpha — soirée découverte',
    date: inDays(21),
    time: '19:30',
    endTime: '21:30',
    location: 'Salle communautaire — Les Cèdres',
    category: 'formation',
    description:
      'Vous vous posez des questions sur le sens de la vie, sur Dieu, sur la foi ? Venez à cette soirée d’introduction du Parcours Alpha — repas offert, sans engagement.',
  },
];

export function getUpcomingEvents(limit?: number): ChurchEvent[] {
  const todayIso = today.toISOString().split('T')[0]!;
  const upcoming = events
    .filter((e) => e.date >= todayIso)
    .sort((a, b) => a.date.localeCompare(b.date));
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getEventById(id: string): ChurchEvent | undefined {
  return events.find((e) => e.id === id);
}
