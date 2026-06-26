export const SECTION_PATHS = {
  home: "/#home",
  about: "/#about",
  services: "/#services",
  projects: "/#projects",
  skills: "/#skills",
  testimonials: "/#testimonials",
  contact: "/#contact",
} as const;

export type SectionId = keyof typeof SECTION_PATHS;

export function sectionPath(sectionId: string): string {
  return SECTION_PATHS[sectionId as SectionId] ?? "/#home";
}

export function hashToSectionId(hash: string): SectionId | null {
  const id = hash.replace(/^#/, "");
  return id in SECTION_PATHS ? (id as SectionId) : null;
}
