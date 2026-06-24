/**
 * ════════════════════════════════════════════════════════════════════
 *  LA CASE À MADRAS — CONTENU DU SITE
 * ════════════════════════════════════════════════════════════════════
 *  Tout le texte et les données du site sont réunis ici.
 *  Pour modifier le site, il suffit (dans la plupart des cas) d'éditer
 *  ce seul fichier — pas besoin de toucher au code.
 *
 *  ⚠️  À COMPLÉTER AVANT MISE EN LIGNE (cherchez "TODO") :
 *    - numéro WhatsApp (siteConfig.phone)
 *    - email de contact (siteConfig.email)
 *    - URL d'intégration Google Maps (siteConfig.mapsEmbedUrl)
 *    - nom du réalisateur du site (siteConfig.credit)
 *    - remplacer toutes les images picsum.photos par de vraies photos
 * ════════════════════════════════════════════════════════════════════
 */

/* ----------------------------------------------------------------------
 *  CONFIG GÉNÉRALE / COORDONNÉES
 * -------------------------------------------------------------------- */
export const siteConfig = {
  name: "La Case à Madras",
  shortName: "La Case à Madras",
  // NOTE: "depuis 1995" choisi pour rester cohérent avec "26 ans" (brief 2021+).
  foundedYear: 1995,
  tagline: "Boutique artisanale créole · Sainte-Anne, Guadeloupe",
  description:
    "Vêtements madras faits main pour enfants, tissu au mètre, bijoux et décoration créole. Boutique authentique au Village Artisanal de Sainte-Anne, Guadeloupe, depuis 1995.",

  // Coordonnées ----------------------------------------------------------
  // TODO: remplacer par le vrai numéro WhatsApp (format international, sans +, sans espaces)
  phone: "590690000000",
  // TODO: remplacer par le vrai email de contact
  email: "contact@lacaseamadras.com",

  // Adresse --------------------------------------------------------------
  address: {
    box: "Box 7",
    place: "Village Artisanal des Galbas",
    postalCode: "97180",
    city: "Sainte-Anne",
    region: "Guadeloupe",
    oneLine: "Box 7 · Village Artisanal des Galbas · 97180 Sainte-Anne, Guadeloupe",
  },

  // URL d'intégration Google Maps --------------------------------------
  // TODO: remplacer par l'URL d'intégration officielle (Google Maps > Partager > Intégrer une carte > copier le src de l'iframe)
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Village%20Artisanal%20des%20Galbas%2C%20Sainte-Anne%2C%20Guadeloupe&t=&z=14&ie=UTF8&iwloc=&output=embed",
  mapsLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Village+Artisanal+des+Galbas+Sainte-Anne+Guadeloupe",

  // URL publique du site (pour SEO / sitemap / Open Graph) --------------
  // TODO: remplacer par le vrai nom de domaine une fois en ligne
  url: "https://lacaseamadras.com",

  // Crédit pied de page -------------------------------------------------
  // TODO: remplacer par votre nom / lien
  credit: {
    name: "votre nom",
    url: "#",
  },
} as const;

/* ----------------------------------------------------------------------
 *  MESSAGES WHATSAPP PRÉ-REMPLIS
 * -------------------------------------------------------------------- */
export const whatsappMessages = {
  general: "Bonjour, je souhaite en savoir plus sur vos créations.",
  commander: "Bonjour La Case à Madras, je souhaiterais passer une commande / réserver un article.",
  reserver:
    "Bonjour, je prépare ma venue en Guadeloupe et j'aimerais réserver un article avant ma visite.",
  expedition:
    "Bonjour, je ne suis pas sur place. Pourriez-vous m'envoyer des photos et les disponibilités pour une expédition ?",
} as const;

/* ----------------------------------------------------------------------
 *  NAVIGATION
 * -------------------------------------------------------------------- */
export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos créations", href: "/creations" },
  { label: "Notre histoire", href: "/histoire" },
  { label: "Le madras", href: "/madras" },
  { label: "Nous trouver", href: "/nous-trouver" },
] as const;

/* ----------------------------------------------------------------------
 *  TYPES
 * -------------------------------------------------------------------- */
export type IconName =
  | "Scissors"
  | "Heart"
  | "MapPin"
  | "LayoutGrid"
  | "Layers"
  | "Droplets"
  | "Wind"
  | "Thermometer"
  | "Shirt";

export interface Product {
  name: string;
  /** Affiche le badge « sur commande » si vrai */
  surCommande?: boolean;
  /** TODO: remplacer chaque image picsum par une vraie photo du produit */
  image: string;
  alt: string;
}

export interface Category {
  id: string;
  eyebrow: string;
  h2: string;
  desc: string;
  products: Product[];
}

// Petit utilitaire local pour générer des images placeholder stables.
// TODO: remplacer par de vraies photos hébergées dans /public.
const ph = (seed: string) => `https://picsum.photos/seed/${seed}/700/700`;

/* ----------------------------------------------------------------------
 *  PAGE — ACCUEIL
 * -------------------------------------------------------------------- */
export const home = {
  hero: {
    eyebrow: "Boutique artisanale · Village des Galbas · Sainte-Anne",
    titleLines: ["L'âme du madras,", "cousue main depuis 1995"],
    body: "Vêtements créoles pour enfants, tissus, bijoux, décoration — tout ce qui fait le charme de la Guadeloupe, réuni en une boutique.",
    ctaPrimary: { label: "Voir nos créations", href: "/creations" },
    ctaSecondary: { label: "Nous trouver", href: "/nous-trouver" },
    // TODO: replace with real photo — étoffe madras et créations de la boutique en gros plan
    image: "https://picsum.photos/seed/madras-hero/900/1100",
    imageAlt: "Tissu madras coloré et créations de La Case à Madras",
  },

  atouts: [
    {
      icon: "Scissors" as IconName,
      accent: "rouge" as const,
      title: "Fait main",
      text: "Chaque vêtement enfant est cousu sur place par notre créatrice. Pas de série, pas d'import : des pièces uniques.",
    },
    {
      icon: "Heart" as IconName,
      accent: "safran" as const,
      title: "26 ans de passion",
      text: "Présente depuis la première heure du village artisanal, la Case à Madras est une institution de Sainte-Anne.",
    },
    {
      icon: "MapPin" as IconName,
      accent: "vert" as const,
      title: "Authentiquement local",
      text: "Livres péi, cosmétiques naturels, tissu madras au mètre : tout ce qu'on ne trouve qu'en Guadeloupe.",
    },
  ],

  apercu: {
    title: "Un aperçu de nos créations",
    subtitle: "De l'atelier à la boutique, un avant-goût de ce qui vous attend.",
    cards: [
      {
        label: "Vêtements enfants",
        href: "/creations#enfants",
        // TODO: replace with real photo — robe enfant en madras
        image: ph("apercu-enfants"),
        alt: "Vêtements enfants en madras",
      },
      {
        label: "Tissu madras",
        href: "/creations#tissu",
        // TODO: replace with real photo — rouleaux de tissu madras
        image: ph("apercu-tissu"),
        alt: "Tissu madras au mètre",
      },
      {
        label: "Bijoux & accessoires",
        href: "/creations#bijoux",
        // TODO: replace with real photo — bijoux et accessoires créoles
        image: ph("apercu-bijoux"),
        alt: "Bijoux et accessoires créoles",
      },
      {
        label: "Décoration & livres",
        href: "/creations#deco",
        // TODO: replace with real photo — nappes, déco et livres sur la Guadeloupe
        image: ph("apercu-deco"),
        alt: "Décoration et livres sur la Guadeloupe",
      },
    ],
    ctaAll: { label: "Voir toutes nos créations", href: "/creations" },
  },

  ctaBande: {
    title: "Vous cherchez un cadeau authentique pour rapporter de Guadeloupe ?",
    text: "Contactez-nous par WhatsApp pour réserver avant votre visite.",
    button: "Écrire sur WhatsApp",
  },
} as const;

/* ----------------------------------------------------------------------
 *  PAGE — CRÉATIONS
 * -------------------------------------------------------------------- */
export const creationsPage = {
  h1: "Nos créations",
  subtitle: "De l'atelier à la boutique — chaque pièce raconte la Guadeloupe.",
  // Onglets de filtre (l'ancre cible la section correspondante)
  tabs: [
    { label: "Tout", target: "top" },
    { label: "Vêtements enfants", target: "enfants" },
    { label: "Tissu madras", target: "tissu" },
    { label: "Bijoux", target: "bijoux" },
    { label: "Cosmétiques", target: "cosmetiques" },
    { label: "Maroquinerie", target: "maroquinerie" },
    { label: "Décoration", target: "deco" },
    { label: "Livres", target: "deco" },
  ],
  stickyBar: "Commander par WhatsApp",
} as const;

export const categories: Category[] = [
  {
    id: "enfants",
    eyebrow: "La spécialité de la maison",
    h2: "Vêtements enfants en madras",
    desc: "Robes, ensembles, tuniques — cousus à la main dans notre atelier. Tailles de 3 mois à 12 ans. Commandes sur mesure acceptées.",
    products: [
      {
        name: "Robe fille madras rouge",
        surCommande: true,
        image: ph("enfant-robe-rouge"),
        alt: "Robe fille en madras rouge",
      },
      {
        name: "Ensemble bébé madras jaune-vert",
        surCommande: true,
        image: ph("enfant-bebe-jaunevert"),
        alt: "Ensemble bébé en madras jaune et vert",
      },
      {
        name: "Tunique garçon madras bleu",
        surCommande: true,
        image: ph("enfant-tunique-bleu"),
        alt: "Tunique garçon en madras bleu",
      },
      {
        name: "Robe baptême madras blanc-or",
        surCommande: true,
        image: ph("enfant-bapteme-blancor"),
        alt: "Robe de baptême en madras blanc et or",
      },
      {
        name: "Short garçon madras orange",
        image: ph("enfant-short-orange"),
        alt: "Short garçon en madras orange",
      },
      {
        name: "Ensemble fille 2 pièces",
        surCommande: true,
        image: ph("enfant-ensemble-fille"),
        alt: "Ensemble fille deux pièces en madras",
      },
      {
        name: "Robe longue fille",
        surCommande: true,
        image: ph("enfant-robe-longue"),
        alt: "Robe longue fille en madras",
      },
      {
        name: "Salopette bébé madras",
        image: ph("enfant-salopette"),
        alt: "Salopette bébé en madras",
      },
    ],
  },
  {
    id: "tissu",
    eyebrow: "La matière première",
    h2: "Tissu madras traditionnel",
    desc: "Coton et soie tissés aux couleurs des Antilles. Vendu au mètre. Coloris disponibles : rouge-or, vert-bleu, orange-rose, bleu-jaune, noir-or.",
    products: [
      { name: "Madras rouge-or", image: ph("tissu-rougeor"), alt: "Tissu madras rouge et or" },
      { name: "Madras vert-bleu", image: ph("tissu-vertbleu"), alt: "Tissu madras vert et bleu" },
      {
        name: "Madras orange-rose",
        image: ph("tissu-orangerose"),
        alt: "Tissu madras orange et rose",
      },
      {
        name: "Madras bleu-jaune",
        image: ph("tissu-bleujaune"),
        alt: "Tissu madras bleu et jaune",
      },
      { name: "Madras noir-or", image: ph("tissu-noiror"), alt: "Tissu madras noir et or" },
    ],
  },
  {
    id: "bijoux",
    eyebrow: "Pour se parer créole",
    h2: "Bijoux et accessoires",
    desc: "Colliers, boucles d'oreilles, barrettes, foulards. Créations locales et pièces sélectionnées.",
    products: [
      {
        name: "Collier perles créoles",
        image: ph("bijou-collier"),
        alt: "Collier de perles créoles",
      },
      {
        name: "Boucles d'oreilles madras",
        image: ph("bijou-boucles"),
        alt: "Boucles d'oreilles en madras",
      },
      { name: "Barrettes madras (lot)", image: ph("bijou-barrettes"), alt: "Barrettes en madras" },
      {
        name: "Foulard de tête madras",
        image: ph("bijou-foulard"),
        alt: "Foulard de tête en madras",
      },
      { name: "Bracelet jonc créole", image: ph("bijou-bracelet"), alt: "Bracelet jonc créole" },
      {
        name: "Broche fleur madras",
        surCommande: true,
        image: ph("bijou-broche"),
        alt: "Broche fleur en madras",
      },
    ],
  },
  {
    id: "cosmetiques",
    eyebrow: "Les soins de l'île",
    h2: "Cosmétiques naturels",
    desc: "Huiles, baumes, savons et soins au monoï, coco et karité — fabriqués en Guadeloupe.",
    products: [
      { name: "Huile de monoï", image: ph("cosmo-monoi"), alt: "Flacon d'huile de monoï" },
      { name: "Baume au karité", image: ph("cosmo-karite"), alt: "Baume au karité" },
      { name: "Savon coco artisanal", image: ph("cosmo-savon-coco"), alt: "Savon coco artisanal" },
      { name: "Huile de coco vierge", image: ph("cosmo-coco"), alt: "Huile de coco vierge" },
    ],
  },
  {
    id: "maroquinerie",
    eyebrow: "Le cuir et le madras",
    h2: "Maroquinerie",
    desc: "Sacs, pochettes et portefeuilles aux couleurs de l'île.",
    products: [
      { name: "Sac cabas madras", image: ph("maro-cabas"), alt: "Sac cabas en madras" },
      {
        name: "Pochette madras-cuir",
        image: ph("maro-pochette"),
        alt: "Pochette en madras et cuir",
      },
      { name: "Portefeuille cuir", image: ph("maro-portefeuille"), alt: "Portefeuille en cuir" },
      { name: "Trousse madras", image: ph("maro-trousse"), alt: "Trousse en madras" },
    ],
  },
  {
    id: "deco",
    eyebrow: "La Guadeloupe chez vous",
    h2: "Décoration et livres",
    desc: "Nappes en madras, tabliers, arts de la table, et une sélection de livres sur la Guadeloupe, la cuisine créole et l'histoire antillaise.",
    products: [
      { name: "Nappe madras (plusieurs tailles)", image: ph("deco-nappe"), alt: "Nappe en madras" },
      { name: "Tablier madras", image: ph("deco-tablier"), alt: "Tablier en madras" },
      {
        name: "Set de table madras (lot)",
        image: ph("deco-set-table"),
        alt: "Set de table en madras",
      },
      {
        name: "Livre — Cuisine créole",
        image: ph("deco-livre-cuisine"),
        alt: "Livre sur la cuisine créole",
      },
      {
        name: "Livre — Histoire de la Guadeloupe",
        image: ph("deco-livre-histoire"),
        alt: "Livre sur l'histoire de la Guadeloupe",
      },
      {
        name: "Corbeille en fibres tressées",
        image: ph("deco-corbeille"),
        alt: "Corbeille en fibres tressées",
      },
    ],
  },
];

/* ----------------------------------------------------------------------
 *  PAGE — NOTRE HISTOIRE
 * -------------------------------------------------------------------- */
export const histoire = {
  hero: {
    eyebrow: "Depuis 1995 · Village des Galbas · Sainte-Anne",
    titleLines: ["Une couturière,", "un tissu,", "une île."],
  },
  portrait: {
    // TODO: replace with real photo — la créatrice à son atelier de couture
    image: "https://picsum.photos/seed/portrait-couturiere/900/1100",
    imageAlt: "La couturière de La Case à Madras à son atelier",
    // NOTE: prénom/nom repris du brief ; à confirmer / ajuster si besoin.
    h2: "Rolande Ibo, la dame du madras",
    paragraphs: [
      "Quand le Village Artisanal de Sainte-Anne a ouvert ses portes au milieu des années 90, Rolande était là. Box 7, La Case à Madras. Depuis, rien n'a changé — ou plutôt, tout a grandi.",
      "Excellente couturière formée à la tradition antillaise, elle a fait du madras son langage. Chaque robe pour enfant, chaque ensemble de baptême que vous trouvez dans la boutique est passé entre ses mains. Elle coupe, elle assemble, elle ajuste. Pas en série, pas en usine : ici, sur place.",
      "Ce savoir-faire, transmis de génération en génération dans les Antilles, est ce qui distingue La Case à Madras de tout ce qui vous entoure dans le village.",
    ],
  },
  stats: [
    { value: "26+", label: "ans de présence au village" },
    { value: "100%", label: "des vêtements cousus à la main" },
    { value: "15+", label: "coloris de madras disponibles" },
  ],
  trouverez: {
    title: "Ce que vous trouverez ici",
    left: [
      "Vêtements enfants sur mesure",
      "Tissu madras au mètre",
      "Commandes personnalisées",
      "Tailles naissance à 12 ans",
    ],
    right: [
      "Bijoux et accessoires créoles",
      "Cosmétiques naturels locaux",
      "Livres et décoration péi",
      "Conseils de vraie couturière",
    ],
  },
  quote:
    "La clientèle est majoritairement touristique, mais les habitants de Guadeloupe trouvent aussi leur bonheur ici — surtout en période de fête, pour les baptêmes et les mariages.",
  cta: {
    primary: { label: "Venez nous rendre visite", href: "/nous-trouver" },
    secondary: { label: "Voir nos créations", href: "/creations" },
  },
} as const;

/* ----------------------------------------------------------------------
 *  PAGE — LE MADRAS
 * -------------------------------------------------------------------- */
export const madrasPage = {
  h1: "Le madras, l'étoffe de la Guadeloupe",
  subtitle:
    "Tout ce que vous avez toujours voulu savoir sur le tissu qui habille notre île depuis trois siècles.",

  origines: {
    h2: "De Madras (Inde) aux Antilles",
    paragraphs: [
      "Le tissu madras tient son nom de la ville de Madras — aujourd'hui Chennai — sur la côte de Coromandel, en Inde. Les colons britanniques l'ont importé aux Antilles au XVIIe siècle, où il a trouvé son terrain de jeu définitif : les couleurs vives d'une île qui ne fait rien à moitié.",
      "Les travailleurs indiens arrivés en Guadeloupe après l'abolition de l'esclavage en 1848 ont profondément ancré le madras dans la culture locale. Aujourd'hui, il est indissociable de l'identité antillaise.",
    ],
  },

  swatches: [
    { name: "Rouge-or", colors: ["#C0392B", "#E67E22"], note: "le classique" },
    { name: "Vert-bleu", colors: ["#1E6B3C", "#1A5276"], note: "la mer et la forêt" },
    { name: "Orange-rose", colors: ["#E67E22", "#E91E8C"], note: "le festif" },
    { name: "Bleu-jaune", colors: ["#1A5276", "#F4D03F"], note: "la tradition" },
    { name: "Noir-or", colors: ["#1C1208", "#D4AC0D"], note: "l'élégance" },
  ],

  reconnaitre: {
    title: "Comment le reconnaître",
    items: [
      {
        icon: "LayoutGrid" as IconName,
        title: "Carreaux à fils colorés",
        text: "Le motif signature : des fils de couleur croisés qui forment des carreaux nets.",
      },
      {
        icon: "Layers" as IconName,
        title: "Chaîne soie, trame coton",
        text: "Composition traditionnelle qui donne au tissu sa tenue et son léger lustre.",
      },
      {
        icon: "Droplets" as IconName,
        title: "Couleurs qui vivent",
        text: "Des teintes naturelles qui évoluent au fil des lavages — la marque de l'authentique.",
      },
    ],
  },

  porter: {
    h2: "Du quotidien à la fête",
    paragraphs: [
      "Pour les femmes : robes, jupes pagnes, chemisiers, foulards de tête — le madras sert aussi de coiffe traditionnelle dont le nœud indique la situation amoureuse de celle qui le porte.",
      "Pour les hommes : chemises et vestes.",
      "Pour les enfants : c'est toute la spécialité de La Case à Madras — robes de baptême, ensembles du dimanche, tenues de carnaval.",
    ],
  },

  entretien: {
    h2: "Prendre soin de votre madras",
    tips: [
      { icon: "Thermometer" as IconName, text: "Lavage à 30°C" },
      { icon: "Shirt" as IconName, text: "Repassage à température moyenne" },
      {
        icon: "Droplets" as IconName,
        text: "Coloris qui dégorge au premier lavage — c'est normal, c'est authentique",
      },
      { icon: "Wind" as IconName, text: "Séchage à l'ombre pour préserver les couleurs" },
    ],
  },

  cta: {
    primary: { label: "Venez choisir votre madras", href: "/nous-trouver" },
    secondary: { label: "Voir nos tissus", href: "/creations#tissu" },
  },
} as const;

/* ----------------------------------------------------------------------
 *  PAGE — NOUS TROUVER
 * -------------------------------------------------------------------- */
export const nousTrouver = {
  h1: "Nous trouver",
  subtitle:
    "Nous sommes au cœur du Village Artisanal de Sainte-Anne, à deux pas de la plage des Galbas.",

  adresse: {
    title: "Adresse et accès",
    line: siteConfig.address.oneLine,
    note: "Face au port de pêche, à 5 min à pied de la plage. Accès depuis la N4, direction Pointe des Châteaux.",
  },

  horaires: {
    title: "Horaires",
    // TODO: confirmer les horaires réels de la boutique
    rows: [
      { day: "Lundi – Samedi", hours: "8h00 – 18h00" },
      { day: "Dimanche", hours: "9h00 – 13h00" },
      { day: "Jours fériés", hours: "nous contacter" },
    ],
    note: "Horaires susceptibles de varier en basse saison. Appelez-nous avant de vous déplacer.",
  },

  contact: {
    title: "Contact",
    whatsappLabel: "Envoyer un message WhatsApp",
  },

  distance: {
    title: "Vous n'êtes pas sur place ?",
    text: "Nous expédions en métropole et dans toute la Guadeloupe. Écrivez-nous sur WhatsApp avec vos envies, nous vous répondons dans la journée avec photos et disponibilités.",
    button: "Commander à distance",
  },

  acces: {
    voiture: {
      title: "En voiture",
      text: "Depuis Pointe-à-Pitre : 30 min par la N4. Parking gratuit devant le village artisanal.",
    },
    transports: {
      title: "Transports",
      text: "Bus ligne 8 depuis la gare routière de Pointe-à-Pitre. Arrêt : Sainte-Anne centre / Les Galbas.",
    },
  },
} as const;

/* ----------------------------------------------------------------------
 *  PIED DE PAGE
 * -------------------------------------------------------------------- */
export const footer = {
  brandLines: ["Boutique artisanale créole", "Sainte-Anne, Guadeloupe", "Depuis 1995"],
  navTitle: "Navigation",
  contactTitle: "Contact",
  navLinks: [
    { label: "Nos créations", href: "/creations" },
    { label: "Notre histoire", href: "/histoire" },
    { label: "Le madras", href: "/madras" },
    { label: "Nous trouver", href: "/nous-trouver" },
  ],
  copyright: `© ${new Date().getFullYear()} La Case à Madras · Village Artisanal des Galbas · Sainte-Anne`,
} as const;
