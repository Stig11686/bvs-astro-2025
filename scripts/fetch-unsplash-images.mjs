// Downloads Unsplash featured images for blog posts at build time.
//
// A post opts in with two frontmatter fields:
//   image: "/images/blog/my-post-slug.jpg"
//   unsplashImage: "https://images.unsplash.com/photo-..."
//
// If the image file is missing, it is fetched from Unsplash (resized and
// compressed by Unsplash's CDN) and written to both places the site reads from:
//   src/assets/images/blog/...  (page and card images via OptimizedImage)
//   public/images/blog/...      (og:image social share URL)
// Files that already exist are left alone, so a committed image always wins.
// A failed download fails the build, so a post never goes live without its image.

import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = "src/content/blog";
const TARGETS = ["src/assets", "public"];
const PARAMS = "w=1600&q=75&fm=jpg&fit=max";

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return /\.mdx?$/.test(e.name) ? [p] : [];
  });
}

function field(frontmatter, key) {
  const m = frontmatter.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+?)["']?\\s*$`, "m"));
  return m ? m[1].trim() : null;
}

async function download(url, attempts = 3) {
  for (let i = 1; i <= attempts; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const type = res.headers.get("content-type") || "";
      if (!type.startsWith("image/")) throw new Error(`not an image (${type})`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      if (i === attempts) throw err;
      await new Promise((r) => setTimeout(r, 2000 * i));
    }
  }
}

let failed = false;

for (const file of walk(BLOG_DIR)) {
  const fm = fs.readFileSync(file, "utf8").match(/^---\n([\s\S]*?)\n---/);
  if (!fm) continue;
  const image = field(fm[1], "image");
  const source = field(fm[1], "unsplashImage");
  if (!image || !source) continue;

  const missing = TARGETS.map((root) => path.join(root, image)).filter((p) => !fs.existsSync(p));
  if (missing.length === 0) continue;

  const url = `${source.split("?")[0]}?${PARAMS}`;
  try {
    const buf = await download(url);
    for (const p of missing) {
      fs.mkdirSync(path.dirname(p), { recursive: true });
      fs.writeFileSync(p, buf);
    }
    console.log(`[unsplash] ${file}: saved ${image} (${Math.round(buf.length / 1024)} KB)`);
  } catch (err) {
    console.error(`[unsplash] ${file}: could not download ${url}: ${err.message}`);
    failed = true;
  }
}

if (failed) process.exit(1);
