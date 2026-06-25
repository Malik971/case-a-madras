import type { Metadata } from "next";
import { Inter, Lora, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CartLayer from "@/components/cart/CartLayer";
import { siteConfig } from "@/data/content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "La Case à Madras | Boutique artisanale à Sainte-Anne, Guadeloupe",
    template: "%s | La Case à Madras",
  },
  description: siteConfig.description,
  keywords: [
    "madras guadeloupe",
    "boutique artisanale sainte-anne",
    "vêtements madras enfants",
    "tissu madras",
    "bijoux créoles",
    "village artisanal galbas",
  ],
  authors: [{ name: "La Case à Madras" }],
  creator: "La Case à Madras",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "La Case à Madras",
    title: "La Case à Madras | Boutique artisanale à Sainte-Anne, Guadeloupe",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        // TODO: photo réelle (1200x630) à placer dans /public/images/og-case-a-madras.jpg
        url: "/images/og-case-a-madras.jpg",
        width: 1200,
        height: 630,
        alt: "La Case à Madras, boutique artisanale créole à Sainte-Anne, Guadeloupe",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lora.variable} ${inter.variable}`}>
      <body className="bg-creme font-sans text-bois antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CartLayer />
      </body>
    </html>
  );
}
