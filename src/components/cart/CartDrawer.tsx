"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useCartStore, selectTotalItems } from "@/store/cart";
import { categoryLabels } from "@/data/products";

export default function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const total = useCartStore(selectTotalItems);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clearCart);
  const openWhatsApp = useCartStore((s) => s.openWhatsApp);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[70] bg-nuit/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[71] flex w-full max-w-md flex-col bg-creme shadow-2xl"
            role="dialog"
            aria-label="Panier"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-lin px-5 py-4">
              <h2 className="inline-flex items-center gap-2 font-display text-2xl italic text-bois">
                <ShoppingBag className="h-5 w-5 text-rouge" />
                Mon panier
                {total > 0 && (
                  <span className="font-sans text-base not-italic text-bois/60">({total})</span>
                )}
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Fermer le panier"
                className="flex h-10 w-10 items-center justify-center rounded-full text-bois transition-colors hover:bg-lin"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-bois/60">
                  <ShoppingBag className="h-10 w-10" />
                  <p className="mt-3 text-body">Votre panier est vide.</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-start gap-3 border-b border-lin pb-4">
                      <div className="flex-1">
                        <p className="font-sans font-semibold text-bois">{item.name}</p>
                        <p className="font-ui text-xs uppercase tracking-wider text-safran">
                          {categoryLabels[item.category]}
                        </p>
                        {item.price && <p className="mt-1 text-sm text-bois/60">{item.price}</p>}

                        <div className="mt-2 inline-flex items-center gap-3 rounded-full bg-lin px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Diminuer la quantité"
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-creme text-bois transition-colors hover:text-rouge"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-5 text-center font-ui text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Augmenter la quantité"
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-creme text-bois transition-colors hover:text-rouge"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Retirer ${item.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-bois/50 transition-colors hover:bg-lin hover:text-rouge"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-lin px-5 py-4">
                <button
                  type="button"
                  onClick={() => {
                    openWhatsApp();
                    closeCart();
                  }}
                  className="btn-whatsapp w-full"
                >
                  <WhatsAppIcon size={18} />
                  Commander par WhatsApp
                </button>
                <p className="mt-2 text-center text-xs text-bois/50">
                  Aucun paiement en ligne. Votre commande est envoyée par message.
                </p>
                <button
                  type="button"
                  onClick={clearCart}
                  className="mx-auto mt-3 block font-ui text-xs uppercase tracking-wider text-bois/50 transition-colors hover:text-rouge"
                >
                  Vider le panier
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
