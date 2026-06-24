import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import MadrasBorder from "@/components/ui/MadrasBorder";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { footer, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl, formatPhoneDisplay } from "@/lib/utils";

export default function Footer() {
  const waUrl = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.general);

  return (
    <footer className="bg-blanc">
      <MadrasBorder />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Col 1 — Brand */}
          <div>
            <p className="font-display text-2xl font-bold italic text-rouge">La Case à Madras</p>
            <div className="mt-3 space-y-1 text-small text-muted">
              {footer.brandLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h2 className="text-heading text-ink">{footer.navTitle}</h2>
            <ul className="mt-4 space-y-2">
              {footer.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-muted transition-colors hover:text-rouge"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h2 className="text-heading text-ink">{footer.contactTitle}</h2>
            <ul className="mt-4 space-y-3 text-small text-muted">
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-vert"
                >
                  <WhatsAppIcon size={16} className="shrink-0 text-vert" />
                  WhatsApp · {formatPhoneDisplay(siteConfig.phone)}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-rouge"
                >
                  <Mail size={16} className="shrink-0 text-rouge" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-safran" />
                <span>{siteConfig.address.oneLine}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{footer.copyright}</p>
          <p>
            Site réalisé par {/* TODO: remplacer par votre nom et votre lien (siteConfig.credit) */}
            <a
              href={siteConfig.credit.url}
              className="font-medium text-ink transition-colors hover:text-rouge"
            >
              {siteConfig.credit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
