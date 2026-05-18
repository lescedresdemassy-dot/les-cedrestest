/**
 * Groupes de quartier (Home Groups).
 * Structure prête à brancher Supabase.
 *
 * Module octopus #4 — TODO: remplacer par fetch Supabase une fois la table créée.
 *
 * Schéma Supabase suggéré :
 *   CREATE TABLE home_groups (
 *     id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 *     name        text NOT NULL,
 *     area        text NOT NULL,
 *     leader_name text NOT NULL,
 *     day         text NOT NULL,
 *     time        text NOT NULL,
 *     latitude    numeric(9,6),
 *     longitude   numeric(9,6),
 *     capacity    integer DEFAULT 12,
 *     description text,
 *     accepting   boolean DEFAULT true,
 *     created_at  timestamptz DEFAULT now()
 *   );
 */

export interface HomeGroup {
  id: string;
  name: string;
  area: string;
  leaderName: string;
  day: 'lundi' | 'mardi' | 'mercredi' | 'jeudi' | 'vendredi' | 'samedi';
  time: string; // HH:MM
  latitude: number;
  longitude: number;
  capacity: number;
  description: string;
  accepting: boolean;
}

// Coordonnées approximatives des quartiers de Massy et environs
// (à remplacer par les vraies adresses des hôtes)
export const homeGroups: HomeGroup[] = [
  {
    id: 'gq-massy-centre',
    name: 'Groupe Massy Centre',
    area: 'Massy — Centre',
    leaderName: 'Famille A.',
    day: 'mercredi',
    time: '20:00',
    latitude: 48.728,
    longitude: 2.2832,
    capacity: 12,
    description:
      'Un groupe chaleureux pour louer Dieu, prier et étudier la Bible. Tous les âges sont les bienvenus.',
    accepting: true,
  },
  {
    id: 'gq-massy-opera',
    name: 'Groupe Massy Opéra',
    area: 'Massy — Opéra',
    leaderName: 'Famille B.',
    day: 'jeudi',
    time: '20:30',
    latitude: 48.7314,
    longitude: 2.2745,
    capacity: 10,
    description:
      'Groupe convivial centré sur l’étude biblique et le partage de vie. Brunch occasionnel.',
    accepting: true,
  },
  {
    id: 'gq-massy-villaine',
    name: 'Groupe Villaine',
    area: 'Massy — Villaine',
    leaderName: 'Famille C.',
    day: 'vendredi',
    time: '20:00',
    latitude: 48.7185,
    longitude: 2.2779,
    capacity: 12,
    description:
      'Groupe familial avec enfants bienvenus. Études de l’Évangile selon Jean en cours.',
    accepting: true,
  },
  {
    id: 'gq-antony',
    name: 'Groupe Antony',
    area: 'Antony — Centre',
    leaderName: 'Famille D.',
    day: 'mercredi',
    time: '20:00',
    latitude: 48.7547,
    longitude: 2.2972,
    capacity: 10,
    description:
      'Pour les habitants d’Antony et alentours. Étude biblique et prière dans une ambiance familiale.',
    accepting: true,
  },
  {
    id: 'gq-palaiseau',
    name: 'Groupe Palaiseau',
    area: 'Palaiseau',
    leaderName: 'Famille E.',
    day: 'jeudi',
    time: '20:30',
    latitude: 48.7146,
    longitude: 2.2456,
    capacity: 10,
    description:
      'Groupe au sud de la zone, idéal pour les habitants de Palaiseau et Igny.',
    accepting: true,
  },
  {
    id: 'gq-wissous',
    name: 'Groupe Wissous',
    area: 'Wissous',
    leaderName: 'Famille F.',
    day: 'vendredi',
    time: '20:00',
    latitude: 48.7344,
    longitude: 2.3275,
    capacity: 8,
    description:
      'Petit groupe intime, parfait pour démarrer en douceur. Toujours un café d’accueil.',
    accepting: true,
  },
  {
    id: 'gq-igny',
    name: 'Groupe Igny',
    area: 'Igny',
    leaderName: 'Famille G.',
    day: 'mercredi',
    time: '20:00',
    latitude: 48.7434,
    longitude: 2.2178,
    capacity: 10,
    description:
      'Groupe accueillant les habitants d’Igny, Bièvres et Vauboyen.',
    accepting: true,
  },
  {
    id: 'gq-verrieres',
    name: 'Groupe Verrières-le-Buisson',
    area: 'Verrières-le-Buisson',
    leaderName: 'Famille H.',
    day: 'jeudi',
    time: '20:00',
    latitude: 48.7501,
    longitude: 2.2606,
    capacity: 10,
    description:
      'Groupe intergénérationnel, étude biblique et temps de prière.',
    accepting: true,
  },
];

export function getAcceptingGroups(): HomeGroup[] {
  return homeGroups.filter((g) => g.accepting);
}

export function getGroupById(id: string): HomeGroup | undefined {
  return homeGroups.find((g) => g.id === id);
}

export function getGroupsByDay(day: HomeGroup['day']): HomeGroup[] {
  return homeGroups.filter((g) => g.day === day);
}
