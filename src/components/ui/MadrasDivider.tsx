import { cn } from "@/lib/utils";

interface MadrasDividerProps {
  className?: string;
  /** "full" = 16px section separator, "thin" = 6px (nav border / sub-sections) */
  variant?: "full" | "thin";
}

/**
 * MadrasDivider, the site's signature element.
 * A pure-CSS horizontal band that simulates the crossing threads of madras.
 * Decorative only, so it is hidden from assistive tech.
 */
export default function MadrasDivider({ className, variant = "full" }: MadrasDividerProps) {
  const height = variant === "thin" ? 6 : 16;

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn("w-full", className)}
      style={{
        height,
        background: `repeating-linear-gradient(
          90deg,
          #C0392B 0px, #C0392B 4px,
          #D4860A 4px, #D4860A 8px,
          #2E7D32 8px, #2E7D32 12px,
          #D4860A 12px, #D4860A 16px,
          #C0392B 16px, #C0392B 20px,
          transparent 20px, transparent 28px
        )`,
      }}
    />
  );
}
