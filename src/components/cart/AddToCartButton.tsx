"use client";

import { Plus } from "lucide-react";
import { useCartStore } from "@/store/cart";
import type { ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  product: { id: string; name: string; category: ProductCategory; price?: string };
  variant?: "icon" | "full";
  className?: string;
}

export default function AddToCartButton({
  product,
  variant = "icon",
  className,
}: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);

  const handle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={handle}
        className={cn("btn-primary", className)}
        aria-label={`Ajouter ${product.name} au panier`}
      >
        <Plus className="h-4 w-4" />
        Ajouter
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handle}
      aria-label={`Ajouter ${product.name} au panier`}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-rouge text-creme shadow-md transition-transform duration-200 hover:scale-110 hover:bg-safran focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rouge focus-visible:ring-offset-2",
        className,
      )}
    >
      <Plus className="h-5 w-5" />
    </button>
  );
}
