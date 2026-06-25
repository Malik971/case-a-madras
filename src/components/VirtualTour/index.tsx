"use client";

import dynamic from "next/dynamic";

// Three.js / WebGL must not run on the server.
const VirtualTour = dynamic(() => import("./VirtualTour"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[280px] w-full items-center justify-center rounded-xl bg-nuit sm:h-[500px]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-rouge border-t-transparent" />
    </div>
  ),
});

export default function VirtualTourDynamic() {
  return <VirtualTour />;
}
