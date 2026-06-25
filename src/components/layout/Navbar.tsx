"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import CartIconButton from "@/components/cart/CartIconButton";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { navLinks, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl, cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const waUrl = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.commander);
  // Pages with a dark hero behind the navbar (light text needed at the top)
  const darkHero = pathname === "/" || pathname === "/histoire";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const textClass = scrolled && !open ? "text-bois" : darkHero || open ? "text-creme" : "text-bois";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled && !open ? "bg-creme/95 shadow-md backdrop-blur" : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-base font-bold italic leading-none text-rouge transition-opacity hover:opacity-80 sm:text-2xl"
          >
            La Case à Madras
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-ui text-sm font-medium transition-colors hover:text-rouge",
                    isActive(link.href) ? "text-rouge" : textClass,
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-1 sm:gap-2">
            <CartIconButton className={textClass} />
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-rouge px-5 py-2.5 font-ui text-button uppercase text-creme transition-colors hover:bg-safran lg:inline-flex"
            >
              Commander
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              className={cn("flex h-11 w-11 items-center justify-center lg:hidden", textClass)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen overlay menu (mobile) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] flex flex-col bg-nuit/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-display text-base font-bold italic text-creme">
                La Case à Madras
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="flex h-11 w-11 items-center justify-center text-creme"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.1 } },
              }}
              className="flex flex-1 flex-col items-center justify-center gap-6"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-display text-3xl italic transition-colors",
                      isActive(link.href) ? "text-safran" : "text-creme hover:text-safran",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Socials */}
            <div className="flex items-center justify-center gap-4 pb-10">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-vert text-creme"
              >
                <WhatsAppIcon size={22} />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-creme/30 text-creme"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
