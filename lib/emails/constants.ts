export const BRAND = {
  name: "Sundar Digital",
  tagline: "Helping Brands Build Their Digital Presence",
  primary: "#6366F1",
  secondary: "#06B6D4",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sundardigital.in",
  email: "hello.sundardigital@gmail.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "916382519651",
} as const;

export function getEmailBaseUrl(): string {
  const site = BRAND.siteUrl.replace(/\/$/, "");
  if (site.includes("localhost") || site.includes("127.0.0.1")) {
    return "https://www.sundardigital.in";
  }
  return site;
}

export function getLogoUrl(): string {
  return `${getEmailBaseUrl()}/brand-logo.svg`;
}

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${BRAND.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
