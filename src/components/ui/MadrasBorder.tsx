import { cn } from "@/lib/utils";

interface MadrasBorderProps {
  className?: string;
  /** "divider" (12px section divider) or "stripe" (taller, for hero overlay) */
  variant?: "divider" | "stripe";
}

/**
 * MadrasBorder — the site's signature element.
 * A pure-CSS repeating pattern that evokes the crossed threads of madras fabric.
 * Decorative only, so it is hidden from assistive tech.
 *
 * NOTE: We layer four repeating gradients (red + saffron from the brief, plus
 * green + blue) to get a fuller plaid that reads clearly as madras while
 * keeping the brief's red/saffron values as the dominant lines.
 */
export default function MadrasBorder({ className, variant = "divider" }: MadrasBorderProps) {
  const height = variant === "stripe" ? 20 : 12;

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn("w-full", className)}
      style={{
        height,
        backgroundColor: "rgba(247, 240, 227, 0.4)",
        backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 8px,
            rgba(192, 57, 43, 0.18) 8px,
            rgba(192, 57, 43, 0.18) 10px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 8px,
            rgba(230, 126, 34, 0.18) 8px,
            rgba(230, 126, 34, 0.18) 10px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 18px,
            rgba(30, 107, 60, 0.14) 18px,
            rgba(30, 107, 60, 0.14) 20px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 18px,
            rgba(26, 82, 118, 0.14) 18px,
            rgba(26, 82, 118, 0.14) 20px
          )`,
      }}
    />
  );
}
