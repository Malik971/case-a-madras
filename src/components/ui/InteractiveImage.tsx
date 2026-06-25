"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import Placeholder from "@/components/ui/Placeholder";
import { cn, BLUR_DATA_URL } from "@/lib/utils";

interface InteractiveImageProps {
  /** Gallery of local image paths. Empty renders a designed placeholder. */
  images: readonly string[];
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Placeholder style when no photo is available */
  placeholderKind?: "product" | "image";
}

/**
 * InteractiveImage, a "living" image.
 * - Only the first photo loads up front (perf). The rest of the gallery is
 *   mounted lazily on first hover/tap, then cross-fades.
 * - A soft "spotlight" sheen sweeps in on hover for depth.
 * Fills its nearest positioned ancestor (use a relative parent with an aspect
 * ratio). Respects prefers-reduced-motion.
 */
export default function InteractiveImage({
  images,
  alt,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  className,
  placeholderKind = "product",
}: InteractiveImageProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [activated, setActivated] = useState(false); // gallery mounted after first interaction
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const multiple = images.length > 1;

  useEffect(() => {
    if (!multiple || reduce || !hovering) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 1200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [hovering, multiple, reduce, images.length]);

  if (images.length === 0) {
    return <Placeholder label={alt} kind={placeholderKind} />;
  }

  const activate = () => {
    setHovering(true);
    setActivated(true);
  };

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={activate}
      onMouseLeave={() => {
        setHovering(false);
        setIndex(0);
      }}
      onClick={() => {
        if (!activated) setActivated(true);
        if (multiple) setIndex((i) => (i + 1) % images.length);
      }}
    >
      {images.map((src, i) => {
        // Lazy: only the first image is mounted until the user interacts
        if (i > 0 && !activated) return null;
        return (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? alt : ""}
            fill
            sizes={sizes}
            priority={priority && i === 0}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className={cn(
              "object-cover transition-opacity duration-700 ease-out",
              i === index ? "opacity-100" : "opacity-0",
              className,
            )}
          />
        );
      })}

      {/* Spotlight sheen on hover */}
      {!reduce && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-opacity duration-500",
            hovering ? "opacity-100" : "opacity-0",
          )}
        />
      )}

      {/* Dots indicator when there are several photos */}
      {multiple && (
        <div className="pointer-events-none absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((src, i) => (
            <span
              key={src}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                i === index ? "bg-creme" : "bg-creme/40",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
