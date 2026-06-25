/**
 * Small utility helpers shared across the app.
 * Kept dependency-free on purpose (no clsx / tailwind-merge needed for this site).
 */

type ClassValue = string | number | null | false | undefined;

/**
 * cn(), join class names into a single string conditionally.
 * Usage: cn("base", isActive && "active", undefined) => "base active"
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Build a wa.me deep link with a pre-filled, URL-encoded message.
 * @param phone International phone number, digits only (e.g. "590690000000")
 * @param message Optional pre-filled message
 */
export function buildWhatsAppUrl(phone: string, message?: string): string {
  const sanitized = phone.replace(/\D/g, "");
  const base = `https://wa.me/${sanitized}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Format an international phone string for human display.
 * Defaults to French/Guadeloupe presentation: "+590 690 00 00 00".
 * NOTE: Falls back to a "+<digits>" rendering for non-FR numbers.
 */
export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  // French overseas (Guadeloupe) numbers: 590 + 9 digits
  if (digits.startsWith("590") && digits.length === 12) {
    const rest = digits.slice(3); // 9 digits
    return `+590 ${rest.slice(0, 3)} ${rest.slice(3, 5)} ${rest.slice(5, 7)} ${rest.slice(7, 9)}`;
  }
  return `+${digits}`;
}

/**
 * Tiny, valid base64 placeholder used as blurDataURL on non-priority images.
 * (1x1 transparent PNG, so the blur-up fades from the warm container colour.)
 */
export const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
