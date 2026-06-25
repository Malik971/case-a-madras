import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

/**
 * Marquee, an infinite horizontal ticker band. Pure CSS, pauses on hover,
 * and stops entirely under prefers-reduced-motion.
 */
export default function Marquee({ items, className }: MarqueeProps) {
  // Duplicated once so the -50% translate loops seamlessly
  const loop = [...items, ...items];

  return (
    <div
      className={cn("group flex w-full overflow-hidden bg-bois py-4 text-creme", className)}
      aria-hidden="true"
    >
      <ul className="flex w-max shrink-0 animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((item, i) => (
          <li key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-xl italic">{item}</span>
            <span className="text-safran">&bull;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
