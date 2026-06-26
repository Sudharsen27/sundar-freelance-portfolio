export const SECTION_PATHS = {
  home: "/",
  about: "/about",
  services: "/services",
  projects: "/projects",
  skills: "/skills",
  testimonials: "/testimonials",
  contact: "/contact",
} as const;

export type SectionId = keyof typeof SECTION_PATHS;

const PATH_TO_SECTION: Record<string, SectionId> = {
  "/": "home",
  "/home": "home",
  "/about": "about",
  "/why-me": "about",
  "/services": "services",
  "/projects": "projects",
  "/skills": "skills",
  "/testimonials": "testimonials",
  "/contact": "contact",
};

export function sectionPath(sectionId: string): string {
  return SECTION_PATHS[sectionId as SectionId] ?? "/";
}

export function pathToSectionId(pathname: string): SectionId | null {
  return PATH_TO_SECTION[pathname] ?? null;
}
