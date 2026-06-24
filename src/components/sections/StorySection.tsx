import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import SectionReveal from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

interface StorySectionProps {
  label: string;
  h2: string;
  paragraphs: readonly string[];
  /** Caption shown inside the placeholder when no real photo is set yet */
  imageCaption: string;
  /** Optional real photo path (in /public/images); falls back to placeholder */
  image?: string;
  alt?: string;
  cta?: { label: string; href: string };
  /** Place the image on the right instead of the left (desktop) */
  reverse?: boolean;
  /** Tailwind aspect ratio class for the image area */
  imageAspect?: string;
}

/**
 * StorySection, editorial block: image on one side, prose on the other.
 * Stacks vertically on mobile.
 */
export default function StorySection({
  label,
  h2,
  paragraphs,
  imageCaption,
  image,
  alt,
  cta,
  reverse = false,
  imageAspect = "aspect-[4/3]",
}: StorySectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <SectionReveal className={cn(reverse && "lg:order-2")}>
          <div className={cn("relative overflow-hidden rounded-xl shadow-sm", imageAspect)}>
            {image ? (
              <Image
                src={image}
                alt={alt ?? imageCaption}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              // TODO: photo réelle
              <Placeholder label={imageCaption} kind="image" />
            )}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className={cn(reverse && "lg:order-1")}>
          <p className="eyebrow">{label}</p>
          <h2 className="mt-3 text-title text-bois">{h2}</h2>
          <div className="mt-5 space-y-4 text-body text-bois/75">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {cta && (
            <Link
              href={cta.href}
              className="mt-7 inline-flex items-center gap-2 font-ui text-sm font-semibold uppercase tracking-wider text-rouge transition-colors hover:text-safran"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
