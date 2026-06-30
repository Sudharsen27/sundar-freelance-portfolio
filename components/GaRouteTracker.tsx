"use client";

import { Suspense, useCallback, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initGA, trackPageView } from "@/lib/analytics";

function getTrackedPath() {
  if (typeof window === "undefined") return "/";
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function GaRouteTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedRef = useRef<string | null>(null);
  const gaInitializedRef = useRef(false);

  const sendPageView = useCallback(() => {
    const path = getTrackedPath();
    if (lastTrackedRef.current === path) return;
    lastTrackedRef.current = path;
    trackPageView(path);
  }, []);

  useEffect(() => {
    if (!gaInitializedRef.current) {
      initGA();
      gaInitializedRef.current = true;
    }
    sendPageView();
  }, [pathname, searchParams, sendPageView]);

  useEffect(() => {
    const onHashChange = () => sendPageView();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [sendPageView]);

  return null;
}

/** Tracks initial page view and subsequent Next.js route + hash changes. */
export default function GaRouteTracker() {
  return (
    <Suspense fallback={null}>
      <GaRouteTrackerInner />
    </Suspense>
  );
}
