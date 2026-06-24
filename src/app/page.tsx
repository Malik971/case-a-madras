import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import MadrasDivider from "@/components/ui/MadrasDivider";
import Placeholder from "@/components/ui/Placeholder";
import SectionReveal from "@/components/ui/SectionReveal";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { home, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function HomePage() {
  const waCta = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.commander);

  return (
    <>
      {/* HERO */}
      <HeroSection />
      <MadrasDivider />

      {/* TROIS RAISONS */}
      <section className="bg-creme py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal className="max-w-2xl">
            <p className="eyebrow">{home.troisRaisons.label}</p>
            <h2 className="mt-3 text-title text-bois">{home.troisRaisons.h2}</h2>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {home.troisRaisons.cards.map((card, i) => (
              <SectionReveal
                key={card.title}
                delay={i * 0.1}
                className="rounded-xl border-l-4 border-rouge bg-lin p-7"
              >
                <h3 className="text-heading text-bois">{card.title}</h3>
                <p className="mt-3 text-body text-bois/75">{card.text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <MadrasDivider />

      {/* PRODUITS PHARES */}
      <section className="bg-creme py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal className="max-w-2xl">
            <p className="eyebrow">{home.produitsPhares.label}</p>
            <h2 className="mt-3 text-title text-bois">{home.produitsPhares.h2}</h2>
          </SectionReveal>

          {/* Horizontal scroll on mobile, 3-column grid on desktop */}
          <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {home.produitsPhares.cards.map((card, i) => (
              <SectionReveal
                key={card.label}
                delay={(i % 3) * 0.08}
                className="min-w-[75%] snap-start sm:min-w-[45%] md:min-w-0"
              >
                <Link
                  href={card.href}
                  className="group block overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg motion-safe:hover:scale-[1.03]"
                >
                  <div className="relative aspect-[4/3]">
                    <Placeholder label={card.label} kind="product" />
                    <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-rouge text-creme transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-10">
            <Link
              href={home.produitsPhares.cta.href}
              className="inline-flex items-center gap-2 font-ui text-sm font-semibold uppercase tracking-wider text-rouge underline underline-offset-4 transition-colors hover:text-safran"
            >
              {home.produitsPhares.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <MadrasDivider />

      {/* SAVOIR-FAIRE */}
      <StorySection
        label={home.savoirFaire.label}
        h2={home.savoirFaire.h2}
        paragraphs={[home.savoirFaire.body]}
        imageCaption={home.savoirFaire.imageCaption}
        cta={home.savoirFaire.cta}
      />

      <MadrasDivider />

      {/* CTA BANDE */}
      <section className="bg-rouge">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">
          <SectionReveal>
            <h2 className="mx-auto max-w-3xl font-display text-title italic text-creme">
              {home.ctaBande.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-creme/80">{home.ctaBande.body}</p>
            <a
              href={waCta}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mx-auto mt-7"
            >
              <WhatsAppIcon size={18} />
              {home.ctaBande.button}
            </a>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
