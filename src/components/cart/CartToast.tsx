"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useCartStore } from "@/store/cart";

/**
 * CartToast, bottom-center confirmation shown for 2s when an item is added.
 */
export default function CartToast() {
  const notify = useCartStore((s) => s.notify);
  const clearNotify = useCartStore((s) => s.clearNotify);

  useEffect(() => {
    if (!notify) return;
    const t = setTimeout(clearNotify, 2000);
    return () => clearTimeout(t);
  }, [notify, clearNotify]);

  return (
    <AnimatePresence>
      {notify && (
        <motion.div
          key={notify.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
        >
          <div className="inline-flex max-w-[90vw] items-center gap-2 rounded-full bg-rouge px-5 py-3 text-creme shadow-lg">
            <Check className="h-4 w-4 shrink-0" />
            <span className="truncate font-ui text-sm font-semibold">
              Ajouté au panier : {notify.name}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
