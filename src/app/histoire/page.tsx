import type { Metadata } from "next";
import MadrasDivider from "@/components/ui/MadrasDivider";
import Placeholder from "@/components/ui/Placeholder";
import SectionReveal from "@/components/ui/SectionReveal";
import StorySection from "@/components/sections/StorySection";
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
      {/* HEADER, full-width image with overlay */}
      <header className="relative flex min-h-[60svh] items-center justify-center overflow-hidden pt-20">
        {/* TODO: photo réelle à déposer dans /public/images/rolande-portrait-large.jpg */}
        <div aria-hidden="true" className="absolute inset-0">
          <Placeholder label={histoire.header.imageCaption} kind="image" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-bois/50" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
          <h1 className="font-display text-display font-black text-creme">{histoire.header.h1}</h1>
        </div>
      </header>

      <MadrasDivider />

      {/* PORTRAIT */}
      <StorySection
        label={histoire.portrait.label}
        h2={histoire.portrait.h2}
        paragraphs={histoire.portrait.paragraphs}
        imageCaption={histoire.portrait.imageCaption}
        imageAspect="aspect-[3/4]"
      />

      <MadrasDivider />

      {/* CHIFFRES */}
      <section className="bg-creme py-20 lg:py-28">
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
      <section className="bg-creme py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal className="max-w-3xl">
            <p className="eyebrow">{histoire.village.label}</p>
            <h2 className="mt-3 text-title text-bois">{histoire.village.h2}</h2>
            <p className="mt-5 text-body text-bois/75">{histoire.village.body}</p>
          </SectionReveal>

          <SectionReveal delay={0.1} className="mt-10">
            <div className="relative aspect-[16/7] overflow-hidden rounded-xl shadow-sm">
              {/* TODO: photo de l'extérieur du village ou de la devanture */}
              <Placeholder label={histoire.village.imageCaption} kind="image" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
