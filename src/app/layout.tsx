import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/data/content";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "La Case à Madras | Boutique artisanale créole · Sainte-Anne Guadeloupe",
    template: "%s · La Case à Madras",
  },
  description: siteConfig.description,
  keywords: [
    "madras",
    "guadeloupe",
    "artisanat",
    "sainte-anne",
    "vêtements créoles",
    "tissu madras",
    "fait main",
    "boutique guadeloupe",
    "village artisanal",
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
    title: "La Case à Madras | Boutique artisanale créole · Sainte-Anne Guadeloupe",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        // TODO: replace with real OG image — devanture de la boutique ou créations madras (1200×630)
        url: "https://picsum.photos/seed/madras-og/1200/630",
        width: 1200,
        height: 630,
        alt: "La Case à Madras — boutique artisanale créole à Sainte-Anne, Guadeloupe",
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
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
