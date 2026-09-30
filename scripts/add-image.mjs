#!/usr/bin/env node
// Adds an image to the media library.
//
//   npm run add-image -- path/to/photo.jpg --name steve-desk --alt "Steve at his desk in Skipton"
//   options: --caption "…"  --credit "Photo by …"  --decorative  --force
//
// What it does:
//   1. Turns the photo the right way up and strips its metadata (camera, GPS location).
//   2. Resizes it to at most 2400px on the long edge.
//   3. Saves a high-quality WebP master to src/assets/media/<name>.webp.
//   4. Adds the entry to src/data/media.yaml.
// Astro then makes the AVIF and WebP versions, in every size, at build time.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import yaml from "js-yaml";

const MEDIA_DIR = "src/assets/media";
const MEDIA_YAML = "src/data/media.yaml";
const MAX = 2400;

const args = process.argv.slice(2);
const input = args[0] && !args[0].startsWith("--") ? args[0] : undefined;
const opt = (k) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const flag = (k) => args.includes(`--${k}`);

const name = opt("name");
const alt = opt("alt");
const fail = (m) => { console.error(`add-image: ${m}`); process.exit(1); };

if (!input || !fs.existsSync(input)) fail("give the path to an image as the first argument");
if (!name || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) fail("--name is required: lowercase words joined with hyphens, e.g. jaynes-homepage");
if (!alt && !flag("decorative")) fail('--alt is required (describe the image), or pass --decorative for a purely decorative image');

const library = yaml.load(fs.readFileSync(MEDIA_YAML, "utf8")) ?? {};
if (library[name] && !flag("force")) fail(`"${name}" is already in the library. Choose another name, or pass --force to replace it.`);

const out = path.join(MEDIA_DIR, `${name}.webp`);
const isGraphic = /\.png$/i.test(input); // screenshots keep more detail
const info = await sharp(input)
  .rotate()
  .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
  .webp({ quality: isGraphic ? 92 : 88, effort: 6 })
  .toFile(out);

const entry = { file: `${name}.webp`, alt: alt ?? "" };
if (flag("decorative")) entry.decorative = true;
if (opt("caption")) entry.caption = opt("caption");
if (opt("credit")) entry.credit = opt("credit");

if (library[name]) {
  library[name] = entry;
  const header = fs.readFileSync(MEDIA_YAML, "utf8").split("\n").filter((l) => l.startsWith("#")).join("\n");
  fs.writeFileSync(MEDIA_YAML, `${header}\n\n${yaml.dump(library, { lineWidth: 120 })}`);
} else {
  fs.appendFileSync(MEDIA_YAML, `\n${yaml.dump({ [name]: entry }, { lineWidth: 120 })}`);
}

const kb = Math.round(fs.statSync(out).size / 1024);
console.log(`Added "${name}": ${out} (${info.width}×${info.height}, ${kb} KB)`);
