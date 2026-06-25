import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import InteractiveImage from "@/components/ui/InteractiveImage";
import MadrasDivider from "@/components/ui/MadrasDivider";
import SectionReveal from "@/components/ui/SectionReveal";
import { histoire } from "@/data/content";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Depuis 1995 au Village Artisanal de Sainte-Anne, l'histoire de Rolande Ibo et de La Case à Madras. Couture sur place, savoir-faire antillais et produits locaux.",
  alternates: { canonical: "/histoire" },
};

export default function HistoirePage() {
  return (
    <>
      {/* HEADER */}
      <header className="relative flex min-h-[60svh] items-center justify-center overflow-hidden pt-20">
        <Image
          src={histoire.header.image}
          alt={histoire.header.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-nuit/60" />
        <div className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-8">
          <h1 className="font-display text-display font-black text-creme">{histoire.header.h1}</h1>
        </div>
      </header>

      <MadrasDivider />

      {/* PORTRAIT */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <SectionReveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-lin shadow-sm">
              <InteractiveImage
                images={histoire.portrait.images}
                alt={histoire.portrait.imageAlt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholderKind="image"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="eyebrow">{histoire.portrait.label}</p>
            <h2 className="mt-3 text-title text-bois">{histoire.portrait.h2}</h2>
            <div className="mt-5 space-y-4 text-body text-bois/75">
              {histoire.portrait.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <MadrasDivider />

      {/* TIMELINE */}
      <section className="bg-voile py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <p className="eyebrow">Notre parcours</p>
            <h2 className="mt-3 text-title text-bois">De 1995 à nos jours</h2>
          </SectionReveal>

          <ol className="no-scrollbar relative mt-10 flex gap-6 overflow-x-auto lg:block lg:gap-0 lg:overflow-visible">
            {/* Vertical line (desktop) */}
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-2 hidden w-px bg-lin lg:block"
              style={{ height: "calc(100% - 1rem)" }}
            />
            {histoire.timeline.map((m, i) => (
              <SectionReveal
                key={m.year}
                delay={i * 0.08}
                className="relative w-60 shrink-0 lg:w-auto lg:pb-10 lg:pl-12"
              >
                <span
                  aria-hidden="true"
                  className="mb-3 block h-4 w-4 rounded-full border-2 border-creme bg-rouge lg:absolute lg:left-0 lg:top-1 lg:mb-0"
                />
                <p className="font-display text-2xl font-bold italic text-rouge">{m.year}</p>
                <p className="mt-2 text-body text-bois/75">{m.text}</p>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </section>

      <MadrasDivider />

      {/* CHIFFRES */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {histoire.stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1} className="text-center">
                <p className="font-display text-display font-black text-rouge">{stat.value}</p>
                <p className="mt-1 text-body text-bois/75">{stat.label}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <MadrasDivider />

      {/* LE VILLAGE */}
      <section className="bg-creme py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal className="max-w-3xl">
            <p className="eyebrow">{histoire.village.label}</p>
            <h2 className="mt-3 text-title text-bois">{histoire.village.h2}</h2>
            <p className="mt-5 text-body text-bois/75">{histoire.village.body}</p>
          </SectionReveal>

          <SectionReveal delay={0.1} className="mt-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-lin shadow-sm sm:aspect-[16/7]">
              <Image
                src={histoire.village.image}
                alt={histoire.village.imageAlt}
                fill
                sizes="(max-width: 1280px) 100vw, 1216px"
                className="object-cover"
              />
            </div>
          </SectionReveal>

          <SectionReveal className="mt-8">
            <Link
              href="/nous-trouver"
              className="inline-flex items-center gap-2 font-ui text-sm font-semibold uppercase tracking-wider text-rouge transition-colors hover:text-safran"
            >
              Venir nous voir
              <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
