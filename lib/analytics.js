import { GA_MEASUREMENT_ID, isGaDebugEnabled } from "@/lib/ga-config";

export { GA_MEASUREMENT_ID };

function log(...args) {
  if (isGaDebugEnabled() || process.env.NODE_ENV === "development") {
    console.log("[GA]", ...args);
  }
}

function getGtag() {
  if (typeof window === "undefined") return null;
  return typeof window.gtag === "function" ? window.gtag : null;
}

/**
 * Wait briefly for next/script to define window.gtag (afterInteractive).
 */
function whenGtagReady(timeoutMs = 4000) {
  return new Promise((resolve) => {
    const existing = getGtag();
    if (existing) {
      resolve(existing);
      return;
    }

    const started = Date.now();
    const timer = window.setInterval(() => {
      const gtag = getGtag();
      if (gtag) {
        window.clearInterval(timer);
        resolve(gtag);
        return;
      }
      if (Date.now() - started >= timeoutMs) {
        window.clearInterval(timer);
        log("gtag not ready within timeout");
        resolve(null);
      }
    }, 50);
  });
}

/**
 * Send a GA4 page_view. Safe to call from client components only.
 * @param {string} [path]
 */
export async function trackPageView(path) {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID) {
    log("trackPageView skipped (missing measurement ID)");
    return;
  }

  const gtag = await whenGtagReady();
  if (!gtag) {
    log("trackPageView skipped (gtag missing — script blocked or failed)");
    return;
  }

  const pagePath =
    path ||
    `${window.location.pathname}${window.location.search}${window.location.hash}`;

  const payload = {
    send_to: GA_MEASUREMENT_ID,
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  };

  log("trackPageView", payload);
  gtag("event", "page_view", payload);
}

/**
 * @param {string} category
 * @param {string} action
 * @param {string} [label]
 */
export async function trackEvent(category, action, label) {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID) return;

  const gtag = await whenGtagReady();
  if (!gtag) return;

  log("trackEvent", { category, action, label });
  gtag("event", action, {
    send_to: GA_MEASUREMENT_ID,
    event_category: category,
    event_label: label,
  });
}
