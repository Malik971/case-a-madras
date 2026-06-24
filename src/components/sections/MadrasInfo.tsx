import SectionReveal from "@/components/ui/SectionReveal";
import { madrasPage } from "@/data/content";

/**
 * MadrasInfo — "Origines" section of the madras page: editorial text on one
 * side, a set of decorative madras color swatches on the other.
 */
export default function MadrasInfo() {
  const { origines, swatches } = madrasPage;

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <SectionReveal>
          <h2 className="text-title text-ink">{origines.h2}</h2>
          <div className="mt-5 space-y-4 text-body text-muted">
            {origines.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {swatches.map((swatch) => (
              <li key={swatch.name} className="overflow-hidden rounded-2xl bg-blanc shadow-card">
                <div
                  className="h-20 w-full"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${swatch.colors[0]} 0 12px, ${swatch.colors[1]} 12px 24px)`,
                  }}
                  aria-hidden="true"
                />
                <div className="px-3 py-3">
                  <p className="text-small font-semibold text-ink">{swatch.name}</p>
                  <p className="text-xs italic text-muted">{swatch.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
