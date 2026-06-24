import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  children: React.ReactNode;
  /** Visual tone of the pill */
  tone?: "rouge" | "safran" | "vert";
  className?: string;
}

const toneStyles: Record<NonNullable<CategoryBadgeProps["tone"]>, string> = {
  rouge: "bg-rouge/10 text-rouge",
  safran: "bg-safran/15 text-safran",
  vert: "bg-vert/10 text-vert",
};

/**
 * CategoryBadge, small product pill (e.g. "sur commande").
 */
export default function CategoryBadge({
  children,
  tone = "safran",
  className,
}: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-ui text-xs font-semibold uppercase tracking-wider",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
