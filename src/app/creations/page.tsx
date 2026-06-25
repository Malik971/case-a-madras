import type { Metadata } from "next";
import { Suspense } from "react";
import CreationsCatalogue from "@/components/sections/CreationsCatalogue";
import { creationsPage } from "@/data/content";

export const metadata: Metadata = {
  title: "Nos créations",
  description:
    "Vêtements enfants en madras faits main, tissu au mètre, bijoux, peluches, linge, sandales et livres. Ajoutez au panier et commandez par WhatsApp.",
  alternates: { canonical: "/creations" },
};

export default function CreationsPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-creme pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">{creationsPage.label}</p>
          <h1 className="mt-3 font-display text-display font-black text-bois">
            {creationsPage.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-body text-bois/70">{creationsPage.lead}</p>
        </div>
      </header>

      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <CreationsCatalogue />
      </Suspense>
    </>
  );
}
