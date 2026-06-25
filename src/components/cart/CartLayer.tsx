"use client";

import CartDrawer from "@/components/cart/CartDrawer";
import CartToast from "@/components/cart/CartToast";
import FloatingCartButton from "@/components/cart/FloatingCartButton";

/**
 * CartLayer, mounts the global cart UI (drawer, floating button, toast) once.
 * Rendered in the root layout.
 */
export default function CartLayer() {
  return (
    <>
      <CartDrawer />
      <FloatingCartButton />
      <CartToast />
    </>
  );
}
