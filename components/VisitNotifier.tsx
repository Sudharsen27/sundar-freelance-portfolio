"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const VISITOR_ID_KEY = "portfolio_visitor_id_v1";

/** Dedupe rapid double-fires (e.g. React Strict Mode in dev). */
let lastNotify: { path: string; at: number } | null = null;

function getOrCreateVisitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_ID_KEY);
    if (!id) {
      id =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `v-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
      localStorage.setItem(VISITOR_ID_KEY, id);
    }
    return id;
  } catch {
    return "unknown";
  }
}

function categorizeTraffic(referrer: string, siteOrigin: string): string {
  if (!referrer) return "Direct (no referrer)";
  let url: URL;
  try {
    url = new URL(referrer);
  } catch {
    return "Direct / unknown";
  }
  if (url.origin === siteOrigin) return "Internal (your site)";
  const h = url.hostname.toLowerCase();
  if (h.includes("google.") || h === "google.com") return "Search (Google)";
  if (h.includes("bing.com")) return "Search (Bing)";
  if (h.includes("duckduckgo.")) return "Search (DuckDuckGo)";
  if (h.includes("linkedin.")) return "Social (LinkedIn)";
  if (h.includes("twitter.") || h === "x.com" || h.includes("t.co"))
    return "Social (X / Twitter)";
  if (h.includes("facebook.") || h.includes("fb.com"))
    return "Social (Facebook)";
  if (h.includes("instagram.")) return "Social (Instagram)";
  if (h.includes("fiverr.")) return "Fiverr";
  if (h.includes("github.")) return "GitHub";
  if (h.includes("youtube.") || h.includes("youtu.be")) return "YouTube";
  return `Referral (${h})`;
}

function categorizeDevice(
  ua: string,
  width: number,
  maxTouchPoints: number
): string {
  const u = ua.toLowerCase();
  const isIpad =
    u.includes("ipad") ||
    (u.includes("macintosh") && maxTouchPoints > 1) /* iPadOS 13+ */;
  if (isIpad) return "Tablet";
  if (u.includes("android") && !u.includes("mobile")) return "Tablet";
  if (
    /iphone|ipod|android.*mobile|webos|blackberry|iemobile|opera mini/i.test(
      u
    )
  )
    return "Mobile";
  if (width > 0 && width < 768) return "Mobile (narrow screen)";
  return "Desktop / laptop";
}

function shouldSendForPath(pathname: string): boolean {
  const now = Date.now();
  if (
    lastNotify &&
    lastNotify.path === pathname &&
    now - lastNotify.at < 2000
  ) {
    return false;
  }
  lastNotify = { path: pathname, at: now };
  return true;
}

export default function VisitNotifier() {
  const pathname = usePathname() || "/";
  const enabledRef = useRef(
    process.env.NEXT_PUBLIC_ENABLE_VISIT_NOTIFICATIONS === "true"
  );

  useEffect(() => {
    if (!enabledRef.current) return;
    if (typeof window === "undefined") return;
    if (!shouldSendForPath(pathname)) return;

    const siteOrigin = window.location.origin;
    const ref = document.referrer || "";
    const ua = navigator.userAgent || "";
    const w = typeof screen !== "undefined" ? screen.width : 0;
    const touch =
      typeof navigator.maxTouchPoints === "number"
        ? navigator.maxTouchPoints
        : 0;

    const payload = {
      page: `${siteOrigin}${pathname}`,
      pathname,
      referrer: ref,
      language: navigator.language || "",
      userAgent: ua,
      screen: w ? `${w}x${screen.height}` : "",
      visitorId: getOrCreateVisitorId(),
      trafficCategory: categorizeTraffic(ref, siteOrigin),
      deviceCategory: categorizeDevice(ua, w, touch),
      timezone:
        typeof Intl !== "undefined"
          ? Intl.DateTimeFormat().resolvedOptions().timeZone || ""
          : "",
      company: "",
    };

    fetch("/api/notify-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {
      /* silent */
    });
  }, [pathname]);

  return null;
}
