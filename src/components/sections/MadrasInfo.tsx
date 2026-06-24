import Placeholder from "@/components/ui/Placeholder";
import SectionReveal from "@/components/ui/SectionReveal";
import { madrasPage } from "@/data/content";

/**
 * MadrasInfo, the "Origines" section of the madras page:
 * editorial text on the left, a fabric image (placeholder) on the right.
 */
export default function MadrasInfo() {
  const { origines } = madrasPage;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <SectionReveal>
          <h2 className="text-title text-bois">{origines.h2}</h2>
          <div className="mt-5 space-y-4 text-body text-bois/75">
            {origines.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
            {/* TODO: photo réelle d'un tissu madras */}
            <Placeholder label={origines.imageCaption} kind="image" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
