/**
 * ====================================================================
 *  LA CASE A MADRAS, CONTENU DU SITE
 * ====================================================================
 *  Tout le texte et les donnees du site sont reunis ici.
 *  Pour modifier le site, il suffit (dans la plupart des cas) d'editer
 *  ce seul fichier, pas besoin de toucher au code.
 *
 *  A COMPLETER AVANT MISE EN LIGNE (cherchez "TODO") :
 *    - numero WhatsApp (siteConfig.phone)
 *    - email de contact (siteConfig.email)
 *    - URL d'integration Google Maps (siteConfig.mapsEmbedUrl)
 *    - nom du realisateur du site (siteConfig.credit)
 *    - vraies photos a deposer dans /public/images (voir le README de ce dossier)
 * ====================================================================
 */

/* --------------------------------------------------------------------
 *  CONFIG GENERALE ET COORDONNEES
 * ------------------------------------------------------------------ */
export const siteConfig = {
  name: "La Case à Madras",
  owner: "Rolande Ibo",
  foundedYear: 1995,
  tagline: "Boutique artisanale créole, Sainte-Anne, Guadeloupe",
  description:
    "Vêtements madras faits main, tissus, bijoux créoles et cadeaux authentiques. Boutique tenue par Rolande Ibo au Village Artisanal des Galbas, Sainte-Anne, depuis 1995.",

  // TODO: remplacer par le vrai numero WhatsApp (format international, sans + ni espaces)
  phone: "590690000000",
  // TODO: remplacer par le vrai email de contact
  email: "contact@lacaseamadras.com",

  address: {
    box: "Box 7",
    place: "Village Artisanal des Galbas",
    postalCode: "97180",
    city: "Sainte-Anne",
    region: "Guadeloupe",
    oneLine: "Box 7, Village Artisanal des Galbas, 97180 Sainte-Anne, Guadeloupe",
  },

  // TODO: remplacer par l'URL d'integration officielle
  // (Google Maps > Partager > Integrer une carte > copier l'adresse du src de l'iframe)
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Village%20Artisanal%20des%20Galbas%2C%20Sainte-Anne%2C%20Guadeloupe&t=&z=14&ie=UTF8&iwloc=&output=embed",
  mapsLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Village+Artisanal+des+Galbas+Sainte-Anne+Guadeloupe",

  // TODO: remplacer par le vrai nom de domaine une fois en ligne
  url: "https://lacaseamadras.com",

  // TODO: remplacer par votre nom et votre lien
  credit: {
    name: "votre nom",
    url: "#",
  },
} as const;

/* --------------------------------------------------------------------
 *  MESSAGES WHATSAPP PRE-REMPLIS
 * ------------------------------------------------------------------ */
export const whatsappMessages = {
  general: "Bonjour, je voudrais des informations.",
  informations: "Bonjour, je souhaite des informations sur vos créations.",
  commander: "Bonjour La Case à Madras, je souhaiterais passer une commande.",
  expedition:
    "Bonjour, je ne suis pas sur place. Pouvez-vous m'envoyer des photos et les disponibilités pour une expédition ?",
} as const;

/* --------------------------------------------------------------------
 *  NAVIGATION
 * ------------------------------------------------------------------ */
export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos créations", href: "/creations" },
  { label: "Notre histoire", href: "/histoire" },
  { label: "Le madras", href: "/madras" },
  { label: "Nous trouver", href: "/nous-trouver" },
] as const;

/* --------------------------------------------------------------------
 *  TYPES
 * ------------------------------------------------------------------ */
export type IconName = "Shirt" | "Baby" | "Home" | "Droplets" | "Flame" | "Info" | "Wind";

export interface Product {
  name: string;
  /** Affiche le badge "sur commande" si vrai */
  surCommande?: boolean;
  /** TODO: chemin d'une vraie photo dans /public/images (sinon placeholder) */
  image?: string;
  alt?: string;
}

export interface Category {
  id: string;
  eyebrow: string;
  h2: string;
  desc: string;
  products: Product[];
}

/* --------------------------------------------------------------------
 *  PAGE, ACCUEIL
 * ------------------------------------------------------------------ */
export const home = {
  hero: {
    label: "Village Artisanal des Galbas, Sainte-Anne, Guadeloupe",
    h1: "Le madras cousu avec cœur, depuis 1995",
    body: "Vêtements faits main, tissus traditionnels, cadeaux authentiques. La boutique de Rolande Ibo au cœur du village artisanal.",
    ctaPrimary: { label: "Découvrir nos créations", href: "/creations" },
    ctaSecondary: { label: "Commander par WhatsApp" },
    // TODO: photo réelle à déposer dans /public/images/boutique-interieur.jpg
    imageCaption: "Intérieur de la boutique La Case à Madras",
  },

  troisRaisons: {
    label: "Ce qui nous distingue",
    h2: "Une boutique qui a une âme",
    cards: [
      {
        title: "Couture sur place",
        text: "Rolande et son équipe fabriquent ici même les vêtements en madras. Chaque pièce est coupée, assemblée et finie à la main.",
      },
      {
        title: "Fournisseurs locaux",
        text: "Nos produits viennent de toute la Guadeloupe. Tissu, bijoux, sandales, livres : nous sélectionnons ce qui est vrai.",
      },
      {
        title: "Plus de 26 ans de confiance",
        text: "Présente depuis l'ouverture du village en 1995. Des milliers de clients, des milliers de sourires.",
      },
    ],
  },

  produitsPhares: {
    label: "La boutique en un coup d'œil",
    h2: "De quoi habiller toute la famille",
    cards: [
      { label: "Robes madras", href: "/creations#couture" },
      { label: "Tissu au mètre", href: "/creations#tissu" },
      { label: "Peluches madras", href: "/creations#peluches" },
      { label: "Bijoux créoles", href: "/creations#bijoux" },
      { label: "Livres", href: "/creations#livres" },
      { label: "Sandales Guadeloupe", href: "/creations#sandales" },
    ],
    cta: { label: "Voir tous nos produits", href: "/creations" },
  },

  savoirFaire: {
    label: "Notre savoir-faire",
    h2: "De nos mains à vos enfants",
    body: "Chaque robe pour petite fille, chaque ensemble de baptême que vous trouvez ici est passé entre les mains de Rolande et de son équipe. Elles cousent, ajustent, brodent. Ce n'est pas de la série. C'est de l'artisanat vivant.",
    cta: { label: "Découvrir notre histoire", href: "/histoire" },
    // TODO: photo réelle à déposer dans /public/images/atelier-couture.jpg
    imageCaption: "Femme en tenue madras traditionnelle dans l'atelier",
  },

  ctaBande: {
    h2: "Un cadeau venu de Guadeloupe ?",
    body: "Vous repartez bientôt ou vous êtes déjà loin ? Écrivez-nous sur WhatsApp. Nous expédions en Guadeloupe et en métropole.",
    button: "Envoyer un message",
  },
} as const;

/* --------------------------------------------------------------------
 *  PAGE, NOS CREATIONS
 * ------------------------------------------------------------------ */
export const creationsPage = {
  label: "La boutique",
  h1: "Nos créations et nos produits",
  lead: "Du tissu brut à la robe finie, des bijoux aux sandales : tout ce qui fait la Guadeloupe, rassemblé en un seul endroit.",
  tabs: [
    { label: "Tout", target: "top" },
    { label: "Couture", target: "couture" },
    { label: "Tissu", target: "tissu" },
    { label: "Peluches", target: "peluches" },
    { label: "Bijoux", target: "bijoux" },
    { label: "Linge", target: "linge" },
    { label: "Sandales", target: "sandales" },
    { label: "Livres", target: "livres" },
    { label: "Mugs", target: "livres" },
  ],
  stickyBar: "Commander par WhatsApp",
} as const;

export const categories: Category[] = [
  {
    id: "couture",
    eyebrow: "Fait main par notre équipe",
    h2: "Vêtements en madras",
    desc: "Robes, ensembles, tuniques cousus ici. Tailles bébé à adulte. Commandes sur mesure acceptées pour baptêmes et mariages.",
    products: [
      { name: "Robe fille madras rouge-or" },
      { name: "Robe fille madras vert-bleu" },
      { name: "Ensemble bébé 2 pièces" },
      { name: "Tunique femme col V" },
      { name: "Robe femme longue madras" },
      { name: "Chemise homme madras" },
      { name: "Ensemble garçon haut-short" },
      // NOTE: pièces de fête marquées "sur commande" (desc mentionne baptêmes et mariages).
      { name: "Robe baptême blanche-or", surCommande: true },
      { name: "Tenue carnaval enfant", surCommande: true },
      { name: "Jupe femme madras", surCommande: true },
    ],
  },
  {
    id: "tissu",
    eyebrow: "La matière première",
    h2: "Tissu madras traditionnel",
    desc: "Vendu au mètre, coton et soie tissés aux couleurs des Antilles. Choisissez votre coloris.",
    products: [
      { name: "Madras rouge-or" },
      { name: "Madras vert-bleu" },
      { name: "Madras orange-rose" },
      { name: "Madras bleu-jaune" },
      { name: "Madras noir-or" },
      { name: "Madras violet-safran" },
    ],
  },
  {
    id: "peluches",
    eyebrow: "Pour les tout-petits",
    h2: "Peluches et jouets en madras",
    desc: "Ours, poupées et animaux habillés en tissu madras. Le cadeau parfait pour rapporter de Guadeloupe.",
    products: [
      { name: "Ours madras" },
      { name: "Poupée créole" },
      { name: "Éléphant madras" },
      { name: "Lapin madras" },
    ],
  },
  {
    id: "bijoux",
    eyebrow: "Se parer à la créole",
    h2: "Bijoux et accessoires",
    desc: "Colliers, boucles, bracelets et chouchous madras. Des pièces sélectionnées auprès d'artisans de l'île.",
    products: [
      { name: "Collier créole doré" },
      { name: "Boucles anneaux" },
      { name: "Bracelet jonc" },
      { name: "Chouchou madras rouge" },
      { name: "Chouchou madras vert" },
      { name: "Bague créole" },
    ],
  },
  {
    id: "linge",
    eyebrow: "La Guadeloupe chez vous",
    h2: "Nappes, tabliers et serviettes",
    desc: "Nappes en madras, sets de table, tabliers et serviettes brodées. Pour que le repas soit aussi une fête.",
    products: [
      { name: "Nappe 160x160 madras" },
      { name: "Nappe 200x200 madras" },
      { name: "Set de table 4 pièces" },
      { name: "Tablier madras" },
      { name: "Serviette brodée Guadeloupe" },
      { name: "Set cadeau linge" },
    ],
  },
  {
    id: "sandales",
    eyebrow: "Du pied à l'épaule",
    h2: "Sandales et sacs Guadeloupe",
    desc: "Sandales brodées à la main et sacs souvenir. L'accessoire incontournable du voyageur.",
    products: [
      { name: "Sandales brodées taille S" },
      { name: "Sandales brodées taille M" },
      { name: "Sandales brodées taille L" },
      { name: "Sac Guadeloupe" },
    ],
  },
  {
    id: "livres",
    eyebrow: "À rapporter dans sa valise",
    h2: "Livres, mugs et souvenirs",
    desc: "Livres de cuisine créole, contes pour enfants, mugs et cartes postales. Pour prolonger la Guadeloupe après le retour.",
    products: [
      { name: "Livre cuisine créole" },
      { name: "Contes antillais enfants" },
      { name: "Guide Guadeloupe" },
      { name: "Mug Guadeloupe bleu" },
      { name: "Mug Guadeloupe rouge" },
      { name: "Cartes postales" },
    ],
  },
];

/* --------------------------------------------------------------------
 *  PAGE, NOTRE HISTOIRE
 * ------------------------------------------------------------------ */
export const histoire = {
  header: {
    h1: "Depuis 1995, le madras a un visage",
    // TODO: photo réelle à déposer dans /public/images/rolande-portrait-large.jpg
    imageCaption: "Couturière en tenue madras traditionnelle, sourire chaleureux",
  },
  portrait: {
    label: "La créatrice",
    h2: "Rolande Ibo",
    // TODO: photo de Rolande dans la boutique, format vertical 3:4
    imageCaption: "Portrait de Rolande Ibo dans la boutique",
    paragraphs: [
      "Quand le Village Artisanal de Sainte-Anne a ouvert au milieu des années 1990, Rolande était là. Box 7. La Case à Madras. Depuis, elle n'a jamais quitté cette place.",
      "Couturière de métier, elle confectionne avec son équipe les vêtements en madras vendus dans la boutique. Robes de petites filles, ensembles de baptême, tuniques pour femmes : chaque pièce est coupée et cousue ici, à Sainte-Anne.",
      // NOTE: "sourced" du brief corrigé en "sélectionne" (français correct).
      "Rolande sélectionne aussi les meilleurs produits auprès de fournisseurs de toute la Guadeloupe. Bijoux, sandales, tissus, peluches : rien n'entre dans la boutique sans avoir été choisi avec soin.",
    ],
  },
  stats: [
    { value: "26+", label: "ans de présence" },
    { value: "100%", label: "couture faite main" },
    { value: "15+", label: "coloris de madras disponibles" },
  ],
  village: {
    label: "Le cadre",
    h2: "Au cœur du Village Artisanal",
    body: "Le Village Artisanal des Galbas est à cinq minutes à pied de la plage de Sainte-Anne. C'est l'un des premiers endroits que les visiteurs découvrent en arrivant dans le sud de la Guadeloupe. La Case à Madras y est depuis le premier jour.",
    // TODO: photo de l'extérieur du village ou de la devanture
    imageCaption: "Extérieur du Village Artisanal des Galbas",
  },
} as const;

/* --------------------------------------------------------------------
 *  PAGE, LE MADRAS
 * ------------------------------------------------------------------ */
export const madrasPage = {
  label: "Histoire et culture",
  h1: "Le madras, l'étoffe de la Guadeloupe",
  lead: "Trois siècles d'histoire, des couleurs qui ne mentent pas.",

  origines: {
    h2: "De Madras (Inde) aux Antilles",
    paragraphs: [
      "Le tissu madras vient de la ville de Madras, aujourd'hui Chennai, sur la côte de Coromandel en Inde. Les colons britanniques l'ont importé aux Antilles au XVIIe siècle, où il a trouvé son terrain de jeu définitif : les couleurs vives d'une île qui ne fait rien à moitié.",
      "Les travailleurs indiens arrivés en Guadeloupe après l'abolition de l'esclavage en 1848 ont profondément ancré le madras dans la culture locale. Aujourd'hui, il est l'emblème textile des Antilles.",
    ],
    // TODO: photo réelle à déposer dans /public/images/tissu-madras-gros-plan.jpg
    imageCaption: "Gros plan sur un tissu madras traditionnel",
  },

  couleurs: {
    h2: "Les couleurs du madras",
    intro:
      "Le madras se reconnaît à ses carreaux vifs. Trois couleurs dominent la tradition guadeloupéenne.",
    cards: [
      { color: "#C0392B", name: "Le rouge", desc: "La chaleur, la force, la fête" },
      { color: "#D4860A", name: "Le safran", desc: "La lumière, l'or, le soleil" },
      { color: "#2E7D32", name: "Le vert", desc: "La nature, l'espérance, l'île" },
    ],
    note: "Les coloris se combinent à l'infini. Chaque tissu raconte une histoire différente.",
  },

  porter: {
    h2: "Le madras dans la vie quotidienne",
    cards: [
      {
        icon: "Shirt" as IconName,
        title: "Pour les femmes",
        text: "Robes, jupes, chemisiers et foulards de tête.",
      },
      {
        icon: "Baby" as IconName,
        title: "Pour les enfants",
        text: "La spécialité de La Case à Madras : robes et ensembles.",
      },
      {
        icon: "Home" as IconName,
        title: "Pour la maison",
        text: "Nappes, tabliers et serviettes.",
      },
    ],
  },

  entretien: {
    h2: "Prendre soin de votre madras",
    tips: [
      { icon: "Droplets" as IconName, text: "Laver à 30 degrés" },
      { icon: "Flame" as IconName, text: "Repasser à chaleur moyenne" },
      {
        icon: "Info" as IconName,
        text: "Les couleurs dégorgent au premier lavage : c'est normal, c'est authentique",
      },
      { icon: "Wind" as IconName, text: "Sécher à l'ombre" },
    ],
  },
} as const;

/* --------------------------------------------------------------------
 *  PAGE, NOUS TROUVER
 * ------------------------------------------------------------------ */
export const nousTrouver = {
  label: "Venir nous voir",
  h1: "Nous trouver",
  lead: "Au Village Artisanal des Galbas, à deux pas de la grande plage.",

  adresse: {
    title: "Adresse",
    lines: [
      "Box 7, Village Artisanal des Galbas",
      "97180 Sainte-Anne, Guadeloupe",
      "Face au port de pêche, 5 min à pied de la plage",
    ],
  },

  horaires: {
    title: "Horaires",
    rows: [
      { day: "Lundi au samedi", hours: "8h00 à 18h00" },
      { day: "Dimanche", hours: "9h00 à 13h00" },
      { day: "Jours fériés", hours: "nous contacter" },
    ],
    note: "Horaires susceptibles de varier hors saison.",
  },

  contact: {
    title: "Contact",
    whatsappLabel: "Envoyer un message WhatsApp",
  },

  expeditions: {
    title: "Vous n'êtes pas sur place ?",
    text: "Nous expédions en Guadeloupe et en France métropolitaine. Écrivez-nous par WhatsApp avec vos envies. Nous répondons avec photos et disponibilités.",
    button: "Commander à distance",
  },

  acces: {
    voiture: {
      title: "En voiture",
      text: "Depuis Pointe-à-Pitre, 30 min par la N4. Parking gratuit devant le village artisanal.",
    },
    bus: {
      title: "En bus",
      text: "Ligne 8 depuis la gare routière de Pointe-à-Pitre. Arrêt Sainte-Anne centre, puis 5 min à pied vers les Galbas.",
    },
  },
} as const;

/* --------------------------------------------------------------------
 *  PIED DE PAGE
 * ------------------------------------------------------------------ */
export const footer = {
  brandLines: ["Boutique artisanale créole", "Sainte-Anne, Guadeloupe, depuis 1995"],
  navTitle: "La boutique",
  contactTitle: "Nous joindre",
  navLinks: [
    { label: "Accueil", href: "/" },
    { label: "Nos créations", href: "/creations" },
    { label: "Notre histoire", href: "/histoire" },
    { label: "Le madras", href: "/madras" },
    { label: "Nous trouver", href: "/nous-trouver" },
  ],
  // NOTE: année dynamique (le brief indiquait 2025, gardé à jour automatiquement).
  copyright: `(c) ${new Date().getFullYear()} La Case à Madras, Sainte-Anne`,
} as const;
