"use client";

import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/utils";

/**
 * WhatsAppButton, floating CTA fixed bottom-right on every page.
 * Scales in after a 2s delay, with a gentle pulse ring.
 * Respects prefers-reduced-motion (no scale-in, no pulse).
 */
export default function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();
  const href = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.general);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: shouldReduceMotion ? 0 : 2, duration: 0.4, ease: "backOut" }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Commander par WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-vert text-creme shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert focus-visible:ring-offset-2"
      >
        {/* Pulse ring (disabled under reduced motion via the global CSS media query) */}
        {!shouldReduceMotion && (
          <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-vert" />
        )}

        <WhatsAppIcon size={28} />

        {/* Tooltip on hover (desktop) */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-bois px-3 py-1.5 font-ui text-xs text-creme opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
          Commander par WhatsApp
        </span>
      </a>
    </motion.div>
  );
}
