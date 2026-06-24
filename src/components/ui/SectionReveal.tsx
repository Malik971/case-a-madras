"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface SectionRevealProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  /** Delay before the reveal starts (seconds) */
  delay?: number;
  className?: string;
}

/**
 * SectionReveal — Framer Motion wrapper that fades + lifts content into view
 * once, when it enters the viewport. Respects prefers-reduced-motion.
 */
export default function SectionReveal({
  children,
  delay = 0,
  className,
  ...rest
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div className={className} {...rest}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
