/** India +91; local mobile 6382519651 → full digits for wa.me (no + or spaces). */
export const WHATSAPP_E164 =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "916382519651";

/**
 * @param {string} [prefilledText] - optional message shown in WhatsApp compose
 */
export function whatsappUrl(prefilledText) {
  const base = `https://wa.me/${WHATSAPP_E164}`;
  if (!prefilledText) return base;
  return `${base}?text=${encodeURIComponent(prefilledText)}`;
}
