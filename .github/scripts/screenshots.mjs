// Full-page screenshots of key pages at desktop and phone widths.
import { chromium } from "playwright";
import fs from "node:fs";
const base = "http://localhost:4321";
const pages = ["/", "/about/", "/services/website-support/", "/services/website-rescue/", "/services/website-audit/", "/services/website-design/",
  "/services/bridal-web-design/", "/web-designer-york/", "/portfolio/", "/portfolio/jaynes-bridalwear-lincoln/", "/blog/",
  "/blog/who-owns-my-website/", "/blog/category/website-support/", "/contact/", "/solicitor-website-audit/", "/from-pretty-to-profitable/"];
fs.mkdirSync("shots", { recursive: true });
const browser = await chromium.launch();
for (const [name, viewport] of [["desktop", { width: 1440, height: 900 }], ["phone", { width: 390, height: 844 }]]) {
  const page = await browser.newPage({ viewport });
  await page.addInitScript(() => localStorage.setItem("bvs-consent", "denied"));
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const p of pages) {
    await page.goto(base + p, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const file = `shots/${name}${p.replace(/\//g, "_") || "_"}.jpg`;
    await page.screenshot({ path: file, fullPage: true, type: "jpeg", quality: 60 });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    if (overflow) errors.push(`${p}: horizontal overflow at ${viewport.width}px`);
  }
  if (errors.length) fs.appendFileSync("shots/errors.txt", errors.map((e) => `${name}: ${e}`).join("\n") + "\n");
  await page.close();
}
await browser.close();
