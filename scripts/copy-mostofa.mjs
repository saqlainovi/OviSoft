import fs from "node:fs";
import path from "node:path";

const fallbackSrc = "C:/Users/Admin/Desktop/it farm/499705686_2766277587094332_2943943908704775467_n.jpg";
const src = process.env.MOSTOFA_IMAGE_SRC || fallbackSrc;

const projectRoot = path.resolve(process.cwd());
const publicDir = path.join(projectRoot, "public");
const dest = path.join(publicDir, "mostofa.jpg");

try {
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  if (!fs.existsSync(src)) {
    console.warn(`[copy-mostofa] Source image not found: ${src}`);
    console.warn(`[copy-mostofa] Skipping. You can set MOSTOFA_IMAGE_SRC to override.`);
    process.exit(0);
  }

  fs.copyFileSync(src, dest);
  console.log(`[copy-mostofa] Copied -> ${dest}`);
} catch (err) {
  console.warn("[copy-mostofa] Failed to copy image:", err);
  process.exit(0);
}
