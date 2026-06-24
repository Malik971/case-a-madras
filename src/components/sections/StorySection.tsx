import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

interface StorySectionProps {
  image: string;
  imageAlt: string;
  /** TODO note describing the real photo needed (rendered as an HTML comment hint) */
  h2: string;
  paragraphs: readonly string[];
  /** Place the image on the right instead of the left (desktop) */
  reverse?: boolean;
}

/**
 * StorySection — portrait/editorial block: image on one side, prose on the other.
 * Stacks vertically on mobile.
 */
export default function StorySection({
  image,
  imageAlt,
  h2,
  paragraphs,
  reverse = false,
}: StorySectionProps) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <SectionReveal className={cn(reverse && "lg:order-2")}>
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            {/* TODO: replace with real photo — la créatrice à son atelier de couture */}
            <Image
              src={image}
              alt={imageAlt}
              width={900}
              height={1100}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className={cn(reverse && "lg:order-1")}>
          <h2 className="text-title text-ink">{h2}</h2>
          <div className="mt-5 space-y-4 text-body text-muted">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
