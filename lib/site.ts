/** Canonical production origin — used when NEXT_PUBLIC_SITE_URL is unset. */
export const PRODUCTION_SITE_URL = "https://www.sundardigital.in";

/** Resolved site origin (no trailing slash). */
export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_SITE_URL).replace(
    /\/$/,
    ""
  );
}
