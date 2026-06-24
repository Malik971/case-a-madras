import type { Metadata } from "next";
import MadrasInfo from "@/components/sections/MadrasInfo";
import MadrasDivider from "@/components/ui/MadrasDivider";
import SectionReveal from "@/components/ui/SectionReveal";
import Icon from "@/components/ui/Icon";
import { madrasPage } from "@/data/content";

export const metadata: Metadata = {
  title: "Le madras, l'étoffe de la Guadeloupe",
  description:
    "Origines, couleurs, façons de le porter et entretien : tout savoir sur le tissu madras antillais. Un guide signé La Case à Madras, Sainte-Anne, Guadeloupe.",
  keywords: [
    "madras guadeloupe",
    "tissu madras antillais",
    "histoire du madras",
    "couleurs madras",
  ],
  alternates: { canonical: "/madras" },
};

// Rotating accent chips for the "porter" cards
const porterChip = ["bg-rouge/10 text-rouge", "bg-safran/15 text-safran", "bg-vert/10 text-vert"];

export default function MadrasInfoPage() {
  const { couleurs, porter, entretien } = madrasPage;

  return (
    <>
      {/* Header */}
      <header className="bg-creme pt-32 lg:pt-36">
        <div className="mx-auto max-w-7xl px-5 pb-6 text-center sm:px-8 lg:px-12">
          <SectionReveal>
            <p className="eyebrow">{madrasPage.label}</p>
            <h1 className="mt-3 font-display text-display font-bold text-bois">{madrasPage.h1}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-body text-bois/70">{madrasPage.lead}</p>
          </SectionReveal>
        </div>
      </header>

      <MadrasDivider />

      {/* ORIGINES */}
      <MadrasInfo />

      {/* LES TROIS COULEURS */}
      <section className="bg-lin py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal className="max-w-2xl">
            <h2 className="text-title text-bois">{couleurs.h2}</h2>
            <p className="mt-4 text-body text-bois/75">{couleurs.intro}</p>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {couleurs.cards.map((card, i) => (
              <SectionReveal key={card.name} delay={i * 0.1}>
                <div className="overflow-hidden rounded-xl bg-creme shadow-sm">
                  <div
                    className="h-40 w-full"
                    style={{ backgroundColor: card.color }}
                    aria-hidden="true"
                  />
                  <div className="p-6">
                    <h3 className="text-heading text-bois">{card.name}</h3>
                    <p className="mt-1 text-body text-bois/70">{card.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-8">
            <p className="max-w-2xl font-display text-lg italic text-bois/70">{couleurs.note}</p>
          </SectionReveal>
        </div>
      </section>

      {/* COMMENT LE PORTER */}
      <section className="bg-creme py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <h2 className="text-title text-bois">{porter.h2}</h2>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {porter.cards.map((card, i) => (
              <SectionReveal key={card.title} delay={i * 0.1} className="rounded-xl bg-lin p-7">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${porterChip[i % porterChip.length]}`}
                >
                  <Icon name={card.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-heading text-bois">{card.title}</h3>
                <p className="mt-2 text-body text-bois/75">{card.text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <MadrasDivider />

      {/* ENTRETIEN */}
      <section className="bg-lin py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <h2 className="text-title text-bois">{entretien.h2}</h2>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {entretien.tips.map((tip, i) => (
              <SectionReveal
                key={tip.text}
                delay={(i % 4) * 0.08}
                className="flex h-full flex-col gap-3 rounded-xl bg-creme p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-safran/15 text-safran">
                  <Icon name={tip.icon} className="h-5 w-5" />
                </div>
                <p className="text-body text-bois">{tip.text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
