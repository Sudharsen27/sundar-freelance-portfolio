import ReactGA from "react-ga4";

const MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-6918EZ36C0";

let initialized = false;

/**
 * Initialize GA4 once. Safe to call from the client only (no-op on server).
 */
export function initGA() {
  if (typeof window === "undefined") return;
  if (initialized) return;
  if (!MEASUREMENT_ID) return;

  ReactGA.initialize(MEASUREMENT_ID, {
    gaOptions: {
      // Manual page views via trackPageView() to prevent duplicates.
      send_page_view: false,
    },
  });

  initialized = true;
}

/**
 * @param {string} [path] - Page path (defaults to current location).
 */
export function trackPageView(path) {
  if (typeof window === "undefined") return;
  if (!initialized) return;

  const page =
    path ||
    `${window.location.pathname}${window.location.search}${window.location.hash}`;

  ReactGA.send({ hitType: "pageview", page });
}

/**
 * @param {string} category
 * @param {string} action
 * @param {string} [label]
 */
export function trackEvent(category, action, label) {
  if (typeof window === "undefined") return;
  if (!initialized) return;

  ReactGA.event({
    category,
    action,
    label,
  });
}
