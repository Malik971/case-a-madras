import type { Metadata } from "next";
import { Fragment } from "react";
import CreationsFilterBar from "@/components/sections/CreationsFilterBar";
import ProductGrid from "@/components/sections/ProductGrid";
import MadrasBorder from "@/components/ui/MadrasBorder";
import SectionReveal from "@/components/ui/SectionReveal";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { categories, creationsPage, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nos créations",
  description:
    "Vêtements enfants en madras faits main, tissu au mètre, bijoux, cosmétiques, maroquinerie, décoration et livres péi. Découvrez les créations de La Case à Madras à Sainte-Anne.",
  alternates: { canonical: "/creations" },
};

export default function CreationsPage() {
  const waUrl = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.commander);

  return (
    <>
      {/* Header */}
      <header id="top" className="scroll-mt-24 bg-cream pt-28 sm:pt-32">
        <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
          <SectionReveal>
            <h1 className="text-display font-bold italic text-ink">{creationsPage.h1}</h1>
            <p className="mt-4 max-w-2xl text-body text-muted">{creationsPage.subtitle}</p>
          </SectionReveal>
        </div>
      </header>

      {/* Sticky filter tabs */}
      <CreationsFilterBar />

      {/* Categories */}
      <div className="pb-24 lg:pb-12">
        {categories.map((category) => (
          <Fragment key={category.id}>
            <MadrasBorder />
            <ProductGrid category={category} />
          </Fragment>
        ))}
      </div>

      {/* Sticky bottom WhatsApp bar — mobile only */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-blanc/95 p-3 backdrop-blur lg:hidden">
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
          <WhatsAppIcon size={18} />
          {creationsPage.stickyBar}
        </a>
      </div>
    </>
  );
}
