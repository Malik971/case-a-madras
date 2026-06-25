"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useTexture } from "@react-three/drei";
import { BackSide } from "three";
import { AnimatePresence, motion } from "framer-motion";
import { tour360 } from "@/data/images";

// Inner sphere with the boutique photo mapped on the inside.
// REPLACE: tour360 par une vraie photo equirectangulaire 360 (interieur-360.webp).
function Dome() {
  const texture = useTexture(tour360);
  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
}

function Spinner() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-rouge border-t-transparent" />
      <span className="font-ui text-xs uppercase tracking-wider text-bois/60">Chargement</span>
    </div>
  );
}

export default function VirtualTour() {
  const [interacted, setInteracted] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAutoRotate(!mq.matches);
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={() => setInteracted(true)}
      className="relative h-[280px] w-full overflow-hidden rounded-xl bg-nuit sm:h-[500px]"
    >
      <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
        <Suspense
          fallback={
            <Html center>
              <Spinner />
            </Html>
          }
        >
          <Dome />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={0.3}
          rotateSpeed={-0.5}
        />
      </Canvas>

      {/* Badge */}
      <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-safran/40 bg-nuit/60 px-3 py-1 font-ui text-[11px] font-semibold uppercase tracking-wider text-safran">
        Disponible en vrai 360 bientôt
      </span>

      {/* Instruction overlay, fades on first interaction */}
      <AnimatePresence>
        {!interacted && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center"
          >
            <span className="rounded-full bg-nuit/60 px-4 py-2 font-ui text-xs text-creme/90">
              Faites glisser pour explorer la boutique
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
