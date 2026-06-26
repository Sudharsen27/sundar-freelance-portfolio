import type { SectionId } from "@/lib/routes";

export function scrollToSectionId(sectionId: SectionId | string): void {
  if (sectionId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(sectionId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
