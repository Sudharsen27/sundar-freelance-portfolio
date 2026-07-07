export const DEFAULT_LINKEDIN_URL =
  "https://www.linkedin.com/in/sundar-lingam-8407a5221";

export function getLinkedInUrl(): string {
  return process.env.NEXT_PUBLIC_LINKEDIN_URL || DEFAULT_LINKEDIN_URL;
}
