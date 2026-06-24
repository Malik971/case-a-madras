import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import StorySection from "@/components/sections/StorySection";
import MadrasBorder from "@/components/ui/MadrasBorder";
import SectionReveal from "@/components/ui/SectionReveal";
import { histoire } from "@/data/content";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Depuis 1995 au Village Artisanal de Sainte-Anne : l'histoire d'une couturière qui a fait du madras son langage. Vêtements enfants cousus main, savoir-faire antillais.",
  alternates: { canonical: "/histoire" },
};

export default function HistoirePage() {
  return (
    <>
      {/* HERO — text-first */}
      <section className="bg-cream pt-32 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-small font-medium uppercase tracking-[0.18em] text-rouge">
              {histoire.hero.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-display font-bold italic text-ink">
              {histoire.hero.titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION A — Portrait */}
      <StorySection
        image={histoire.portrait.image}
        imageAlt={histoire.portrait.imageAlt}
        h2={histoire.portrait.h2}
        paragraphs={histoire.portrait.paragraphs}
      />

      <MadrasBorder />

      {/* SECTION B — Stats */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {histoire.stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1} className="text-center">
                <p className="font-display text-display font-bold italic text-rouge">
                  {stat.value}
                </p>
                <p className="mt-1 text-body text-muted">{stat.label}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C — Ce que vous trouverez ici */}
      <section className="bg-blanc py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-title text-ink">{histoire.trouverez.title}</h2>
          </SectionReveal>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-3 md:grid-cols-2">
            {[...histoire.trouverez.left, ...histoire.trouverez.right].map((item, i) => (
              <SectionReveal key={item} delay={(i % 4) * 0.05}>
                <div className="flex items-center gap-3 border-b border-ink/10 py-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vert/10 text-vert">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-body text-ink">{item}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D — Blockquote */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <blockquote className="border-l-4 border-rouge pl-6">
              <p className="font-display text-title font-normal italic text-ink">
                « {histoire.quote} »
              </p>
            </blockquote>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION E — CTA */}
      <section className="bg-cream pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="flex flex-wrap items-center gap-4">
            <Link href={histoire.cta.primary.href} className="btn-primary">
              {histoire.cta.primary.label}
            </Link>
            <Link
              href={histoire.cta.secondary.href}
              className="inline-flex items-center gap-2 text-body font-medium text-rouge transition-colors hover:text-[#a93226]"
            >
              {histoire.cta.secondary.label}
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
