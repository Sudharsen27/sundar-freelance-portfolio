import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const sourceSvg = join(root, "public", "icon.svg");

async function pngBuffer(size) {
  return sharp(sourceSvg).resize(size, size).png().toBuffer();
}

async function writePng(size, outputPath) {
  await mkdir(dirname(outputPath), { recursive: true });
  await sharp(sourceSvg).resize(size, size).png().toFile(outputPath);
}

async function main() {
  await readFile(sourceSvg);

  const faviconSizes = [16, 32, 48];
  const faviconPngs = await Promise.all(faviconSizes.map((size) => pngBuffer(size)));
  const faviconIco = await toIco(faviconPngs);

  await writeFile(join(root, "app", "favicon.ico"), faviconIco);
  await writePng(180, join(root, "app", "apple-icon.png"));
  await writePng(32, join(root, "public", "icon.png"));
  await writePng(192, join(root, "public", "android-chrome-192x192.png"));
  await writePng(512, join(root, "public", "android-chrome-512x512.png"));

  console.log("Generated app/favicon.ico");
  console.log("Generated app/apple-icon.png");
  console.log("Generated public/icon.png");
  console.log("Generated public/android-chrome-192x192.png");
  console.log("Generated public/android-chrome-512x512.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
