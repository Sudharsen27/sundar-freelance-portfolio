import ReactGA from "react-ga4";

/** Prefer env; hardcoded fallback ensures GA works if Vercel env is missing. */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-M1JWMJW2KG";

/** Temporary: always log until GA is verified in production Realtime. */
function log(...args) {
  console.log("[GA]", ...args);
}

/**
 * Initialize GA4 once. Safe on server (no-op). Uses react-ga4 singleton state
 * instead of a module flag so duplicate bundle chunks cannot desync init.
 */
export function initGA() {
  if (typeof window === "undefined") return false;
  if (ReactGA.isInitialized) {
    log("initGA skipped (already initialized)");
    return true;
  }
  if (!GA_MEASUREMENT_ID) {
    log("initGA skipped (missing measurement ID)");
    return false;
  }

  log("initGA running", GA_MEASUREMENT_ID);

  ReactGA.initialize(GA_MEASUREMENT_ID, {
    gtagOptions: {
      // Manual page_view events only — avoids duplicate hits with trackPageView().
      send_page_view: false,
    },
  });

  log("ReactGA.initialize complete", { isInitialized: ReactGA.isInitialized });
  return ReactGA.isInitialized;
}

/**
 * @param {string} [path] - Page path (defaults to current location).
 */
export function trackPageView(path) {
  if (typeof window === "undefined") return;

  if (!ReactGA.isInitialized && !initGA()) {
    log("trackPageView skipped (GA not initialized)");
    return;
  }

  const pagePath =
    path ||
    `${window.location.pathname}${window.location.search}${window.location.hash}`;

  const payload = {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  };

  log("trackPageView", payload);
  ReactGA.gtag("event", "page_view", payload);
}

/**
 * @param {string} category
 * @param {string} action
 * @param {string} [label]
 */
export function trackEvent(category, action, label) {
  if (typeof window === "undefined") return;

  if (!ReactGA.isInitialized && !initGA()) {
    log("trackEvent skipped (GA not initialized)");
    return;
  }

  log("trackEvent", { category, action, label });
  ReactGA.event({ category, action, label });
}
