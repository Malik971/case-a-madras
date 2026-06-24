import Image from "next/image";
import CategoryBadge from "@/components/ui/CategoryBadge";
import Placeholder from "@/components/ui/Placeholder";
import SectionReveal from "@/components/ui/SectionReveal";
import MadrasDivider from "@/components/ui/MadrasDivider";
import type { Category, Product } from "@/data/content";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-lin shadow-sm transition-all duration-300 hover:shadow-lg motion-safe:hover:scale-[1.03]">
      <div className="relative aspect-square overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.alt ?? product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          // TODO: photo réelle du produit
          <Placeholder label={product.name} kind="product" />
        )}
      </div>
      <div className="flex items-start justify-between gap-3 p-4">
        <h3 className="font-sans text-base font-semibold text-bois">{product.name}</h3>
        {product.surCommande && (
          <CategoryBadge tone="safran" className="shrink-0">
            Sur commande
          </CategoryBadge>
        )}
      </div>
    </div>
  );
}

/**
 * ProductGrid, renders one product category as an anchored section:
 * thin divider, label, heading, description, then a responsive grid of cards.
 */
export default function ProductGrid({ category }: { category: Category }) {
  return (
    <section id={category.id} className="scroll-mt-28 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <MadrasDivider variant="thin" className="mb-12 max-w-[120px]" />
        <SectionReveal className="max-w-2xl">
          <p className="eyebrow">{category.eyebrow}</p>
          <h2 className="mt-3 text-title text-bois">{category.h2}</h2>
          <p className="mt-4 text-body text-bois/70">{category.desc}</p>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {category.products.map((product, i) => (
            <SectionReveal key={product.name} delay={(i % 3) * 0.06}>
              <ProductCard product={product} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
