"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { home, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { hero } = home;
  const waUrl = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.informations);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12, delayChildren: 0.1 } },
  };
  const item = shouldReduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/*
        TODO: remplacer ce fond par la vraie photo de la boutique.
        Déposez /public/images/boutique-interieur.jpg puis remplacez ce bloc par :
        <Image src="/images/boutique-interieur.jpg" alt="Intérieur de la boutique La Case à Madras" fill priority sizes="100vw" className="object-cover" />
        En attendant, motif madras tissé en CSS (aucune image externe).
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundColor: "#3E2000",
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent 0 22px, rgba(192,57,43,0.30) 22px 26px),
            repeating-linear-gradient(90deg, transparent 0 22px, rgba(212,134,10,0.28) 22px 26px),
            repeating-linear-gradient(0deg, transparent 0 48px, rgba(46,125,50,0.22) 48px 52px),
            repeating-linear-gradient(90deg, transparent 0 48px, rgba(46,125,50,0.22) 48px 52px)
          `,
        }}
      />
      {/* Mahogany overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-bois/40" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-5 py-28 text-center sm:px-8 lg:px-12"
      >
        <motion.p
          variants={item}
          className="font-ui text-label uppercase tracking-widest text-safran"
        >
          {hero.label}
        </motion.p>

        <motion.h1
          variants={item}
          className="mx-auto mt-6 max-w-4xl font-display text-display font-black text-creme"
        >
          {hero.h1}
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-body text-creme/80">
          {hero.body}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href={hero.ctaPrimary.href} className="btn-primary">
            {hero.ctaPrimary.label}
          </Link>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-creme">
            <WhatsAppIcon size={16} />
            {hero.ctaSecondary.label}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
