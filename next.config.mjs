/** @type {import('next').NextConfig} */
// NOTE: le projet utilise next.config.mjs (et non .ts). Config appliquee ici.
// Toutes les images sont locales (/public/images) : aucun domaine distant requis.
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384],
  },
};

export default nextConfig;
