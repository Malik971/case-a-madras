"use client";

import dynamic from "next/dynamic";

// Leaflet needs the browser (window), so load the map client-side only.
const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-lin">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-rouge border-t-transparent" />
    </div>
  ),
});

export default function MapEmbed() {
  return (
    <div className="h-[260px] w-full overflow-hidden rounded-xl shadow-sm sm:h-[420px]">
      <InteractiveMap />
    </div>
  );
}
