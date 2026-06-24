import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import MadrasBorder from "@/components/ui/MadrasBorder";
import SectionReveal from "@/components/ui/SectionReveal";
import Icon from "@/components/ui/Icon";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { home, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/utils";

// Accent → tailwind classes for the atout icon chips
const accentChip = {
  rouge: "bg-rouge/10 text-rouge",
  safran: "bg-safran/15 text-[#b45f12]",
  vert: "bg-vert/10 text-vert",
} as const;

export default function HomePage() {
  const waCta = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.reserver);

  return (
    <>
      {/* SECTION A — HERO */}
      <HeroSection />
      <MadrasBorder />

      {/* SECTION B — TROIS ATOUTS */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {home.atouts.map((atout, i) => (
              <SectionReveal
                key={atout.title}
                delay={i * 0.1}
                className="rounded-2xl bg-blanc p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accentChip[atout.accent]}`}
                >
                  <Icon name={atout.icon} className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-heading text-ink">{atout.title}</h2>
                <p className="mt-2 text-body text-muted">{atout.text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <MadrasBorder />

      {/* SECTION C — APERÇU CRÉATIONS */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="max-w-2xl">
            <h2 className="text-title text-ink">{home.apercu.title}</h2>
            <p className="mt-3 text-body text-muted">{home.apercu.subtitle}</p>
          </SectionReveal>

          {/* Horizontal scroll on mobile, 2×2 grid from sm up */}
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0">
            {home.apercu.cards.map((card, i) => (
              <SectionReveal
                key={card.label}
                delay={(i % 2) * 0.1}
                className="min-w-[80%] snap-start sm:min-w-0"
              >
                <Link
                  href={card.href}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  {/* TODO: replace with real photo — {card.label} */}
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 80vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                    <span className="font-display text-2xl font-semibold italic text-blanc">
                      {card.label}
                    </span>
                    <ArrowRight className="h-5 w-5 text-blanc transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-8">
            <Link
              href={home.apercu.ctaAll.href}
              className="inline-flex items-center gap-2 text-body font-medium text-rouge transition-colors hover:text-[#a93226]"
            >
              {home.apercu.ctaAll.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION D — CTA BANDE */}
      <section className="bg-rouge">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <SectionReveal>
            <h2 className="mx-auto max-w-3xl text-title text-blanc">{home.ctaBande.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-cream/90">{home.ctaBande.text}</p>
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
