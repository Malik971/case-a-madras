"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { navLinks, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl, cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const waUrl = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.commander);

  // Solid white + shadow after 60px of scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open ? "bg-blanc/95 shadow-md backdrop-blur" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl font-bold italic leading-none text-rouge transition-opacity hover:opacity-80"
        >
          La Case à Madras
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-small font-medium transition-colors hover:text-rouge",
                    isActive(link.href) ? "text-rouge" : "text-ink",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsAppIcon size={16} />
            Commander
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col items-center gap-[5px]">
            <motion.span
              className="block h-0.5 w-6 rounded-full bg-ink"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded-full bg-ink"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded-full bg-ink"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-blanc lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-body font-medium transition-colors",
                      isActive(link.href) ? "bg-rouge/10 text-rouge" : "text-ink hover:bg-ink/5",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <WhatsAppIcon size={18} />
                  Commander par WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
