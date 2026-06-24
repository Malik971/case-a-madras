import type { Metadata } from "next";
import { Bus, Car } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import MadrasDivider from "@/components/ui/MadrasDivider";
import SectionReveal from "@/components/ui/SectionReveal";
import { nousTrouver } from "@/data/content";

export const metadata: Metadata = {
  title: "Nous trouver",
  description:
    "La Case à Madras, Box 7, Village Artisanal des Galbas, Sainte-Anne, Guadeloupe. Horaires, plan d'accès, contact WhatsApp et commande à distance.",
  alternates: { canonical: "/nous-trouver" },
};

export default function NousTrouverPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-creme pt-32 lg:pt-36">
        <div className="mx-auto max-w-7xl px-5 pb-2 text-center sm:px-8 lg:px-12">
          <SectionReveal>
            <p className="eyebrow">{nousTrouver.label}</p>
            <h1 className="mt-3 font-display text-display font-bold text-bois">{nousTrouver.h1}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-body text-bois/70">{nousTrouver.lead}</p>
          </SectionReveal>
        </div>
      </header>

      {/* Contact + Map */}
      <ContactSection />

      <MadrasDivider />

      {/* ACCES */}
      <section className="bg-creme py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SectionReveal className="rounded-xl bg-lin p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rouge/10 text-rouge">
                <Car className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-heading text-bois">{nousTrouver.acces.voiture.title}</h2>
              <p className="mt-2 text-body text-bois/75">{nousTrouver.acces.voiture.text}</p>
            </SectionReveal>

            <SectionReveal delay={0.1} className="rounded-xl bg-lin p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-vert/10 text-vert">
                <Bus className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-heading text-bois">{nousTrouver.acces.bus.title}</h2>
              <p className="mt-2 text-body text-bois/75">{nousTrouver.acces.bus.text}</p>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
