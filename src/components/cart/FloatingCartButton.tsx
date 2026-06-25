"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCartStore, selectTotalItems } from "@/store/cart";

/**
 * FloatingCartButton, sits above the WhatsApp button (z-40, below it).
 * Hidden on /creations where a sticky bottom bar handles the cart instead.
 */
export default function FloatingCartButton() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const total = useCartStore(selectTotalItems);
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => setMounted(true), []);

  const show = mounted && total > 0 && !pathname.startsWith("/creations");

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={openCart}
          aria-label={`Ouvrir le panier, ${total} article${total > 1 ? "s" : ""}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "backOut" }}
          className="fixed bottom-[5.5rem] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-bois text-creme shadow-lg transition-transform duration-200 hover:scale-105 sm:right-6"
        >
          <ShoppingBag className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-rouge px-1.5 font-ui text-xs font-semibold text-creme">
            {total}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
