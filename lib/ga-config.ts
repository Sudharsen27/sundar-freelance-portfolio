/**
 * GA4 Measurement ID.
 * NEXT_PUBLIC_* is inlined at build time — set it in Vercel and redeploy.
 * Fallback keeps production working if the env var is missing.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-JF71KM5PZJ";

export function isGaDebugEnabled() {
  return process.env.NEXT_PUBLIC_GA_DEBUG === "true";
}
