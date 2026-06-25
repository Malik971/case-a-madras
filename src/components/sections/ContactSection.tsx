import { Clock, ExternalLink, Mail, MapPin, Package, Phone } from "lucide-react";
import MapEmbed from "@/components/sections/MapEmbed";
import SectionReveal from "@/components/ui/SectionReveal";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { nousTrouver, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl, formatPhoneDisplay } from "@/lib/utils";

export default function ContactSection() {
  const waMain = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.informations);
  const waShipping = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.expedition);

  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-5 lg:gap-12 lg:px-12">
        {/* LEFT, info (3/5) */}
        <SectionReveal className="space-y-8 lg:col-span-3">
          {/* Adresse */}
          <div className="rounded-xl border-l-4 border-rouge bg-lin p-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-rouge" />
              <h2 className="text-heading text-bois">{nousTrouver.adresse.title}</h2>
            </div>
            <div className="mt-3 space-y-1 text-body text-bois/80">
              {nousTrouver.adresse.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          {/* Horaires */}
          <div className="rounded-xl bg-lin p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-vert" />
              <h2 className="text-heading text-bois">{nousTrouver.horaires.title}</h2>
            </div>
            <dl className="mt-4 divide-y divide-bois/10">
              {nousTrouver.horaires.rows.map((row) => (
                <div key={row.day} className="flex items-center justify-between py-2.5">
                  <dt className="text-sm font-semibold text-bois">{row.day}</dt>
                  <dd className="text-sm text-bois/70">{row.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs italic text-bois/60">{nousTrouver.horaires.note}</p>
          </div>

          {/* Contact */}
          <div className="rounded-xl bg-lin p-6">
            <h2 className="text-heading text-bois">{nousTrouver.contact.title}</h2>
            <a
              href={waMain}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-4 w-full"
            >
              <WhatsAppIcon size={18} />
              {nousTrouver.contact.whatsappLabel}
            </a>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={`tel:+${siteConfig.phone}`}
                className="inline-flex items-center gap-2 text-bois transition-colors hover:text-rouge"
              >
                <Phone className="h-4 w-4 shrink-0 text-rouge" />
                {formatPhoneDisplay(siteConfig.phone)}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-bois transition-colors hover:text-rouge"
              >
                <Mail className="h-4 w-4 shrink-0 text-rouge" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Expéditions */}
          <div className="rounded-xl border-l-4 border-rouge bg-voile p-6">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 shrink-0 text-rouge" />
              <h3 className="text-heading text-bois">{nousTrouver.expeditions.title}</h3>
            </div>
            <p className="mt-3 text-body text-bois/75">{nousTrouver.expeditions.text}</p>
            <a
              href={waShipping}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-outline mt-4"
            >
              <WhatsAppIcon size={16} />
              {nousTrouver.expeditions.button}
            </a>
          </div>
        </SectionReveal>

        {/* RIGHT, interactive map (2/5) */}
        <SectionReveal delay={0.1} className="lg:col-span-2">
          <MapEmbed />
          <a
            href={siteConfig.mapsLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 font-ui text-sm font-semibold uppercase tracking-wider text-vert transition-colors hover:text-rouge"
          >
            Ouvrir dans Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
