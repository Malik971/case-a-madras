"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/data/content";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { hero } = home;

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12, delayChildren: 0.1 },
    },
  };
  const item = shouldReduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <section className="relative flex min-h-[100svh] items-center bg-cream pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8">
        {/* Text — 60% (3 of 5 cols) */}
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-3">
          <motion.p
            variants={item}
            className="text-small font-medium uppercase tracking-[0.18em] text-rouge"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-display font-bold italic text-ink"
          >
            {hero.titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-body text-muted">
            {hero.body}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link href={hero.ctaPrimary.href} className="btn-primary">
              {hero.ctaPrimary.label}
            </Link>
            <Link href={hero.ctaSecondary.href} className="btn-secondary">
              {hero.ctaSecondary.label}
            </Link>
          </motion.div>
        </motion.div>

        {/* Image — 40% (2 of 5 cols) */}
        <motion.div variants={item} initial="hidden" animate="show" className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            {/* TODO: replace with real photo — étoffe madras et créations de la boutique en gros plan */}
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              width={900}
              height={1100}
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-auto w-full object-cover"
            />
            {/* Madras stripe overlay at the bottom of the hero image */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-5"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, rgba(192,57,43,0.85) 0 10px, rgba(230,126,34,0.85) 10px 20px, rgba(30,107,60,0.85) 20px 30px, rgba(26,82,118,0.85) 30px 40px)`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
