import type { Metadata } from "next";
import Link from "next/link";
import MadrasInfo from "@/components/sections/MadrasInfo";
import MadrasBorder from "@/components/ui/MadrasBorder";
import SectionReveal from "@/components/ui/SectionReveal";
import Icon from "@/components/ui/Icon";
import { madrasPage } from "@/data/content";

export const metadata: Metadata = {
  title: "Le madras, l'étoffe de la Guadeloupe",
  description:
    "Origines, reconnaissance, façons de le porter et entretien : tout savoir sur le tissu madras antillais. Un guide signé La Case à Madras, Sainte-Anne, Guadeloupe.",
  keywords: ["madras guadeloupe", "tissu madras antillais", "histoire du madras", "coiffe madras"],
  alternates: { canonical: "/madras" },
};

export default function MadrasInfoPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-cream pt-32 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 lg:px-8">
          <SectionReveal>
            <h1 className="font-display text-display font-bold italic text-ink">{madrasPage.h1}</h1>
            <p className="mt-4 max-w-2xl text-body text-muted">{madrasPage.subtitle}</p>
          </SectionReveal>
        </div>
      </header>

      {/* SECTION A — Origines + swatches */}
      <MadrasInfo />

      <MadrasBorder />

      {/* SECTION B — Comment le reconnaître */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-title text-ink">{madrasPage.reconnaitre.title}</h2>
          </SectionReveal>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {madrasPage.reconnaitre.items.map((item, i) => (
              <SectionReveal
                key={item.title}
                delay={i * 0.1}
                className="rounded-2xl bg-blanc p-7 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-azur/10 text-azur">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-heading text-ink">{item.title}</h3>
                <p className="mt-2 text-body text-muted">{item.text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C — Comment le porter */}
      <section className="bg-blanc py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-title text-ink">{madrasPage.porter.h2}</h2>
            <div className="mt-5 space-y-4 text-body text-muted">
              {madrasPage.porter.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION D — Entretien */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-title text-ink">{madrasPage.entretien.h2}</h2>
          </SectionReveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {madrasPage.entretien.tips.map((tip, i) => (
              <SectionReveal
                key={tip.text}
                delay={(i % 4) * 0.08}
                className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-cream p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-safran/15 text-[#b45f12]">
                  <Icon name={tip.icon} className="h-5 w-5" />
                </div>
                <p className="text-body text-ink">{tip.text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <MadrasBorder />

      {/* SECTION E — CTA */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="flex flex-wrap items-center gap-4">
            <Link href={madrasPage.cta.primary.href} className="btn-primary">
              {madrasPage.cta.primary.label}
            </Link>
            <Link
              href={madrasPage.cta.secondary.href}
              className="inline-flex items-center gap-2 text-body font-medium text-rouge transition-colors hover:text-[#a93226]"
            >
              {madrasPage.cta.secondary.label}
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
