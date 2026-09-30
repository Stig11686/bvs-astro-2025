#!/usr/bin/env node
// Runs before every build. Any media.yaml entry with an `unsplash:` URL whose file
// is missing gets downloaded, resized and saved as a WebP master in src/assets/media/.
// A failed download fails the build, so the live site stays as it was.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import yaml from "js-yaml";

const library = yaml.load(fs.readFileSync("src/data/media.yaml", "utf8")) ?? {};
let failed = false;

for (const [name, entry] of Object.entries(library)) {
  if (!entry?.unsplash) continue;
  const out = path.join("src/assets/media", entry.file);
  if (fs.existsSync(out)) continue;
  const url = `${entry.unsplash.split("?")[0]}?w=2400&q=85&fm=jpg&fit=max`;
  try {
    let buf;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        buf = Buffer.from(await res.arrayBuffer());
        break;
      } catch (err) {
        if (attempt === 3) throw err;
        await new Promise((r) => setTimeout(r, 2000 * attempt));
      }
    }
    await sharp(buf).rotate().resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true }).webp({ quality: 88 }).toFile(out);
    console.log(`[unsplash] ${name}: saved ${out}`);
  } catch (err) {
    console.error(`[unsplash] ${name}: could not download ${url}: ${err.message}`);
    failed = true;
  }
}
if (failed) process.exit(1);
