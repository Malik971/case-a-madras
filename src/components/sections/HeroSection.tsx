"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { home, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { hero } = home;
  const waUrl = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.informations);

  // Subtle parallax on the background as the hero scrolls away
  const { scrollYProgress: heroProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : 130]);

  // Page-wide scroll progress bar
  const { scrollYProgress } = useScroll();

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-rouge"
        aria-hidden="true"
      />

      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute -top-[8%] h-[116%] w-full">
        {/* IMAGE: public/images/case_a_madras/village_artisanal.jpg */}
        {/* REPLACE: photo de l'exterieur de la boutique avec l'enseigne */}
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-nuit/80 via-nuit/40 to-transparent"
      />

      {/* Content, bottom-left */}
      <div className="absolute inset-0 flex items-end">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24"
        >
          <p className="font-ui text-sm font-semibold uppercase tracking-widest text-safran">
            {hero.label}
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[0.95] text-creme sm:text-7xl lg:text-8xl">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="mt-1 block italic text-safran">{hero.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-md font-sans text-base text-creme/80 sm:text-lg">{hero.body}</p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href={hero.ctaPrimary.href}
              className="inline-flex w-full items-center justify-center rounded-xl bg-rouge px-6 py-3.5 font-ui text-button uppercase text-creme transition-colors hover:bg-safran sm:w-auto"
            >
              {hero.ctaPrimary.label}
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-creme px-6 py-3.5 font-ui text-button uppercase text-creme transition-colors hover:bg-creme/10 sm:w-auto"
            >
              <WhatsAppIcon size={16} />
              {hero.ctaSecondary.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
