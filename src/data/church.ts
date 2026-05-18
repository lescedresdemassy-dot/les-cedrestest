/**
 * Informations institutionnelles de l'Église Évangélique Baptiste de Massy.
 * Source : eglise-massy.fr (extraction du site WordPress actuel).
 *
 * Module octopus #1 — TOUT ce qui concerne l'identité de l'église.
 * À éditer ici uniquement. Importé partout.
 */

export const church = {
  // Identité
  name: 'Église Évangélique Baptiste de Massy',
  shortName: 'EEB Massy',
  baseline:
    'Une communauté ouverte, chaleureuse et fraternelle, au cœur de Massy.',
  description:
    'Notre église fait partie de l’Église universelle de Jésus-Christ. Nous partageons une même foi avec tous ceux qui suivent Jésus-Christ d’un cœur sincère, basée sur la Bible.',

  // Bâtiment
  building: {
    name: 'Centre Évangélique Les Cèdres',
    acronym: 'C.E.D.R.E.S — Centre Évangélique de Recherches, d’Entraide et de Service',
    built: 1971,
    firstService: 1972,
  },

  // Histoire
  history: {
    foundingYear: 1972,
    chapelExpansion: 2001,
    chapelCapacity: 140,
    twoServicesSince: 2011,
    totalCapacity: 200,
    nationalities: 20,
  },

  // Adresse
  address: {
    street: '17 voie de Wissous',
    postalCode: '91300',
    city: 'Massy',
    country: 'France',
    full: '17 voie de Wissous, 91300 Massy',
    coordinates: {
      lat: 48.7297,
      lng: 2.2958,
    },
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10526.914499769453!2d2.2957913461513764!3d48.72977686840033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6779a4e235acf%3A0xa942595a4ada562!2sEglise+Evang%C3%A9lique+Baptiste!5e0!3m2!1sfr!2sfr',
    googleMapsDirections:
      'https://www.google.fr/maps/dir//17+Voie+de+Wissous,+91300+Massy/@48.7281975,2.2823346,17z',
  },

  // Transports
  transport: {
    weekday:
      'RER B ou C jusqu’à Massy-Palaiseau, puis bus 319 — arrêt Australie',
    sunday:
      'RER B ou C jusqu’à Massy-Palaiseau, puis bus 119 — arrêt Australie (le dimanche)',
    alternative:
      'RER B jusqu’aux Baconnets, puis bus 119 — arrêt Australie (tous les jours)',
  },

  // Contact
  contact: {
    phone: '01 69 30 54 27',
    phoneE164: '+33169305427',
    email: 'contact@eglise-massy.fr',
  },

  // Horaires des cultes
  services: {
    sunday: {
      time: '10h30',
      timeISO: '10:30',
      description:
        'Culte protestant ouvert à tous, croyants ou en recherche.',
      features: [
        { label: 'Garderie pour les moins de 3 ans', icon: 'baby' },
        { label: 'École du dimanche pour les enfants', icon: 'children' },
        { label: 'Repas fraternel le 3ème dimanche du mois', icon: 'meal' },
      ],
    },
  },

  // Identité confessionnelle
  identity: {
    chretiens:
      'Notre identité puise ses racines dans l’héritage transmis par tous ceux qui rendent témoignage depuis deux mille ans au Christ ressuscité.',
    protestants:
      'Héritiers de la Réforme du XVIᵉ siècle, nous tenons à ses grands principes : le Christ seul, l’Écriture seule, la foi seule, la grâce seule, à Dieu seul la gloire.',
    evangeliques:
      'Nous cherchons à vivre de manière conforme à l’Évangile, le message de la Bible. Celle-ci est, pour le croyant, la seule norme à laquelle se référer.',
    baptistes:
      'Les baptistes sont issus des mouvements de Réforme du XVIᵉ siècle. Le baptisme se définit comme un mouvement d’Églises de professants.',
  },

  // Affiliations
  affiliations: [
    {
      name: 'FEEBF',
      fullName: 'Fédération des Églises Évangéliques Baptistes de France',
      url: 'https://www.feebf.com/',
    },
    {
      name: 'CNEF',
      fullName: 'Conseil National des Évangéliques de France',
      url: 'https://www.lecnef.org/',
    },
    {
      name: 'FPF',
      fullName: 'Fédération Protestante de France',
      url: 'https://www.protestants.org/',
    },
    {
      name: 'Parcours Alpha',
      fullName: 'Parcours Alpha — Découvrir le sens de la vie',
      url: 'https://www.parcoursalpha.fr/',
    },
  ],

  // Réseaux sociaux & médias
  social: {
    youtube: {
      channel:
        'https://www.youtube.com/channel/UC3jHqbZGhqA2H5V6Dg2TjJw',
      sermonsPlaylist:
        'https://www.youtube.com/playlist?list=PLL9g705eeTc8mftAs5fzc0ZQoJ83RDDIt',
    },
    memberPortal: 'https://membre-baptiste-massy.fr/',
  },

  // SEO
  seo: {
    titleSuffix: ' — EEB Massy',
    keywords: [
      'église évangélique Massy',
      'baptiste Massy',
      'culte dimanche Massy',
      'protestant Massy',
      'église chrétienne 91300',
      'FEEBF',
      'Les Cèdres Massy',
    ],
  },
} as const;
