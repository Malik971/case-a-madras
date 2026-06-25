/**
 * ====================================================================
 *  LA CASE A MADRAS, CONTENU EDITORIAL DU SITE
 * ====================================================================
 *  Tout le texte du site est ici. Les photos sont dans src/data/images.ts
 *  et le catalogue produits dans src/data/products.ts.
 * ====================================================================
 */

import { boutique, femme, magasin, plage, rolande, tissus } from "@/data/images";

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

  phone: "590690761270",
  email: "ibo.rolande@orange.fr",

  address: {
    box: "Box 7",
    place: "Village Artisanal des Galbas",
    postalCode: "97180",
    city: "Sainte-Anne",
    region: "Guadeloupe",
    oneLine: "Box 7, Village Artisanal des Galbas, 97180 Sainte-Anne, Guadeloupe",
  },

  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d670.216283138639!2d-61.39153950133412!3d16.224051821129727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c134b895084c00d%3A0xab3d891ff890c3b!2sLe%20Village%20Artisanal!5e1!3m2!1sfr!2sfr!4v1782310764063!5m2!1sfr!2sfr",
  mapsLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Village+Artisanal+des+Galbas+Sainte-Anne+Guadeloupe",
  // Coordonnees du Village Artisanal des Galbas (pour la carte interactive)
  coords: { lat: 16.224052, lng: -61.39154 },

  url: "https://lacaseamadras.com",

  credit: {
    name: "Ibo Malik",
    url: "#",
  },

  instagramUrl: "#", // TODO: lien Instagram quand le compte sera cree
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

export type IconName = "Shirt" | "Baby" | "Home" | "Droplets" | "Flame" | "Info" | "Wind";

/* --------------------------------------------------------------------
 *  PAGE, ACCUEIL
 * ------------------------------------------------------------------ */
export const home = {
  hero: {
    label: "Village Artisanal des Galbas · Sainte-Anne",
    titleLines: ["La Case", "à Madras"],
    titleAccent: "depuis 1995",
    body: "Robes cousues main, tissus, bijoux et cadeaux. L'âme de la Guadeloupe en un seul endroit.",
    ctaPrimary: { label: "Voir les produits", href: "/creations" },
    ctaSecondary: { label: "Commander sur WhatsApp" },
    image: boutique.exterieur,
    imageAlt: "Devanture de la boutique La Case à Madras au Village Artisanal des Galbas",
  },

  featured: {
    label: "À la une",
    h2: "Nos pièces du moment",
  },

  visite: {
    label: "Entrez dans la boutique",
    h2: "Visitez La Case à Madras",
    lead: "Découvrez nos rayons depuis chez vous. Prochainement en 360 complet.",
    link: { label: "Venez nous voir en vrai", href: "/nous-trouver" },
  },

  video: {
    label: "La boutique en vidéo",
    h2: "Un avant-goût de l'ambiance",
    title: "Vidéo de la boutique La Case à Madras",
    note: "Tournée dans la boutique, à Sainte-Anne",
  },

  ame: {
    label: "Notre savoir-faire",
    h2: "Cousues ici, par notre équipe",
    body1:
      "Chaque robe, chaque ensemble sort de nos mains. Rolande et son équipe cousent sur place depuis l'ouverture du village en 1995.",
    body2:
      "Vous cherchez une tenue pour un baptême, un mariage, le carnaval ? Nous créons sur mesure.",
    cta: { label: "Découvrir notre histoire", href: "/histoire" },
    images: magasin,
    imageAlt: "Intérieur de la boutique La Case à Madras, vue panoramique",
  },

  catalogue: {
    label: "La boutique",
    h2: "Tout ce que vous trouverez ici",
  },

  ile: {
    quoteLines: [
      "La Guadeloupe ne se raconte pas.",
      "Elle se porte, elle se vit,",
      "elle se ramène dans sa valise.",
    ],
    attribution: "La Case à Madras, Sainte-Anne",
    image: plage[0],
    imageAlt: "Plage de Sainte-Anne, Guadeloupe",
  },

  ctaBande: {
    h2: "Vous ne pouvez pas vous déplacer ?",
    body: "Nous expédions en Guadeloupe et en France métropolitaine. Écrivez-nous, nous répondons avec photos et disponibilités.",
    button: "Écrire sur WhatsApp",
  },
} as const;

/* --------------------------------------------------------------------
 *  PAGE, NOS CREATIONS
 * ------------------------------------------------------------------ */
export const creationsPage = {
  label: "La boutique",
  h1: "Nos créations",
  lead: "Du tissu brut à la robe finie, des bijoux aux livres : tout ce qui fait la Guadeloupe, rassemblé en un seul endroit. Ajoutez vos coups de cœur au panier, puis commandez par WhatsApp.",
  stickyBar: "Voir mon panier",
} as const;

/* --------------------------------------------------------------------
 *  PAGE, NOTRE HISTOIRE
 * ------------------------------------------------------------------ */
export const histoire = {
  header: {
    h1: "Depuis 1995, le madras a un visage",
    image: femme[0],
    imageAlt: "Femme en tenue madras traditionnelle",
  },
  portrait: {
    label: "La créatrice",
    h2: "Rolande Ibo",
    images: rolande,
    imageAlt: "Portrait de Rolande Ibo dans la boutique",
    paragraphs: [
      "Quand le Village Artisanal de Sainte-Anne a ouvert au milieu des années 1990, Rolande était là. Box 7. La Case à Madras. Depuis, elle n'a jamais quitté cette place.",
      "Couturière de métier, elle confectionne avec son équipe les vêtements en madras vendus dans la boutique. Robes de petites filles, ensembles de baptême, tuniques pour femmes : chaque pièce est coupée et cousue ici, à Sainte-Anne.",
      "Rolande sélectionne aussi les meilleurs produits auprès de fournisseurs de toute la Guadeloupe. Bijoux, sandales, tissus, peluches : rien n'entre dans la boutique sans avoir été choisi avec soin.",
    ],
  },
  timeline: [
    {
      year: "1995",
      text: "Ouverture du Village Artisanal de Sainte-Anne. Rolande ouvre La Case à Madras, box 7.",
    },
    {
      year: "2000",
      text: "La boutique s'agrandit. Rolande forme une équipe de couturières. La production double.",
    },
    {
      year: "2010",
      text: "Nouvelle collection de peluches et de linge de maison. Des clients de métropole commandent par téléphone.",
    },
    {
      year: "2025",
      text: "La Case à Madras s'ouvre au numérique. Commandez depuis n'importe où.",
    },
  ],
  stats: [
    { value: "26+", label: "ans de présence" },
    { value: "100%", label: "couture faite main" },
    { value: "15+", label: "coloris de madras disponibles" },
  ],
  village: {
    label: "Le cadre",
    h2: "Au cœur du Village Artisanal",
    body: "Le Village Artisanal des Galbas est à cinq minutes à pied de la plage de Sainte-Anne. C'est l'un des premiers endroits que les visiteurs découvrent en arrivant dans le sud de la Guadeloupe. La Case à Madras y est depuis le premier jour.",
    image: boutique.exterieur,
    imageAlt: "Le Village Artisanal des Galbas",
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
    images: tissus,
    imageAlt: "Gros plan sur un tissu madras traditionnel",
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
  copyright: `(c) ${new Date().getFullYear()} La Case à Madras, Sainte-Anne`,
} as const;
