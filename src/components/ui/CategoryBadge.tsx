import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  children: React.ReactNode;
  /** Visual tone of the pill */
  tone?: "rouge" | "safran" | "vert" | "azur" | "muted";
  className?: string;
}

const toneStyles: Record<NonNullable<CategoryBadgeProps["tone"]>, string> = {
  rouge: "bg-rouge/10 text-rouge",
  safran: "bg-safran/15 text-[#b45f12]",
  vert: "bg-vert/10 text-vert",
  azur: "bg-azur/10 text-azur",
  muted: "bg-ink/5 text-muted",
};

/**
 * CategoryBadge — small product/category pill (e.g. "sur commande").
 */
export default function CategoryBadge({ children, tone = "rouge", className }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
