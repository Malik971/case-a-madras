"use client";

import { useEffect, useState } from "react";
import { creationsPage } from "@/data/content";
import { cn } from "@/lib/utils";

/**
 * CreationsFilterBar, sticky category tabs with scrollspy.
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
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      if (window.scrollY < 220) setActive("top");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [tabs]);

  return (
    <div className="sticky top-[76px] z-30 border-y border-bois/10 bg-creme/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <ul className="no-scrollbar flex gap-2 overflow-x-auto py-3">
          {tabs.map((tab) => {
            const isActive = active === tab.target;
            return (
              <li key={tab.label}>
                <a
                  href={`#${tab.target}`}
                  className={cn(
                    "inline-flex whitespace-nowrap rounded-full px-4 py-2 font-ui text-sm font-medium transition-colors",
                    isActive
                      ? "bg-rouge text-creme"
                      : "bg-lin text-bois hover:bg-safran/20 hover:text-rouge",
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
