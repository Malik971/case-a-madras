import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { siteConfig } from "@/data/content";
import { categoryLabels, type ProductCategory } from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/utils";

export interface CartItem {
  id: string;
  name: string;
  category: ProductCategory;
  price?: string;
  quantity: number;
  note?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  /** Last add, used to trigger the toast (id changes each add) */
  notify: { id: number; name: string } | null;

  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;

  openCart: () => void;
  closeCart: () => void;
  clearNotify: () => void;

  generateWhatsAppMessage: () => string;
  openWhatsApp: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      notify: null,

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          const add = item.quantity ?? 1;
          const items = existing
            ? state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + add } : i))
            : [...state.items, { ...item, quantity: add }];
          return { items, notify: { id: Date.now(), name: item.name } };
        }),

      removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((i) => i.id !== id)
              : state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        })),

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      clearNotify: () => set({ notify: null }),

      generateWhatsAppMessage: () => {
        const { items } = get();
        const lines = items
          .map((i) => `${i.quantity}x ${i.name} (${categoryLabels[i.category]})`)
          .join("\n");
        return (
          "Bonjour La Case à Madras,\n" +
          "Je souhaite passer la commande suivante :\n\n" +
          lines +
          "\n\nMerci de me confirmer la disponibilité et le total."
        );
      },

      openWhatsApp: () => {
        const url = buildWhatsAppUrl(siteConfig.phone, get().generateWhatsAppMessage());
        if (typeof window !== "undefined") {
          window.open(url, "_blank", "noopener,noreferrer");
        }
      },
    }),
    {
      name: "casa-cart",
      // Storage SSR-safe : pas d'acces a localStorage cote serveur
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? window.localStorage
          : { getItem: () => null, setItem: () => {}, removeItem: () => {} },
      ),
      // Ne persiste que le contenu du panier
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

/** Nombre total d'articles (sélecteur dérivé). */
export const selectTotalItems = (state: CartState) =>
  state.items.reduce((n, i) => n + i.quantity, 0);
