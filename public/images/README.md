# Photos du site, La Case à Madras

Ce dossier accueille les vraies photos de la boutique. Tant qu'une photo n'est
pas déposée, le site affiche un placeholder dessiné (motif madras en CSS),
jamais une image générique de banque d'images.

## Comment ajouter une vraie photo

1. Déposez le fichier ici, dans `public/images/`, avec un nom descriptif.
2. Ouvrez `src/data/content.ts` et renseignez le champ `image` correspondant
   (par exemple `image: "/images/robe-madras-enfant.jpg"`), avec un `alt`
   en français. Le placeholder est alors remplacé automatiquement.

## Photos attendues (ordre de priorité)

1. Photos fournies par la propriétaire (Rolande Ibo).
2. Photos de la boutique réelle.
3. Photos des produits réellement vendus.
4. Photos du Village Artisanal des Galbas.

## Fichiers référencés dans le code (à fournir)

- `boutique-interieur.jpg`        fond du hero (accueil)
- `atelier-couture.jpg`           section savoir-faire (accueil)
- `rolande-portrait-large.jpg`    en-tête de la page Histoire
- `rolande-portrait.jpg`          portrait vertical (page Histoire)
- `village-artisanal-galbas.jpg`  page Histoire, section Village
- `tissu-madras-gros-plan.jpg`    page Le madras, origines
- `og-case-a-madras.jpg`          aperçu réseaux sociaux (1200x630)

## Qualité requise

Grand format (largeur 1200px minimum, 1600px conseillé), net, couleurs
naturelles, sans filtre excessif, sans watermark, sans texte incrusté.

## Conseils techniques

Utilisez `next/image` avec `width`, `height` (ou `fill`), un `alt` descriptif,
et `priority` pour les images au-dessus de la ligne de flottaison.
