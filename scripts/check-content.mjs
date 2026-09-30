#!/usr/bin/env node
// Checks the content before a build and fails with a plain list of problems:
//  - every image in src/data/media.yaml has a file and alt text, and isn't oversized
//  - every image, testimonial, proof point and case study a page names exists
//  - lists library images nothing uses (a warning, not a failure)
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const ROOT = "src";
const read = (f) => fs.readFileSync(f, "utf8");
const loadYaml = (f) => yaml.load(read(f)) ?? {};
const media = loadYaml("src/data/media.yaml");
const testimonials = loadYaml("src/data/testimonials.yaml");
const proof = loadYaml("src/data/proof.yaml");
const errors = [];
const warn = [];
const MAX_KB = 1500;

// Media library
for (const [id, m] of Object.entries(media)) {
  const file = path.join("src/assets/media", m.file ?? "");
  if (!m.file) errors.push(`media.yaml: "${id}" has no file`);
  else if (!fs.existsSync(file)) errors.push(`media.yaml: "${id}" points at ${file}, which does not exist`);
  else if (fs.statSync(file).size / 1024 > MAX_KB)
    errors.push(`media.yaml: "${id}" is ${Math.round(fs.statSync(file).size / 1024)} KB. Run it through \`npm run add-image\` (keeps masters under ~500 KB).`);
  if (!m.decorative && !String(m.alt ?? "").trim()) errors.push(`media.yaml: "${id}" has no alt text`);
}

// Walk content
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(path.join(ROOT, "content")).filter((f) => /\.mdx?$/.test(f));
const workIds = new Set(fs.existsSync("src/content/work") ? fs.readdirSync("src/content/work").map((f) => f.replace(/\.mdx?$/, "")) : []);
const used = new Set();

const need = (kind, id, where, set) => {
  if (kind === "media") used.add(id);
  if (!(id in set) && !(set instanceof Set && set.has(id))) errors.push(`${where}: ${kind} "${id}" does not exist`);
};

for (const f of files) {
  const src = read(f);
  const fm = src.match(/^---\n([\s\S]*?)\n---/);
  const data = fm ? yaml.load(fm[1]) ?? {} : {};
  const body = fm ? src.slice(fm[0].length) : src;
  if (data.image) need("media", data.image, f, media);
  for (const g of data.gallery ?? []) need("media", g, f, media);
  if (data.testimonial) need("testimonial", data.testimonial, f, testimonials);
  if (data.work) for (const w of [].concat(data.work)) need("case study", w, f, workIds);
  for (const [, id] of body.matchAll(/<Figure[^>]*\bid="([^"]+)"/g)) need("media", id, f, media);
  for (const [, id] of body.matchAll(/<ClientQuote[^>]*\bid="([^"]+)"/g)) need("testimonial", id, f, testimonials);
  for (const [, id] of body.matchAll(/<Stat\b[^>]*\bid="([^"]+)"/g)) need("proof point", id, f, proof);
  for (const [, ids] of body.matchAll(/<Stats[^>]*\bids=\{\[([^\]]*)\]\}/g)) for (const [, id] of ids.matchAll(/"([^"]+)"/g)) need("proof point", id, f, proof);
  for (const [, id] of body.matchAll(/<CaseStudyCard[^>]*\bid="([^"]+)"/g)) need("case study", id, f, workIds);
  if (f.includes("content/blog/") && /—/.test(src)) warn.push(`${f}: contains an em dash`);
  if (data.metaTitle && data.metaTitle.length > 65) warn.push(`${f}: metaTitle is ${data.metaTitle.length} characters (aim for 60 or fewer)`);
  if (data.metaDescription && data.metaDescription.length > 160) warn.push(`${f}: metaDescription is ${data.metaDescription.length} characters (aim for 155 or fewer)`);
}
for (const [id, t] of Object.entries(testimonials)) if (t.photo) need("media", t.photo, `testimonials.yaml (${id})`, media);
for (const [id, p] of Object.entries(proof)) if (p.work) need("case study", p.work, `proof.yaml (${id})`, workIds);

// Images used directly by page templates
for (const f of walk(path.join(ROOT, "pages")).concat(walk(path.join(ROOT, "components")))) {
  for (const [, id] of read(f).matchAll(/hasMedia\("([^"]+)"\)/g)) used.add(id);
}
used.add("og-default");

const unused = Object.keys(media).filter((id) => !used.has(id));
if (unused.length) warn.push(`Images in the library that nothing uses: ${unused.join(", ")}`);

for (const w of warn) console.warn(`warning: ${w}`);
if (errors.length) {
  console.error(`\nContent check failed (${errors.length}):\n` + errors.map((e) => `  - ${e}`).join("\n") + "\n");
  process.exit(1);
}
console.log(`Content check passed: ${files.length} content files, ${Object.keys(media).length} images.`);
