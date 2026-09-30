// Downloads Unsplash featured images for blog posts at build time.
//
// A post opts in with two frontmatter fields:
//   image: "/images/blog/my-post-slug.jpg"
//   unsplashImage: "https://images.unsplash.com/photo-..."
//
// If src/assets/images/blog/my-post-slug.jpg is missing, it is downloaded
// from Unsplash (1600px, compressed) and saved there. The site build then
// makes the AVIF/WebP sizes. A committed image always wins, and a failed
// download fails the build so a post never goes live without its image.
import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = "src/content/blog";
const IMAGES_DIR = "src/assets";
const PARAMS = "w=1600&q=75&fm=jpg&fit=max";

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : /\.mdx?$/.test(e.name) ? [p] : [];
  });

const field = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+?)["']?\\s*$`, "m"));
  return m ? m[1].trim() : null;
};

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
      await new Promise((r) => setTimeout(r, 1000 * i));
    }
  }
}

let failed = false;
for (const file of walk(BLOG_DIR)) {
  const fm = fs.readFileSync(file, "utf8").split(/^---\s*$/m)[1] ?? "";
  const image = field(fm, "image");
  const unsplash = field(fm, "unsplashImage");
  if (!image || !unsplash) continue;
  const target = path.join(IMAGES_DIR, image);
  if (fs.existsSync(target)) continue;
  const url = `${unsplash}${unsplash.includes("?") ? "&" : "?"}${PARAMS}`;
  try {
    const data = await download(url);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, data);
    console.log(`[unsplash] ${file}: saved ${image} (${Math.round(data.length / 1024)} KB)`);
  } catch (err) {
    console.error(`[unsplash] ${file}: could not download ${url}: ${err.message}`);
    failed = true;
  }
}
if (failed) process.exit(1);
