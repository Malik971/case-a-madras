"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { BLUR_DATA_URL } from "@/lib/utils";

interface VideoSectionProps {
  /** Future real video URL (mp4 or embed). When absent, shows the poster placeholder. */
  src?: string;
  poster: string;
  posterAlt: string;
  title: string;
  note: string;
}

/**
 * VideoSection, ready for a real video. For now it shows the boutique photo
 * with a play button. When "src" is provided later, it plays the video.
 */
export default function VideoSection({ src, poster, posterAlt, title, note }: VideoSectionProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-nuit">
        {src && playing ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video src={src} controls autoPlay className="h-full w-full object-cover" />
        ) : (
          <>
            <Image
              src={poster}
              alt={posterAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-nuit/40" />
            <button
              type="button"
              onClick={() => src && setPlaying(true)}
              aria-label={src ? "Lire la vidéo" : "Vidéo bientôt disponible"}
              className="group absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-rouge/80 text-creme backdrop-blur transition-transform duration-200 group-hover:scale-110">
                <Play className="ml-1 h-8 w-8" fill="currentColor" />
              </span>
            </button>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nuit/80 to-transparent p-5 text-center font-ui text-sm text-creme">
              {title}
            </figcaption>
          </>
        )}
      </div>
      <p className="mt-3 text-center font-ui text-xs uppercase tracking-wider text-creme/60">
        {note}
      </p>
    </figure>
  );
}
