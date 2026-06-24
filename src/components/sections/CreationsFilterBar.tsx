"use client";

import { useEffect, useState } from "react";
import { creationsPage } from "@/data/content";
import { cn } from "@/lib/utils";

/**
 * CreationsFilterBar — sticky category tabs with scrollspy.
 * Clicking a tab smooth-scrolls to its section (native anchor + CSS
 * scroll-padding); the active tab is tracked via IntersectionObserver.
 */
export default function CreationsFilterBar() {
  const { tabs } = creationsPage;
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const ids = Array.from(new Set(tabs.map((t) => t.target)));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      if (window.scrollY < 200) setActive("top");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [tabs]);

  return (
    <div className="sticky top-[68px] z-30 -mx-4 border-y border-ink/10 bg-cream/90 px-4 backdrop-blur sm:top-[72px]">
      <div className="mx-auto max-w-6xl">
        <ul className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const isActive = active === tab.target;
            return (
              <li key={tab.label}>
                <a
                  href={`#${tab.target}`}
                  className={cn(
                    "inline-flex whitespace-nowrap rounded-full px-4 py-2 text-small font-medium transition-colors",
                    isActive
                      ? "bg-rouge text-blanc"
                      : "bg-blanc text-muted hover:bg-rouge/10 hover:text-rouge",
                  )}
                >
                  {tab.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
