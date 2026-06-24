import type { Metadata } from "next";
import { Fragment } from "react";
import CreationsFilterBar from "@/components/sections/CreationsFilterBar";
import ProductGrid from "@/components/sections/ProductGrid";
import SectionReveal from "@/components/ui/SectionReveal";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { categories, creationsPage, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nos créations et nos produits",
  description:
    "Vêtements en madras faits main, tissu au mètre, peluches, bijoux créoles, linge de maison, sandales et livres. Toute la boutique La Case à Madras à Sainte-Anne.",
  alternates: { canonical: "/creations" },
};

export default function CreationsPage() {
  const waUrl = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.commander);

  return (
    <>
      {/* Header */}
      <header id="top" className="scroll-mt-28 bg-creme pt-32 lg:pt-36">
        <div className="mx-auto max-w-7xl px-5 pb-8 text-center sm:px-8 lg:px-12">
          <SectionReveal>
            <p className="eyebrow">{creationsPage.label}</p>
            <h1 className="mt-3 text-display font-bold text-bois">{creationsPage.h1}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-body text-bois/70">{creationsPage.lead}</p>
          </SectionReveal>
        </div>
      </header>

      {/* Sticky filter tabs */}
      <CreationsFilterBar />

      {/* Categories */}
      <div className="pb-24 lg:pb-12">
        {categories.map((category) => (
          <Fragment key={category.id}>
            <ProductGrid category={category} />
          </Fragment>
        ))}
      </div>

      {/* Sticky bottom WhatsApp bar, mobile only */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-bois/10 bg-vert p-3 lg:hidden">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full py-3 font-ui text-button uppercase text-creme"
        >
          <WhatsAppIcon size={18} />
          {creationsPage.stickyBar}
        </a>
      </div>
    </>
  );
}
