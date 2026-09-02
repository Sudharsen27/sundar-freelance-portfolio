export const CONSENT_COOKIE = "sundar_cookie_consent_v1";

export type CookieConsent = {
  analytics: boolean;
};

const defaultConsent: CookieConsent = { analytics: false };

export function readCookieConsent(): CookieConsent | null {
  if (typeof document === "undefined") return null;

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`));
  if (!cookie) return null;

  try {
    const parsed = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
    if (typeof parsed.analytics !== "boolean") return null;
    return { analytics: parsed.analytics };
  } catch {
    return null;
  }
}

export function writeCookieConsent(consent: CookieConsent) {
  const value = encodeURIComponent(JSON.stringify(consent));
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=31536000; Path=/; SameSite=Lax`;
}

export { defaultConsent };