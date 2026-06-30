import type { MouseEvent } from "react";
import { sectionPath, type SectionId } from "@/lib/routes";

/** Legacy path URLs → section ids (used before redirect + scroll handler). */
export const PATH_TO_SECTION: Partial<Record<string, SectionId>> = {
  "/home": "home",
  "/about": "about",
  "/why-me": "about",
  "/services": "services",
  "/projects": "projects",
  "/skills": "skills",
  "/testimonials": "testimonials",
  "/contact": "contact",
};

export function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(sectionId);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function resolveSectionFromLocation(): SectionId | null {
  if (typeof window === "undefined") return null;

  const fromHash = window.location.hash.replace(/^#/, "");
  if (fromHash && document.getElementById(fromHash)) {
    return fromHash as SectionId;
  }

  const fromPath = PATH_TO_SECTION[window.location.pathname];
  return fromPath ?? null;
}

/** Reliable in-page section navigation (navbar, CTAs) without full reload. */
export function sectionNavClick(sectionId: SectionId) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const el = document.getElementById(sectionId);
    if (!el) return;

    event.preventDefault();
    const target = sectionPath(sectionId);
    const current = `${window.location.pathname}${window.location.hash}`;
    if (current !== target) {
      window.history.pushState(null, "", target);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
    scrollToSection(sectionId);
  };
}
