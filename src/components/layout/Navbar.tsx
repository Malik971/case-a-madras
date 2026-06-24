"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import MadrasDivider from "@/components/ui/MadrasDivider";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { navLinks, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl, cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const waUrl = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.commander);

  // Solid creme + shadow after 80px of scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the drawer whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Solid treatment: when scrolled, off-home, or drawer open
  const solid = scrolled || !isHome || open;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid ? "bg-creme shadow-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="leading-tight transition-opacity hover:opacity-80">
          <span className="block font-display text-2xl font-bold italic text-rouge">
            La Case à Madras
          </span>
          <span className={cn("block font-sans text-xs", solid ? "text-bois/70" : "text-creme/90")}>
            Sainte-Anne, Guadeloupe
          </span>
        </Link>

        {/* Desktop links (center) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "font-ui text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-rouge"
                    : solid
                      ? "text-bois hover:text-rouge"
                      : "text-creme hover:text-safran",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA (right) */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden lg:inline-flex"
        >
          <WhatsAppIcon size={16} />
          Commander
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col items-center gap-[5px]">
            <span className={cn("block h-0.5 w-6 rounded-full", solid ? "bg-bois" : "bg-creme")} />
            <span className={cn("block h-0.5 w-6 rounded-full", solid ? "bg-bois" : "bg-creme")} />
            <span className={cn("block h-0.5 w-6 rounded-full", solid ? "bg-bois" : "bg-creme")} />
          </div>
        </button>
      </nav>

      {/* Signature thin madras band, always visible at bottom of nav */}
      <MadrasDivider variant="thin" />

      {/* Mobile drawer (slides in from the right) */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="drawer-backdrop"
              className="fixed inset-0 z-40 bg-bois/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer-panel"
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-creme shadow-md lg:hidden"
              initial={{ x: shouldReduceMotion ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: shouldReduceMotion ? 0 : "100%" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <span className="font-display text-xl font-bold italic text-rouge">
                  La Case à Madras
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le menu"
                  className="flex h-10 w-10 items-center justify-center text-bois"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <MadrasDivider variant="thin" />

              <ul className="flex flex-1 flex-col gap-2 px-6 py-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-2 font-display text-2xl italic transition-colors",
                        isActive(link.href) ? "text-rouge" : "text-bois hover:text-rouge",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="px-6 pb-8">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <WhatsAppIcon size={18} />
                  Commander par WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
