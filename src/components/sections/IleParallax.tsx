"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { home } from "@/data/content";

export default function IleParallax() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { ile } = home;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex h-[80vh] min-h-[480px] items-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute -top-[12%] h-[124%] w-full">
        {/* IMAGE: public/images/paysage/soufriere.webp */}
        {/* REPLACE: photo de la Soufriere ou d'un paysage tropical de Guadeloupe.
            En attendant, une photo locale du village est utilisee avec un voile sombre. */}
        <Image src={ile.image} alt={ile.imageAlt} fill sizes="100vw" className="object-cover" />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-nuit/80 to-nuit/20"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <blockquote className="font-display text-3xl font-bold italic leading-tight text-creme sm:text-4xl lg:text-5xl">
          {ile.quoteLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </blockquote>
        <p className="mt-6 font-ui text-sm uppercase tracking-widest text-safran">
          {ile.attribution}
        </p>
      </div>
    </section>
  );
}
