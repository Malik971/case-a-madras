"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
}

/**
 * TiltCard, a 3D tilt-on-hover wrapper. The card follows the cursor with a
 * subtle rotateX/rotateY, lifts up, and casts a shadow that shifts with the
 * tilt, so it really feels like you are "on" that card. Disabled when the
 * user prefers reduced motion. Give it a rounded class so the shadow matches.
 */
export default function TiltCard({ children, className, max = 9 }: TiltCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    setStyle({
      transform: `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-8px) scale(1.03)`,
      boxShadow: `${(-ry * 1.5).toFixed(0)}px ${(Math.abs(rx) + 18).toFixed(0)}px 40px -12px rgba(13, 6, 0, 0.4)`,
    });
  };

  const reset = () => setStyle({});

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        transition: "transform 0.25s ease-out, box-shadow 0.25s ease-out",
        ...style,
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </div>
  );
}
