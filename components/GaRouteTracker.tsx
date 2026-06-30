"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { initGA, trackPageView } from "@/lib/analytics";

function getTrackedPath() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

/**
 * Initializes GA once on mount and tracks page views for:
 * - initial load
 * - Next.js pathname changes
 * - in-page hash navigation (/#about, /#contact, etc.)
 */
export default function GaRouteTracker() {
  const pathname = usePathname();
  const lastTrackedRef = useRef<string | null>(null);

  useEffect(() => {
    initGA();

    const sendPageView = () => {
      const path = getTrackedPath();
      if (lastTrackedRef.current === path) return;
      lastTrackedRef.current = path;
      trackPageView(path);
    };

    sendPageView();

    window.addEventListener("hashchange", sendPageView);
    return () => window.removeEventListener("hashchange", sendPageView);
  }, [pathname]);

  return null;
}
