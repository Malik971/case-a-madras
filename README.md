# La Case à Madras

Site vitrine de **La Case à Madras** — boutique artisanale créole au Village
Artisanal des Galbas, Sainte-Anne, Guadeloupe. Spécialité : vêtements enfants
en madras cousus main, depuis 1995.

Construit avec **Next.js 14** (App Router, TypeScript), **Tailwind CSS v3**,
**Framer Motion** et **Lucide React**.

---

## 🚀 Démarrer

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement → http://localhost:3000
npm run build    # build de production
npm run start    # lancer le build de production
npm run lint     # vérifier le code (ESLint)
npm run format   # formater le code (Prettier)
```

---

## ✏️ Avant la mise en ligne — à compléter

**Tout le contenu se trouve dans un seul fichier :** [`src/data/content.ts`](src/data/content.ts).
Cherchez les commentaires `TODO` (`Ctrl+F` → « TODO »). Les points à renseigner :

| Élément | Où | Valeur actuelle (à remplacer) |
| --- | --- | --- |
| **Numéro WhatsApp** | `siteConfig.phone` | `590690000000` (format international, sans `+` ni espaces) |
| **Email de contact** | `siteConfig.email` | `contact@lacaseamadras.com` |
| **Carte Google Maps** | `siteConfig.mapsEmbedUrl` | une URL d'intégration générique |
| **Nom de domaine** | `siteConfig.url` | `https://lacaseamadras.com` |
| **Crédit (réalisateur)** | `siteConfig.credit` | `votre nom` + lien |
| **Nom de la créatrice** | `histoire.portrait.h2` | « Rolande Ibo » (à confirmer) |
| **Horaires** | `nousTrouver.horaires.rows` | horaires indicatifs (à confirmer) |

### Carte Google Maps

Pour obtenir la bonne URL : Google Maps → rechercher l'adresse → **Partager** →
**Intégrer une carte** → copier l'adresse contenue dans `src="..."` de l'iframe,
puis la coller dans `siteConfig.mapsEmbedUrl`.

### Photos

Toutes les images sont des **placeholders** [picsum.photos](https://picsum.photos)
(marqués `// TODO: replace with real photo …`). Pour les remplacer :

1. Déposez vos photos dans le dossier `public/` (ex. `public/photos/robe-rouge.jpg`).
2. Dans `src/data/content.ts`, remplacez l'URL picsum par le chemin local
   (ex. `image: "/photos/robe-rouge.jpg"`).
3. Les composants utilisent `next/image` : pensez à garder un texte `alt`
   descriptif pour le référencement et l'accessibilité.

---

## 📁 Structure

```
src/
├── app/                  # pages (App Router) + robots.ts + sitemap.ts
│   ├── page.tsx          # Accueil
│   ├── creations/        # Galerie par catégorie
│   ├── histoire/         # Notre histoire
│   ├── madras/           # Page culturelle « Le madras »
│   └── nous-trouver/     # Contact + carte
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── ui/               # MadrasBorder, WhatsAppButton, SectionReveal, …
│   └── sections/         # Hero, ProductGrid, Story, MadrasInfo, Contact…
├── data/content.ts       # ⭐ TOUT le contenu éditable
└── lib/utils.ts          # helpers (cn, liens WhatsApp, format téléphone)
```

---

## 🎨 Design

- **Palette madras** : cream, rouge, safran, vert, azur (voir `tailwind.config.ts`).
- **Typographies** : Cormorant Garamond (titres) + Inter (texte), via `next/font`.
- **Élément signature** : `<MadrasBorder />`, motif tissé en CSS pur.
- **Animations** : Framer Motion, désactivées si l'utilisateur préfère
  « réduire les animations » (`prefers-reduced-motion`).

---

_Site léger, sans base de données, sans CMS — pensé pour être facile à mettre à
jour et rapide à charger._
