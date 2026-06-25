/**
 * ====================================================================
 *  CATALOGUE PRODUITS
 * ====================================================================
 *  Chaque produit pointe vers un groupe de photos locales (galerie).
 *  Au survol, la carte s'incline et fait defiler ses photos.
 *  Quand "images" est vide, une vignette madras stylisee s'affiche
 *  (a remplacer par de vraies photos, voir REPLACE).
 *
 *  PREPARE POUR LE BACKEND : ce fichier est la "source" actuelle.
 *  Plus tard, src/lib/catalog.ts pourra aller chercher ces donnees
 *  depuis une API Spring Boot sans changer les composants.
 * ====================================================================
 */

import {
  bebe,
  chapeaux,
  coiffe,
  femme,
  magasinLivres,
  mug,
  peluche,
  poupee,
  sac,
  tenue,
  tissus,
} from "@/data/images";

export type ProductCategory =
  | "couture"
  | "tissu"
  | "peluches"
  | "bijoux"
  | "linge"
  | "sandales"
  | "livres"
  | "mugs"
  | "accessoires";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  description: string;
  priceRange: string;
  /** Galerie de photos locales ; vide = vignette placeholder */
  images: readonly string[];
  featured: boolean;
  /** true = cousu sur place par l'equipe */
  madeInHouse: boolean;
  orderNote?: string;
}

export const categoryLabels: Record<ProductCategory, string> = {
  couture: "Couture",
  tissu: "Tissu",
  peluches: "Peluches",
  bijoux: "Bijoux",
  linge: "Linge",
  sandales: "Sandales et sacs",
  livres: "Livres",
  mugs: "Mugs",
  accessoires: "Accessoires",
};

// REPLACE: photos reelles pour bijoux, serviette et livres (non fournies).
const NO_PHOTO: readonly string[] = [];

export const products: Product[] = [
  // COUTURE (cousu sur place)
  {
    id: "robe-fille-rouge",
    name: "Robe fille madras rouge-or",
    category: "couture",
    description: "Robe pour petite fille en madras, coupee et cousue dans l'atelier.",
    priceRange: "25-45 EUR",
    images: bebe,
    orderNote: "Tailles 3 mois a 12 ans. Sur mesure accepte.",
    featured: true,
    madeInHouse: true,
  },
  {
    id: "robe-fille-vert",
    name: "Robe fille madras vert-bleu",
    category: "couture",
    description: "Robe enfant en madras, finitions a la main.",
    priceRange: "25-45 EUR",
    images: [bebe[2], bebe[3], bebe[0]],
    featured: false,
    madeInHouse: true,
  },
  {
    id: "ensemble-bebe",
    name: "Ensemble bebe 2 pieces",
    category: "couture",
    description: "Ensemble bebe deux pieces en madras, doux et colore.",
    priceRange: "30-50 EUR",
    images: [bebe[4], bebe[5], bebe[6]],
    featured: true,
    madeInHouse: true,
  },
  {
    id: "tunique-femme",
    name: "Tunique femme madras",
    category: "couture",
    description: "Tunique femme, taillee dans un madras vif.",
    priceRange: "35-55 EUR",
    images: femme,
    featured: true,
    madeInHouse: true,
  },
  {
    id: "robe-femme",
    name: "Robe femme longue madras",
    category: "couture",
    description: "Robe longue pour femme, elegante et fidele a la tradition antillaise.",
    priceRange: "55-85 EUR",
    images: tenue,
    featured: true,
    madeInHouse: true,
  },
  {
    id: "chemise-homme",
    name: "Chemise homme madras",
    category: "couture",
    description: "Chemise homme en madras, parfaite pour les jours de fete.",
    priceRange: "45-65 EUR",
    images: [tenue[1], tenue[2], tenue[0]],
    featured: false,
    madeInHouse: true,
  },
  {
    id: "robe-bapteme",
    name: "Robe de bapteme madras blanc-or",
    category: "couture",
    description: "Robe de bapteme en madras, piece d'exception.",
    priceRange: "65-95 EUR",
    images: [bebe[1], bebe[0], bebe[2]],
    orderNote: "Commande sur mesure uniquement. Delai 2 semaines.",
    featured: true,
    madeInHouse: true,
  },

  // TISSU
  {
    id: "tissu-rouge-or",
    name: "Tissu madras rouge-or au metre",
    category: "tissu",
    description: "Madras rouge et or, coton tisse, vendu au metre.",
    priceRange: "8-12 EUR/m",
    images: tissus,
    featured: true,
    madeInHouse: false,
  },
  {
    id: "tissu-vert-bleu",
    name: "Tissu madras vert-bleu au metre",
    category: "tissu",
    description: "Madras vert et bleu, au metre, pour vos creations.",
    priceRange: "8-12 EUR/m",
    images: [tissus[1], tissus[2], tissus[0]],
    featured: false,
    madeInHouse: false,
  },
  {
    id: "tissu-orange-rose",
    name: "Tissu madras orange-rose",
    category: "tissu",
    description: "Madras orange et rose, lumineux et festif, au metre.",
    priceRange: "8-12 EUR/m",
    images: [tissus[2], tissus[0], tissus[1]],
    featured: false,
    madeInHouse: false,
  },
  {
    id: "tissu-bleu-jaune",
    name: "Tissu madras bleu-jaune",
    category: "tissu",
    description: "Madras bleu et jaune, un classique des Antilles, au metre.",
    priceRange: "8-12 EUR/m",
    images: tissus,
    featured: false,
    madeInHouse: false,
  },

  // PELUCHES
  {
    id: "ours-madras",
    name: "Ours en peluche madras",
    category: "peluches",
    description: "Ours en peluche habille de madras, tout doux.",
    priceRange: "15-25 EUR",
    images: peluche,
    featured: true,
    madeInHouse: false,
  },
  {
    id: "poupee-creole",
    name: "Poupee creole en madras",
    category: "peluches",
    description: "Poupee creole en tenue madras traditionnelle.",
    priceRange: "18-30 EUR",
    images: poupee,
    featured: true,
    madeInHouse: false,
  },

  // BIJOUX
  {
    id: "collier-creole",
    name: "Collier creole dore",
    category: "bijoux",
    description: "Collier creole dore, selectionne aupres d'artisans de l'ile.",
    priceRange: "12-35 EUR",
    // REPLACE: public/images/bijoux/collier-creole.jpg
    images: NO_PHOTO,
    featured: false,
    madeInHouse: false,
  },

  // ACCESSOIRES
  {
    id: "chouchou-rouge",
    name: "Chouchou madras rouge",
    category: "accessoires",
    description: "Chouchou en madras pour les cheveux.",
    priceRange: "5-8 EUR",
    images: coiffe,
    featured: false,
    madeInHouse: false,
  },
  {
    id: "chouchou-vert",
    name: "Chouchou madras vert",
    category: "accessoires",
    description: "Chouchou en madras pour les cheveux.",
    priceRange: "5-8 EUR",
    images: [coiffe[1], coiffe[0]],
    featured: false,
    madeInHouse: false,
  },
  {
    id: "chapeau-madras",
    name: "Chapeau madras",
    category: "accessoires",
    description: "Chapeau aux couleurs du madras, pour se proteger du soleil avec style.",
    priceRange: "15-25 EUR",
    images: chapeaux,
    featured: true,
    madeInHouse: false,
  },

  // LINGE
  {
    id: "nappe-madras",
    name: "Nappe madras 160x160",
    category: "linge",
    description: "Nappe en madras 160x160, pour une table aux couleurs de l'ile.",
    priceRange: "25-40 EUR",
    images: tissus,
    featured: true,
    madeInHouse: false,
  },
  {
    id: "tablier-madras",
    name: "Tablier madras",
    category: "linge",
    description: "Tablier en madras, resistant et colore.",
    priceRange: "15-22 EUR",
    images: [tissus[2], tissus[1]],
    featured: false,
    madeInHouse: false,
  },
  {
    id: "serviette-gwada",
    name: "Serviette brodee Guadeloupe",
    category: "linge",
    description: "Serviette brodee aux couleurs de la Guadeloupe.",
    priceRange: "12-18 EUR",
    // REPLACE: public/images/linge/serviette-gwada.jpg
    images: NO_PHOTO,
    featured: false,
    madeInHouse: false,
  },

  // SANDALES ET SACS
  {
    id: "sac-madras",
    name: "Sac madras",
    category: "sandales",
    description: "Sac aux couleurs du madras, l'accessoire qui finit la tenue.",
    priceRange: "20-40 EUR",
    images: sac,
    featured: true,
    madeInHouse: false,
  },
  {
    id: "sandales-brodees",
    name: "Sandales brodees Guadeloupe",
    category: "sandales",
    description: "Sandales brodees a la main, l'accessoire du voyageur.",
    priceRange: "20-35 EUR",
    // REPLACE: public/images/sandales/sandales-brodees.jpg
    images: NO_PHOTO,
    featured: false,
    madeInHouse: false,
  },

  // LIVRES
  {
    id: "livre-cuisine-creole",
    name: "Livre de cuisine creole",
    category: "livres",
    description: "Recettes creoles pour prolonger la Guadeloupe a la maison.",
    priceRange: "18-28 EUR",
    images: magasinLivres,
    featured: true,
    madeInHouse: false,
  },
  {
    id: "conte-antillais",
    name: "Contes antillais pour enfants",
    category: "livres",
    description: "Contes antillais illustres pour les enfants.",
    priceRange: "12-18 EUR",
    images: [magasinLivres[1], magasinLivres[0]],
    featured: false,
    madeInHouse: false,
  },

  // MUGS
  {
    id: "mug-gwada-rouge",
    name: "Mug Guadeloupe rouge",
    category: "mugs",
    description: "Mug rouge aux couleurs de la Guadeloupe.",
    priceRange: "10-15 EUR",
    images: [mug[0], mug[2]],
    featured: true,
    madeInHouse: false,
  },
  {
    id: "mug-gwada-bleu",
    name: "Mug Guadeloupe bleu",
    category: "mugs",
    description: "Mug bleu aux couleurs de la Guadeloupe.",
    priceRange: "10-15 EUR",
    images: [mug[1], mug[0]],
    featured: false,
    madeInHouse: false,
  },
  {
    id: "mug-creole",
    name: "Mug creole",
    category: "mugs",
    description: "Mug creole, le souvenir du matin.",
    priceRange: "10-15 EUR",
    images: [mug[2], mug[1]],
    featured: false,
    madeInHouse: false,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const categoryOrder: ProductCategory[] = [
  "couture",
  "tissu",
  "peluches",
  "accessoires",
  "linge",
  "sandales",
  "mugs",
  "bijoux",
  "livres",
];

export function countByCategory(cat: ProductCategory): number {
  return products.filter((p) => p.category === cat).length;
}
