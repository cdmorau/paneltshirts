/**
 * generate-manifest.mjs
 *
 * Generates /client/public/images/manifest.json so the browser can load all
 * panel image metadata with a single HTTP request instead of probing 334 URLs.
 *
 * Run from the project root:
 *   node generate-manifest.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, 'client', 'public', 'images');
const IMG_COUNT = 334;

/** Extract aspect ratio from SVG content (viewBox or width/height attrs). */
function parseSvgRatio(svgContent) {
  // Try viewBox first — most reliable
  const vb = svgContent.match(/viewBox=["']\s*([\d.]+)\s+[\d.]+\s+([\d.]+)\s+([\d.]+)["']/i);
  if (vb) {
    const w = parseFloat(vb[3]);   // width = 3rd value (minX + width)
    const h = parseFloat(svgContent.match(/viewBox=["']\s*[\d.]+\s+[\d.]+\s+[\d.]+\s+([\d.]+)["']/i)?.[1] ?? '1');
    // Re-parse cleanly
    const parts = svgContent.match(/viewBox=["']([^"']+)["']/i)?.[1].trim().split(/[\s,]+/);
    if (parts && parts.length >= 4) {
      const pw = parseFloat(parts[2]);
      const ph = parseFloat(parts[3]);
      if (pw > 0 && ph > 0) return pw / ph;
    }
  }
  // Fall back to width/height attributes (may include units like "pt")
  const wm = svgContent.match(/\swidth=["']([\d.]+)/i);
  const hm = svgContent.match(/\sheight=["']([\d.]+)/i);
  if (wm && hm) {
    const w = parseFloat(wm[1]);
    const h = parseFloat(hm[1]);
    if (w > 0 && h > 0) return w / h;
  }
  return 1; // square fallback
}

const manifest = [];
let missing = 0;

for (let i = 1; i <= IMG_COUNT; i++) {
  const nn  = String(i).padStart(2, '0');
  const filename = `Panel Web-${nn}.svg`;
  const filepath = path.join(imagesDir, filename);

  if (!fs.existsSync(filepath)) {
    console.warn(`  MISSING: ${filename}`);
    missing++;
    continue;
  }

  // Read only first 1 KB — viewBox is always in the opening tag
  const fd    = fs.openSync(filepath, 'r');
  const buf   = Buffer.alloc(1024);
  const bytes = fs.readSync(fd, buf, 0, 1024, 0);
  fs.closeSync(fd);
  const head  = buf.slice(0, bytes).toString('utf-8');

  const ratio = parseSvgRatio(head);

  manifest.push({
    id:    i - 1,
    lbl:   nn,
    src:   `images/${filename}`,
    ratio: Math.round(ratio * 10000) / 10000,
  });
}

const out = path.join(imagesDir, 'manifest.json');
fs.writeFileSync(out, JSON.stringify(manifest), 'utf-8');

console.log(`manifest.json written — ${manifest.length} images, ${missing} missing`);
console.log(`  → ${out}`);
