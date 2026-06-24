# La Case à Madras

Site vitrine de **La Case à Madras**, boutique artisanale créole au Village
Artisanal des Galbas, Sainte-Anne, Guadeloupe. Tenue par Rolande Ibo depuis
1995 : vêtements en madras cousus sur place et sélection de produits locaux.

Construit avec **Next.js 14** (App Router, TypeScript), **Tailwind CSS v3**,
**Framer Motion** et **Lucide React**.

## Démarrer

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement, http://localhost:3000
npm run build    # build de production
npm run start    # lancer le build de production
npm run lint     # vérifier le code (ESLint)
npm run format   # formater le code (Prettier)
```

## À compléter avant la mise en ligne

Tout le contenu est dans **[`src/data/content.ts`](src/data/content.ts)**.
Cherchez les commentaires `TODO`.

| Élément | Champ | Valeur actuelle (à remplacer) |
| --- | --- | --- |
| Numéro WhatsApp | `siteConfig.phone` | `590690000000` (international, sans + ni espaces) |
| Email de contact | `siteConfig.email` | `contact@lacaseamadras.com` |
| Carte Google Maps | `siteConfig.mapsEmbedUrl` | URL d'intégration générique |
| Nom de domaine | `siteConfig.url` | `https://lacaseamadras.com` |
| Crédit (réalisateur) | `siteConfig.credit` | `votre nom` |

## Images

Le site n'utilise **aucune** banque d'images (pas de picsum, pas d'Unsplash,
pas de stock). Tant qu'une vraie photo n'est pas fournie, un **placeholder
dessiné** (motif madras en CSS) s'affiche.

Pour ajouter de vraies photos, déposez-les dans
[`public/images/`](public/images/) puis renseignez le champ `image` du produit
ou de la section dans `content.ts`. Voir [public/images/README.md](public/images/README.md)
pour la liste des fichiers attendus et les exigences de qualité.

## Design

- **Trois couleurs madras** : rouge `#C0392B`, safran `#D4860A`, vert `#2E7D32`.
- **Palette chaude** : crème `#FDF6E3`, bois `#3E2000`, lin `#EDE0CC`, voile `#FAF3E4`.
- **Typographies** : Playfair Display (titres), Lora (texte), Inter (interface),
  via `next/font`.
- **Élément signature** : `<MadrasDivider />`, bande tissée en CSS pur, placée
  entre chaque section.
- **Animations** : Framer Motion, désactivées si l'utilisateur a activé
  « réduire les animations » (`prefers-reduced-motion`).

## Structure

```
src/
├── app/                  pages (App Router) + robots.ts + sitemap.ts
├── components/
│   ├── layout/           Navbar, Footer
│   ├── ui/               MadrasDivider, Placeholder, WhatsAppButton, ...
│   └── sections/         Hero, ProductGrid, StorySection, MadrasInfo, Contact
├── data/content.ts       tout le contenu éditable
└── lib/utils.ts          helpers (cn, liens WhatsApp, format téléphone)
```

Site léger, sans base de données ni CMS : pensé pour être facile à mettre à jour
et rapide à charger.
