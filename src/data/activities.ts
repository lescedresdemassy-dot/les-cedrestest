/**
 * Activités hebdomadaires et régulières de l'église.
 * Source : eglise-massy.fr/activites
 *
 * Module octopus #3.
 */

export interface Activity {
  id: string;
  category: 'dimanche' | 'semaine' | 'jeunes' | 'famille' | 'biblique';
  title: string;
  schedule: string; // texte humain
  scheduleStructured?: {
    day: 'lundi' | 'mardi' | 'mercredi' | 'jeudi' | 'vendredi' | 'samedi' | 'dimanche';
    time: string; // HH:MM
  }[];
  location?: string;
  audience: string;
  description: string;
  highlight?: boolean;
  icon: string;
}

export const activities: Activity[] = [
  // ====== DIMANCHE ======
  {
    id: 'culte-dimanche',
    category: 'dimanche',
    title: 'Culte du dimanche',
    schedule: 'Tous les dimanches à 10h30',
    scheduleStructured: [{ day: 'dimanche', time: '10:30' }],
    location: 'Centre Évangélique Les Cèdres, 17 voie de Wissous',
    audience: 'Ouvert à tous — croyants ou en recherche',
    description:
      'Moment privilégié où nous nous présentons à Dieu, lui rendons honneur et célébrons son œuvre rédemptrice. Prières, chants, et commentaire d’un texte biblique. Réunion publique où tout le monde est le bienvenu.',
    highlight: true,
    icon: 'sun',
  },
  {
    id: 'garderie',
    category: 'famille',
    title: 'Garderie pour les tout-petits',
    schedule: 'Pendant le culte du dimanche',
    scheduleStructured: [{ day: 'dimanche', time: '10:30' }],
    location: 'Salle dédiée — Les Cèdres',
    audience: 'Enfants de moins de 3 ans',
    description:
      'Pour les parents qui le désirent, les enfants de moins de 3 ans sont pris en charge par un service de garderie pendant la durée du culte.',
    icon: 'baby',
  },
  {
    id: 'ecole-dimanche',
    category: 'famille',
    title: 'École du dimanche',
    schedule: 'Pendant le culte du dimanche, après 30 min',
    scheduleStructured: [{ day: 'dimanche', time: '11:00' }],
    location: 'Salles d’enseignement — Les Cèdres',
    audience: 'Enfants à partir de 3 ans, répartis par groupes d’âge',
    description:
      'Après une demi-heure de culte avec leurs parents, les enfants rejoignent différents groupes pour recevoir un enseignement biblique adapté à leur âge, dans une ambiance joyeuse.',
    icon: 'children',
  },
  {
    id: 'repas-fraternel',
    category: 'dimanche',
    title: 'Repas fraternel',
    schedule: 'Chaque 3ème dimanche du mois, après le culte',
    scheduleStructured: [{ day: 'dimanche', time: '12:00' }],
    location: 'Les Cèdres',
    audience: 'Toute la communauté et les invités',
    description:
      'Chaque troisième dimanche du mois (sauf exception), pour ceux qui le désirent, nous prolongeons notre rencontre par un repas communautaire où chacun apporte un plat à partager.',
    icon: 'meal',
  },

  // ====== JEUNES ======
  {
    id: 'groupe-jeunes',
    category: 'jeunes',
    title: 'Groupe de jeunes',
    schedule: 'Samedis soirs',
    scheduleStructured: [{ day: 'samedi', time: '19:30' }],
    location: 'Salle dédiée aux jeunes — Les Cèdres',
    audience: '15 à 20 ans',
    description:
      'Un rendez-vous pour les jeunes le samedi soir dans une salle qui leur est réservée (babyfoot, boissons, espace de détente). Temps d’étude de la Bible et de partage dans une ambiance amicale.',
    highlight: true,
    icon: 'youth',
  },

  // ====== SEMAINE ======
  {
    id: 'groupes-quartier',
    category: 'semaine',
    title: 'Groupes de quartier',
    schedule: 'Mercredis, jeudis et vendredis, 20h00 ou 20h30',
    scheduleStructured: [
      { day: 'mercredi', time: '20:00' },
      { day: 'jeudi', time: '20:30' },
      { day: 'vendredi', time: '20:00' },
    ],
    location: 'Chez des particuliers, à Massy et dans les environs',
    audience: 'Groupes de 8 à 12 personnes en moyenne',
    description:
      'Petites réunions chaleureuses où l’on se retrouve pour louer Dieu, prier et étudier la Bible ensemble. L’occasion de tisser des liens fraternels durables dans une ambiance simple et accueillante.',
    highlight: true,
    icon: 'home',
  },
  {
    id: 'groupe-seniors',
    category: 'semaine',
    title: 'Groupe des seniors',
    schedule: 'Rencontres ponctuelles',
    location: 'Les Cèdres ou domiciles',
    audience: 'Seniors de la communauté',
    description:
      'Un groupe qui se réunit ponctuellement pour des temps de partage, d’étude biblique et de fraternité adaptés à cette saison de la vie.',
    icon: 'seniors',
  },

  // ====== BIBLE ======
  {
    id: 'bible-en-1-an',
    category: 'biblique',
    title: 'La Bible en 1 an',
    schedule: 'Samedis matin, autour d’un brunch',
    scheduleStructured: [{ day: 'samedi', time: '09:30' }],
    location: 'Les Cèdres (en commun avec l’Église d’Antony)',
    audience: 'Une quinzaine de participants',
    description:
      'Depuis plusieurs années, une quinzaine de personnes se retrouvent autour d’un brunch le samedi matin pour échanger leurs découvertes et s’encourager dans la lecture de toute la Bible en un an, selon un plan chronologique. 20 à 30 minutes de lecture par jour suffisent.',
    highlight: true,
    icon: 'book',
  },
];

// =============================================================================
// Témoignages liés à "Bible en 1 an" (vrais témoignages extraits du site)
// =============================================================================

export interface ActivityTestimony {
  activityId: string;
  name: string;
  text: string;
}

export const activityTestimonies: ActivityTestimony[] = [
  {
    activityId: 'bible-en-1-an',
    name: 'Marie-France',
    text: 'Je suis très attachée à ce programme de lecture et à ces rencontres car je découvre la personne de Dieu et son plan de salut. C’est très enrichissant dans la semaine, puis de partager ses réflexions avec les frères et sœurs chaque samedi. Nous tissons de véritables liens fraternels. Cette expérience éveille en moi le désir de mettre la parole de Dieu en pratique dans ma vie de tous les jours.',
  },
  {
    activityId: 'bible-en-1-an',
    name: 'Pascal',
    text: 'Je ne connaissais pas bien l’Ancien Testament, et ce programme de lecture m’a permis de faire le lien entre l’Ancien et le Nouveau à travers un plan bien étudié. Les commentaires des animateurs et le partage avec les participants donnent un éclairage qui complète très agréablement notre découverte personnelle. J’ai pu grandir dans ma foi, et passer du lait à une nourriture plus consistante.',
  },
  {
    activityId: 'bible-en-1-an',
    name: 'Kevin',
    text: 'Je suis très content de participer chaque samedi à la « Bible en 1 an » de notre église. Cela me permet de grandir dans la foi en comprenant pas mal de choses avec ce qui est dit par les animateurs. J’ai donné ma vie à Christ il y a peu, et étant jeune, je me pose des questions dont certaines sont abordées dans ces rencontres. J’encourage les jeunes et moins jeunes à y participer.',
  },
];

export function getActivitiesByCategory(
  category: Activity['category']
): Activity[] {
  return activities.filter((a) => a.category === category);
}

export function getHighlightActivities(): Activity[] {
  return activities.filter((a) => a.highlight);
}
