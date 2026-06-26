import { generateOgImage, OG_ALT_TEXT, OG_SIZE } from "@/lib/generate-og-image";

export const alt = OG_ALT_TEXT;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage();
}
