import { Clock, ExternalLink, Mail, MapPin, Package, Phone } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { nousTrouver, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl, formatPhoneDisplay } from "@/lib/utils";

export default function ContactSection() {
  const waMain = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.commander);
  const waShipping = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.expedition);

  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8">
        {/* LEFT — info (3/5) */}
        <SectionReveal className="space-y-8 lg:col-span-3">
          {/* Block A — Adresse */}
          <div className="rounded-2xl bg-blanc p-6 shadow-card">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-rouge" />
              <h2 className="text-heading text-ink">{nousTrouver.adresse.title}</h2>
            </div>
            <p className="mt-3 text-body font-medium text-ink">{nousTrouver.adresse.line}</p>
            <p className="mt-2 text-small text-muted">{nousTrouver.adresse.note}</p>
          </div>

          {/* Block B — Horaires */}
          <div className="rounded-2xl bg-blanc p-6 shadow-card">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-azur" />
              <h2 className="text-heading text-ink">{nousTrouver.horaires.title}</h2>
            </div>
            <dl className="mt-4 divide-y divide-ink/10">
              {nousTrouver.horaires.rows.map((row) => (
                <div key={row.day} className="flex items-center justify-between py-2.5">
                  <dt className="text-small font-medium text-ink">{row.day}</dt>
                  <dd className="text-small text-muted">{row.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs italic text-muted">{nousTrouver.horaires.note}</p>
          </div>

          {/* Block C — Contact */}
          <div className="rounded-2xl bg-blanc p-6 shadow-card">
            <h2 className="text-heading text-ink">{nousTrouver.contact.title}</h2>
            <a
              href={waMain}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-4 w-full sm:w-auto"
            >
              <WhatsAppIcon size={18} />
              {nousTrouver.contact.whatsappLabel}
            </a>
            <div className="mt-4 flex flex-col gap-3 text-small">
              <a
                href={`tel:+${siteConfig.phone}`}
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-rouge"
              >
                <Phone className="h-4 w-4 shrink-0 text-rouge" />
                {formatPhoneDisplay(siteConfig.phone)}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-rouge"
              >
                <Mail className="h-4 w-4 shrink-0 text-rouge" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Block D — Commander à distance */}
          <div className="rounded-2xl border-l-4 border-rouge bg-cream p-6">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 shrink-0 text-rouge" />
              <h3 className="text-heading text-ink">{nousTrouver.distance.title}</h3>
            </div>
            <p className="mt-3 text-small text-muted">{nousTrouver.distance.text}</p>
            <a
              href={waShipping}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-outline mt-4"
            >
              <WhatsAppIcon size={16} />
              {nousTrouver.distance.button}
            </a>
          </div>
        </SectionReveal>

        {/* RIGHT — map (2/5) */}
        <SectionReveal delay={0.1} className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <iframe
              src={siteConfig.mapsEmbedUrl}
              title="Carte — La Case à Madras, Sainte-Anne"
              width="100%"
              height={420}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>
          <a
            href={siteConfig.mapsLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-small font-medium text-azur transition-colors hover:text-rouge"
          >
            Ouvrir dans Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
