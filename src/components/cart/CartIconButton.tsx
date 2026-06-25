"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCartStore, selectTotalItems } from "@/store/cart";
import { cn } from "@/lib/utils";

/**
 * CartIconButton, used in the navbar. Shows the item count and opens the drawer.
 */
export default function CartIconButton({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const total = useCartStore(selectTotalItems);
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Ouvrir le panier${mounted && total > 0 ? `, ${total} article${total > 1 ? "s" : ""}` : ""}`}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:text-rouge",
        className,
      )}
    >
      <ShoppingBag className="h-6 w-6" />
      {mounted && total > 0 && (
        <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-rouge px-1 font-ui text-[11px] font-semibold text-creme">
          {total}
        </span>
      )}
    </button>
  );
}
