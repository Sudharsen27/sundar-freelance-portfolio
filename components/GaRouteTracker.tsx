"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

function getTrackedPath() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

/**
 * Tracks GA4 page_view on:
 * - first load
 * - App Router pathname changes
 * - hash navigation (/#services, etc.)
 *
 * Script load/config happens once in GoogleAnalytics (next/script).
 */
export default function GaRouteTracker() {
  const pathname = usePathname();
  const lastTrackedRef = useRef<string | null>(null);

  useEffect(() => {
    const sendPageView = () => {
      const path = getTrackedPath();
      if (lastTrackedRef.current === path) return;
      lastTrackedRef.current = path;
      void trackPageView(path);
    };

    sendPageView();

    window.addEventListener("hashchange", sendPageView);
    return () => window.removeEventListener("hashchange", sendPageView);
  }, [pathname]);

  return null;
}
