import { copyFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const assetsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../assets');
const out = path.join(assetsDir, 'screenshots/website-preview.png');
const fallback = path.join(assetsDir, 'logo10.png');

const sources = [
  'https://image.thum.io/get/width/1200/crop/900/noanimate/https://delta-innovations-website.vercel.app/',
  'https://api.microlink.io/?url=https%3A%2F%2Fdelta-innovations-website.vercel.app&screenshot=true&meta=false',
];

for (const url of sources) {
  try {
    const response = await fetch(url);
    if (!response.ok) continue;
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length < 5000) continue;
    writeFileSync(out, buffer);
    console.log(`Saved website preview (${buffer.length} bytes) from ${url}`);
    process.exit(0);
  } catch {
    // try next source
  }
}

copyFileSync(fallback, out);
console.log('Screenshot services unavailable — using logo as preview fallback');
