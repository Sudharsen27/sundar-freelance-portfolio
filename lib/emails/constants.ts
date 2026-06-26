import { getSiteUrl, PRODUCTION_SITE_URL } from "@/lib/site";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/brand";

export const BRAND = {
  name: BRAND_NAME,
  tagline: "Helping Brands Build Their Digital Presence",
  primary: "#6366F1",
  secondary: "#06B6D4",
  get siteUrl() {
    return getSiteUrl();
  },
  email: CONTACT_EMAIL,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "916382519651",
} as const;

export function getEmailBaseUrl(): string {
  const site = getSiteUrl();
  if (site.includes("localhost") || site.includes("127.0.0.1")) {
    return PRODUCTION_SITE_URL;
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
