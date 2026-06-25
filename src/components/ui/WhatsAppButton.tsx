"use client";

import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl, cn } from "@/lib/utils";

/**
 * WhatsAppButton, floating CTA fixed bottom-right on every page.
 * Scales in after a 2s delay, with a gentle pulse ring.
 * Respects prefers-reduced-motion (no scale-in, no pulse).
 */
export default function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const href = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.general);

  // On /creations there is a sticky WhatsApp bar on mobile, so lift the
  // floating button above it (only on mobile; the bar is hidden on lg+).
  const isCreations = pathname.startsWith("/creations");

  return (
    <motion.div
      className={cn(
        "fixed right-4 z-50 sm:right-6",
        isCreations ? "bottom-24 lg:bottom-6" : "bottom-4 sm:bottom-6",
      )}
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
