import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Placeholder, the designed stand-in used everywhere a real photo is not yet
 * available. It NEVER loads an external image (no stock photos at all): it renders
 * a warm, madras-styled panel in pure CSS so the site looks intentional.
 *
 * Replace each usage with a real <Image> once the owner provides photos.
 * See /public/images/README for the drop-in convention.
 */

// Subtle madras plaid woven from layered CSS gradients.
const plaidStyle: React.CSSProperties = {
  backgroundColor: "#FAF3E4",
  backgroundImage: `
    repeating-linear-gradient(0deg, transparent 0 14px, rgba(192,57,43,0.10) 14px 16px),
    repeating-linear-gradient(90deg, transparent 0 14px, rgba(212,134,10,0.10) 14px 16px),
    repeating-linear-gradient(0deg, transparent 0 32px, rgba(46,125,50,0.07) 32px 34px),
    repeating-linear-gradient(90deg, transparent 0 32px, rgba(46,125,50,0.07) 32px 34px)
  `,
};

interface PlaceholderProps {
  /** Text shown inside the placeholder (product name or photo description) */
  label: string;
  /** "product" centers the name; "image" shows an icon + caption */
  kind?: "product" | "image";
  className?: string;
}

export default function Placeholder({ label, kind = "product", className }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("flex h-full w-full items-center justify-center p-6", className)}
      style={plaidStyle}
    >
      {kind === "product" ? (
        <div className="text-center">
          <p className="font-display text-xl italic text-rouge">{label}</p>
          <span
            aria-hidden="true"
            className="mx-auto mt-3 block h-1 w-12 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #C0392B 0 33%, #D4860A 33% 66%, #2E7D32 66% 100%)",
            }}
          />
        </div>
      ) : (
        <div className="text-center">
          <ImageIcon className="mx-auto h-8 w-8 text-bois/40" aria-hidden="true" />
          <p className="mt-3 font-ui text-label uppercase text-bois/50">{label}</p>
        </div>
      )}
    </div>
  );
}
