import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import MadrasDivider from "@/components/ui/MadrasDivider";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { footer, siteConfig, whatsappMessages } from "@/data/content";
import { buildWhatsAppUrl, formatPhoneDisplay } from "@/lib/utils";

export default function Footer() {
  const waUrl = buildWhatsAppUrl(siteConfig.phone, whatsappMessages.general);

  return (
    <footer className="bg-bois text-creme">
      <MadrasDivider />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">
          {/* Col 1, Brand */}
          <div>
            <p className="font-display text-2xl font-bold italic text-creme">La Case à Madras</p>
            <div className="mt-3 space-y-1 text-sm text-creme/70">
              {footer.brandLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          {/* Col 2, Navigation */}
          <div className="border-t border-creme/10 pt-8 sm:border-t-0 sm:pt-0">
            {/* NOTE: titres en safran (et non rouge) pour le contraste sur le fond bois sombre. */}
            <h2 className="font-ui text-label uppercase text-safran">{footer.navTitle}</h2>
            <ul className="mt-3">
              {footer.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-2 text-sm text-creme/80 transition-colors hover:text-creme"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3, Contact */}
          <div className="border-t border-creme/10 pt-8 sm:border-t-0 sm:pt-0">
            <h2 className="font-ui text-label uppercase text-safran">{footer.contactTitle}</h2>
            <ul className="mt-3 space-y-1 text-sm text-creme/80">
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2 transition-colors hover:text-creme sm:justify-start"
                >
                  <WhatsAppIcon size={16} className="shrink-0 text-vert" />
                  WhatsApp, {formatPhoneDisplay(siteConfig.phone)}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center justify-center gap-2 py-2 transition-colors hover:text-creme sm:justify-start"
                >
                  <Mail size={16} className="shrink-0 text-safran" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start justify-center gap-2 py-2 sm:justify-start">
                <MapPin size={16} className="mt-0.5 shrink-0 text-safran" />
                <span>{siteConfig.address.oneLine}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-creme/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-center text-xs text-creme/60 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left lg:px-12">
          <p>{footer.copyright}</p>
          <p>
            {/* TODO: remplacer par votre nom et votre lien (siteConfig.credit) */}
            Site réalisé par{" "}
            <a
              href={siteConfig.credit.url}
              className="font-medium text-creme transition-colors hover:text-safran"
            >
              {siteConfig.credit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
