"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AddToCartButton from "@/components/cart/AddToCartButton";
import InteractiveImage from "@/components/ui/InteractiveImage";
import TiltCard from "@/components/ui/TiltCard";
import { categoryLabels } from "@/data/products";
import { getFeaturedProducts } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export default function FeaturedCarousel() {
  const featuredProducts = getFeaturedProducts();
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const slides = featuredProducts.length + 1; // + CTA card

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const w = card ? card.offsetWidth + 20 : 1; // card + gap-5
    setActive(Math.round(el.scrollLeft / w));
  };

  return (
    <div>
      <div
        ref={scroller}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-6 pt-2"
      >
        {featuredProducts.map((p) => (
          <TiltCard key={p.id} className="w-72 shrink-0 snap-start rounded-xl sm:w-80">
            <article className="group overflow-hidden rounded-xl bg-lin">
              <div className="relative aspect-square overflow-hidden">
                <InteractiveImage
                  images={p.images}
                  alt={p.name}
                  sizes="320px"
                  className="transition-transform duration-500 group-hover:scale-[1.08]"
                />
                {p.madeInHouse && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-rouge px-3 py-1 font-ui text-[11px] font-semibold uppercase tracking-wider text-creme">
                    Fait main
                  </span>
                )}
                <div className="absolute bottom-3 right-3 z-10 opacity-100 transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100">
                  <AddToCartButton
                    product={{ id: p.id, name: p.name, category: p.category, price: p.priceRange }}
                  />
                </div>
              </div>
              <div className="p-4">
                <p className="font-ui text-xs font-semibold uppercase tracking-wider text-safran">
                  {categoryLabels[p.category]}
                </p>
                <h3 className="mt-1 font-sans font-semibold text-bois">{p.name}</h3>
                <p className="mt-1 font-ui text-sm text-bois/60">{p.priceRange}</p>
              </div>
            </article>
          </TiltCard>
        ))}

        {/* CTA card */}
        <Link
          href="/creations"
          className="group flex w-72 shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-xl bg-rouge p-6 text-center text-creme transition-colors hover:bg-safran sm:w-80"
        >
          <span className="font-display text-2xl italic">Voir tous nos produits</span>
          <ArrowRight className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Dots (mobile) */}
      <div className="mt-1 flex justify-center gap-1.5 sm:hidden">
        {Array.from({ length: slides }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === active ? "w-5 bg-rouge" : "w-1.5 bg-bois/25",
            )}
          />
        ))}
      </div>
    </div>
  );
}
