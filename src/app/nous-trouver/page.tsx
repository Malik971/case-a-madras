import type { Metadata } from "next";
import { Bus, Car } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import MadrasBorder from "@/components/ui/MadrasBorder";
import SectionReveal from "@/components/ui/SectionReveal";
import { nousTrouver } from "@/data/content";

export const metadata: Metadata = {
  title: "Nous trouver",
  description:
    "La Case à Madras — Box 7, Village Artisanal des Galbas, Sainte-Anne, Guadeloupe. Horaires, plan d'accès, contact WhatsApp et commande à distance.",
  alternates: { canonical: "/nous-trouver" },
};

export default function NousTrouverPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-cream pt-32 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 pb-2 sm:px-6 lg:px-8">
          <SectionReveal>
            <h1 className="font-display text-display font-bold italic text-ink">
              {nousTrouver.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-body text-muted">{nousTrouver.subtitle}</p>
          </SectionReveal>
        </div>
      </header>

      {/* Contact + Map */}
      <ContactSection />

      <MadrasBorder />

      {/* SECTION B — En voiture / Transports */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SectionReveal className="rounded-2xl bg-blanc p-7 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rouge/10 text-rouge">
                <Car className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-heading text-ink">{nousTrouver.acces.voiture.title}</h2>
              <p className="mt-2 text-body text-muted">{nousTrouver.acces.voiture.text}</p>
            </SectionReveal>

            <SectionReveal delay={0.1} className="rounded-2xl bg-blanc p-7 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-vert/10 text-vert">
                <Bus className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-heading text-ink">{nousTrouver.acces.transports.title}</h2>
              <p className="mt-2 text-body text-muted">{nousTrouver.acces.transports.text}</p>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
