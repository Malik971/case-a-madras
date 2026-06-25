"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import AddToCartButton from "@/components/cart/AddToCartButton";
import InteractiveImage from "@/components/ui/InteractiveImage";
import TiltCard from "@/components/ui/TiltCard";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { categoryLabels, categoryOrder, type Product, type ProductCategory } from "@/data/products";
import { getProducts } from "@/lib/catalog";
import { useCartStore, selectTotalItems } from "@/store/cart";
import { cn } from "@/lib/utils";

type Filter = "tout" | ProductCategory;

function ProductCard({ product }: { product: Product }) {
  const cartProduct = {
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.priceRange,
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <TiltCard className="group relative overflow-hidden rounded-xl bg-lin shadow-sm">
        <div className="relative aspect-square overflow-hidden">
          <InteractiveImage
            images={product.images}
            alt={product.name}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {product.madeInHouse && (
            <span className="absolute left-2 top-2 z-10 rounded-full bg-rouge px-2.5 py-1 font-ui text-[10px] font-semibold uppercase tracking-wider text-creme">
              Fait main
            </span>
          )}

          {/* Desktop hover overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 hidden flex-col items-center justify-center gap-3 bg-bois/60 px-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:flex">
            <p className="font-display text-lg italic text-creme">{product.name}</p>
            <div className="pointer-events-auto">
              <AddToCartButton product={cartProduct} variant="full" />
            </div>
          </div>
        </div>

        {/* Always-visible body */}
        <div className="p-3">
          <h3 className="truncate font-sans text-sm font-semibold text-bois sm:text-base">
            {product.name}
          </h3>
          <div className="mt-1 flex items-center justify-between gap-2">
            <span className="font-ui text-xs text-bois/60">{product.priceRange}</span>
            <AddToCartButton product={cartProduct} className="h-9 w-9 lg:hidden" />
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function CreationsCatalogue() {
  const router = useRouter();
  const params = useSearchParams();

  const allProducts = getProducts();
  const tabs: { key: Filter; label: string; count: number }[] = [
    { key: "tout", label: "Tout", count: allProducts.length },
    ...categoryOrder
      .filter((c) => allProducts.some((p) => p.category === c))
      .map((c) => ({
        key: c as Filter,
        label: categoryLabels[c],
        count: allProducts.filter((p) => p.category === c).length,
      })),
  ];

  const raw = params.get("cat");
  const active: Filter = raw && tabs.some((t) => t.key === raw) ? (raw as Filter) : "tout";

  const filtered =
    active === "tout" ? allProducts : allProducts.filter((p) => p.category === active);

  const [mounted, setMounted] = useState(false);
  const total = useCartStore(selectTotalItems);
  const openCart = useCartStore((s) => s.openCart);
  useEffect(() => setMounted(true), []);

  const setFilter = (key: Filter) => {
    router.replace(key === "tout" ? "/creations" : `/creations?cat=${key}`, { scroll: false });
  };

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 border-y border-lin bg-creme/95 backdrop-blur-md sm:top-[72px]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <ul
            className="no-scrollbar flex gap-2 overflow-x-auto py-3"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {tabs.map((tab) => (
              <li key={tab.key} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setFilter(tab.key)}
                  className={cn(
                    "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 font-ui text-sm font-medium transition-colors",
                    active === tab.key
                      ? "bg-rouge text-creme"
                      : "bg-lin text-bois hover:bg-rouge/10 hover:text-rouge",
                  )}
                >
                  {tab.label}
                  <span
                    className={cn(
                      "rounded-full px-1.5 text-xs",
                      active === tab.key ? "bg-creme/20" : "bg-bois/10",
                    )}
                  >
                    {tab.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-5 pb-28 pt-10 sm:px-8 lg:px-12 lg:pb-16">
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Sticky mobile cart bar */}
      {mounted && total > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-lin bg-creme/95 p-3 backdrop-blur lg:hidden">
          <button type="button" onClick={openCart} className="btn-whatsapp w-full">
            <WhatsAppIcon size={18} />
            Voir mon panier ({total} article{total > 1 ? "s" : ""})
          </button>
        </div>
      )}
    </>
  );
}
