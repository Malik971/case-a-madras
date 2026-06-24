import Image from "next/image";
import CategoryBadge from "@/components/ui/CategoryBadge";
import SectionReveal from "@/components/ui/SectionReveal";
import type { Category, Product } from "@/data/content";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-blanc shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-square overflow-hidden">
        {/* TODO: replace with real photo — {product.name} */}
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex items-start justify-between gap-3 p-4">
        <h3 className="text-body font-medium text-ink">{product.name}</h3>
        {product.surCommande && (
          <CategoryBadge tone="safran" className="shrink-0">
            sur commande
          </CategoryBadge>
        )}
      </div>
    </div>
  );
}

/**
 * ProductGrid — renders one product category as an anchored section:
 * eyebrow + heading + description, then a responsive grid of product cards.
 */
export default function ProductGrid({ category }: { category: Category }) {
  return (
    <section id={category.id} className="scroll-mt-24 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="max-w-2xl">
          <p className="text-small font-medium uppercase tracking-[0.18em] text-rouge">
            {category.eyebrow}
          </p>
          <h2 className="mt-2 text-title text-ink">{category.h2}</h2>
          <p className="mt-3 text-body text-muted">{category.desc}</p>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product, i) => (
            <SectionReveal key={product.name} delay={(i % 3) * 0.08}>
              <ProductCard product={product} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
