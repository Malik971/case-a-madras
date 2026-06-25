/**
 * ====================================================================
 *  IMAGES LOCALES (groupes par theme)
 * ====================================================================
 *  Toutes les photos et la video sont des fichiers locaux dans
 *  /public/images. Les cartes "vivantes" font defiler ces groupes
 *  au survol (composant InteractiveImage).
 *
 *  Pour ajouter une photo : deposez le fichier dans le bon dossier
 *  de /public/images puis ajoutez son chemin au groupe correspondant.
 *  Evitez les espaces, accents et "+" dans les noms de fichiers.
 * ====================================================================
 */

// Vues panoramiques de l'interieur du magasin (les 3 meilleures en tete)
export const magasin = [
  "/images/magasin_case_a_madras/magasin-4.jpeg",
  "/images/magasin_case_a_madras/magasin-6.jpeg",
  "/images/magasin_case_a_madras/magasin-7.jpeg",
  "/images/magasin_case_a_madras/magasin-3.jpeg",
  "/images/magasin_case_a_madras/magasin-5.jpeg",
];

// Etageres de livres / cuisine creole (pour la categorie Livres)
export const magasinLivres = [
  "/images/magasin_case_a_madras/magasin-1.jpeg",
  "/images/magasin_case_a_madras/magasin-2.jpeg",
];

// Boutique et village
export const boutique = {
  exterieur: "/images/case_a_madras/village_artisanal.jpg",
  echoppe: "/images/case_a_madras/une-echoppe.jpg",
  // Meilleur panorama interieur : sert au tour 360 et au poster video
  interieur: magasin[0],
} as const;

// Tenues bebe / enfant en madras
export const bebe = [
  "/images/bebe_tenue/robe-madras-douceur.jpg",
  "/images/bebe_tenue/robe-madras-biguine-2.jpg",
  "/images/bebe_tenue/barboteuse-madras-biguine.jpg",
  "/images/bebe_tenue/705e2750d1752c7c23895ff0ab393a49.jpg",
  "/images/bebe_tenue/9360c3b08889e2955dc1616382de18fe.jpg",
  "/images/bebe_tenue/485371775_1056365719854087_8080900937163514220_n.jpg",
  "/images/bebe_tenue/497996190_1280464387412855_6819186883325413125_n.jpg",
];

// Tenues femme / adulte
export const femme = [
  "/images/femme_madras/41F1E4F2-F0E8-4ADD-B813-BB18C520775E.webp",
  "/images/femme_madras/DBD60BF7-7B4C-4FBF-AC28-3DE12112865D.webp",
  "/images/femme_madras/F2CDBEAF-DADE-43FC-9225-C1A6DFDCC05A.webp",
  "/images/femme_madras/1ef18c2e63206b22d686ff27aa002622.jpg",
];

export const tenue = [
  "/images/tenue_madras/image.jpg",
  "/images/tenue_madras/487557493_18266760814277448_2992575064991212762_n.jpg",
  "/images/tenue_madras/tenue-madras-3.jpeg",
];

export const coiffe = [
  "/images/coiffe/coiffe-madras-eventail-hibiscus.jpg",
  "/images/coiffe/le-costume-creole_1.jpg",
];

export const chapeaux = [
  "/images/chapeaux_madras/caribbean_windward_smithsonian_le_bellot_ponant_picture.jpg",
];

export const tissus = [
  "/images/tissus/tissus_madras.jpg",
  "/images/tissus/tissus-madras-3-840x473.jpeg",
  "/images/tissus/culture-traditions-guadeloupe-madras-650x1300.jpg",
];

export const peluche = [
  "/images/peluche/image.webp",
  "/images/peluche/0199c6b9-6424-7fa3-b50e-24ccbfa0ad0e.webp",
];

export const poupee = [
  "/images/poupee/d01494f54bcfe7e1c0bfc7a47e3ba464.jpg",
  "/images/poupee/guadeloupe218.jpg",
];

export const mug = [
  "/images/mug_madras/mug-rouge.jpg",
  "/images/mug_madras/mug-bleu.jpg",
  "/images/mug_madras/mug-creole.jpg",
];

export const sac = ["/images/sac_madras/482220845_541987678926841_6880448488818419787_n.jpg"];

export const rolande = ["/images/rolande_ibo/image.jpg", "/images/rolande_ibo/arton6242-52a95.png"];

// Plages de Sainte-Anne (ambiance / paysage)
export const plage = [
  "/images/plage_sainte_anne/plage-de-la-caravelle-guadeloupe-sainte-anne.jpg",
  "/images/plage_sainte_anne/Anse-Michel.webp",
  "/images/plage_sainte_anne/a6a3c1a9-2821-4b19-aaac-a54f256c663c.jpg",
  "/images/plage_sainte_anne/Proteger-fonds-marins-martinique.webp",
];

// Galerie "couture" (tenues madras adultes, melange)
export const couture = [...tenue, ...femme, ...coiffe];

// Photo d'ambiance pour la section paysage et la carte
export const paysage = plage[0];

// Image utilisee a l'interieur de la sphere du tour 360 (placeholder).
// REPLACE: une vraie photo equirectangulaire 360 (interieur-360.webp).
export const tour360 = boutique.interieur;

// Video reelle de la boutique
export const boutiqueVideo = "/images/video/boutique-presentation.mp4";
