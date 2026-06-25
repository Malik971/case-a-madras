import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BookOpen,
  Coffee,
  Footprints,
  Gem,
  Layers,
  Scissors,
  Sparkles,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedCarousel from "@/components/sections/FeaturedCarousel";
import IleParallax from "@/components/sections/IleParallax";
import VideoSection from "@/components/sections/VideoSection";
import VirtualTourDynamic from "@/components/VirtualTour";
import InteractiveImage from "@/components/ui/InteractiveImage";
import MadrasDivider from "@/components/ui/MadrasDivider";
import Marquee from "@/components/ui/Marquee";
import SectionReveal from "@/components/ui/SectionReveal";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { home, siteConfig, whatsappMessages } from "@/data/content";
import { boutique, boutiqueVideo } from "@/data/images";
import {
  categoryLabels,
  categoryOrder,
  countByCategory,
  type ProductCategory,
} from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/utils";

const categoryIcons: Record<ProductCategory, LucideIcon> = {
  couture: Scissors,
  tissu: Layers,
  peluches: Baby,
  bijoux: Gem,
  linge: UtensilsCrossed,
  sandales: Footprints,
  livres: BookOpen,
  mugs: Coffee,
  accessoires: Sparkles,
};

export default function HomePage() {
  const waCta = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.commander);
  const { featured, visite, video, ame, catalogue, ctaBande } = home;

  return (
    <>
      {/* SECTION 1, HERO */}
      <HeroSection />
      <MadrasDivider />

      {/* SECTION 2, PRODUITS PHARES */}
      <section className="bg-creme py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <p className="eyebrow">{featured.label}</p>
            <h2 className="mt-3 text-title text-bois">{featured.h2}</h2>
          </SectionReveal>
          <div className="mt-10">
            <FeaturedCarousel />
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Fait main",
          "Madras authentique",
          "Depuis 1995",
          "Sainte-Anne",
          "Cousu sur place",
          "Artisanat créole",
        ]}
      />

      {/* SECTION 3, VISITE VIRTUELLE (dark) */}
      <section className="bg-nuit py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal className="max-w-2xl">
            <p className="font-ui text-label uppercase text-safran">{visite.label}</p>
            <h2 className="mt-3 text-title text-creme">{visite.h2}</h2>
            <p className="mt-4 text-body text-creme/70">{visite.lead}</p>
          </SectionReveal>
          <div className="mt-10">
            <VirtualTourDynamic />
          </div>
          <Link
            href={visite.link.href}
            className="mt-6 inline-flex items-center gap-2 font-ui text-sm font-semibold uppercase tracking-wider text-creme underline underline-offset-4 transition-colors hover:text-safran"
          >
            {visite.link.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <MadrasDivider />

      {/* SECTION 4, VIDEO (dark) */}
      <section className="bg-nuit pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <SectionReveal className="max-w-2xl">
            <p className="font-ui text-label uppercase text-safran">{video.label}</p>
            <h2 className="mt-3 text-title text-creme">{video.h2}</h2>
          </SectionReveal>
          <div className="mt-10">
            <VideoSection
              src={boutiqueVideo}
              poster={boutique.interieur}
              posterAlt="Interieur de la boutique La Case a Madras"
              title={video.title}
              note={video.note}
            />
          </div>
        </div>
      </section>

      <MadrasDivider />

      {/* SECTION 5, L'AME DE LA GUADELOUPE (two-panel) */}
      <section className="bg-creme">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-5">
          <SectionReveal className="relative aspect-[4/3] lg:col-span-3 lg:aspect-auto">
            <InteractiveImage
              images={ame.images}
              alt={ame.imageAlt}
              sizes="(max-width: 1024px) 100vw, 60vw"
              placeholderKind="image"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-safran/10 mix-blend-multiply" />
          </SectionReveal>

          <SectionReveal
            delay={0.1}
            className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:col-span-2 lg:px-12 lg:py-20"
          >
            <p className="eyebrow">{ame.label}</p>
            <h2 className="mt-3 text-title text-bois">{ame.h2}</h2>
            <p className="mt-5 text-body text-bois/75">{ame.body1}</p>
            <span aria-hidden="true" className="my-5 block h-0.5 w-10 bg-rouge" />
            <p className="text-body text-bois/75">{ame.body2}</p>
            <Link
              href={ame.cta.href}
              className="mt-7 inline-flex items-center gap-2 font-ui text-sm font-semibold uppercase tracking-wider text-rouge transition-colors hover:text-safran"
            >
              {ame.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <MadrasDivider />

      {/* SECTION 6, CATALOGUE RAPIDE */}
      <section className="bg-creme py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <p className="eyebrow">{catalogue.label}</p>
            <h2 className="mt-3 text-title text-bois">{catalogue.h2}</h2>
          </SectionReveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {categoryOrder.map((cat, i) => {
              const Cmp = categoryIcons[cat];
              return (
                <SectionReveal key={cat} delay={(i % 4) * 0.05}>
                  <Link
                    href={`/creations?cat=${cat}`}
                    className="group flex h-full flex-col gap-3 rounded-xl bg-lin p-5 transition-colors duration-200 hover:bg-rouge hover:text-creme"
                  >
                    <Cmp className="h-7 w-7 text-rouge transition-colors group-hover:text-creme" />
                    <div>
                      <p className="font-sans font-semibold">{categoryLabels[cat]}</p>
                      <p className="font-ui text-sm text-bois/50 transition-colors group-hover:text-creme/80">
                        {countByCategory(cat)} produit{countByCategory(cat) > 1 ? "s" : ""}
                      </p>
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <MadrasDivider />

      {/* SECTION 7, L'ILE EN ARRIERE-PLAN */}
      <IleParallax />

      {/* SECTION 8, CTA WHATSAPP */}
      <section className="bg-rouge">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <SectionReveal>
            <h2 className="mx-auto max-w-3xl font-display text-title italic text-creme">
              {ctaBande.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-creme/80">{ctaBande.body}</p>
            <a
              href={waCta}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mx-auto mt-7"
            >
              <WhatsAppIcon size={18} />
              {ctaBande.button}
            </a>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
