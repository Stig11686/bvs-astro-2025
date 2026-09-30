// Summarises Lighthouse JSON reports in .lighthouseci/ into shots/lighthouse.txt
import fs from "node:fs";
const dir = ".lighthouseci";
const files = fs.readdirSync(dir).filter((f) => f.startsWith("lhr-") && f.endsWith(".json"));
const out = [];
const byUrl = {};
for (const f of files) {
  const r = JSON.parse(fs.readFileSync(`${dir}/${f}`, "utf8"));
  (byUrl[r.finalDisplayedUrl ?? r.finalUrl] ??= []).push(r);
}
for (const [url, runs] of Object.entries(byUrl)) {
  const r = runs.sort((a, b) => a.categories.performance.score - b.categories.performance.score)[Math.floor(runs.length / 2)];
  const c = r.categories, a = r.audits;
  out.push(`\n=== ${url}`);
  out.push(`perf ${Math.round(c.performance.score * 100)} | a11y ${Math.round(c.accessibility.score * 100)} | best ${Math.round(c["best-practices"].score * 100)} | seo ${Math.round(c.seo.score * 100)}`);
  out.push(`LCP ${a["largest-contentful-paint"].displayValue} | FCP ${a["first-contentful-paint"].displayValue} | TBT ${a["total-blocking-time"].displayValue} | CLS ${a["cumulative-layout-shift"].displayValue} | SI ${a["speed-index"].displayValue}`);
  const lcpEl = a["largest-contentful-paint-element"]?.details?.items?.[0]?.items?.[0]?.node?.snippet;
  if (lcpEl) out.push(`LCP element: ${lcpEl.slice(0, 160)}`);
  const lcpPhases = a["largest-contentful-paint-element"]?.details?.items?.[1]?.items;
  if (lcpPhases) out.push(`LCP phases: ${lcpPhases.map((p) => `${p.phase} ${Math.round(p.timing)}ms`).join(", ")}`);
  const failing = Object.values(a).filter((x) => x.score !== null && x.score < 0.9 && x.scoreDisplayMode !== "informative" && x.scoreDisplayMode !== "notApplicable" && x.scoreDisplayMode !== "manual");
  for (const x of failing) {
    let extra = "";
    const items = x.details?.items ?? [];
    if (items.length) extra = " :: " + items.slice(0, 4).map((i) => (i.url ?? i.node?.snippet ?? i.source?.url ?? i.label ?? "").toString().slice(0, 110) + (i.wastedMs ? ` (${Math.round(i.wastedMs)}ms)` : i.wastedBytes ? ` (${Math.round(i.wastedBytes / 1024)}KB)` : "")).join(" | ");
    out.push(`  - [${x.score}] ${x.id}: ${x.displayValue ?? ""}${extra}`);
  }
}
fs.mkdirSync("shots", { recursive: true });
fs.writeFileSync("shots/lighthouse.txt", out.join("\n") + "\n");
console.log(out.join("\n"));
