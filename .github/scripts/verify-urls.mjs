// Checks every URL from the old site's sitemap against the built site:
// it must be a real page in dist/ or match a rule in public/_redirects that lands on a real page.
import fs from "node:fs";
const urls = fs.readFileSync(".github/scripts/old-urls.txt", "utf8").split("\n").filter(Boolean);
const rules = fs.readFileSync("public/_redirects", "utf8").split("\n")
  .map((l) => l.trim()).filter((l) => l && !l.startsWith("#"))
  .map((l) => { const [from, to, code] = l.split(/\s+/); return { from, to, code, force: code.endsWith("!") }; });
const exists = (p) => fs.existsSync(`dist${p}${p.endsWith("/") ? "index.html" : ""}`) || fs.existsSync(`dist${p}`);
const match = (rule, p) => rule.from.endsWith("*") ? p.startsWith(rule.from.slice(0, -1)) : rule.from === p;
function resolve(p, depth = 0) {
  if (depth > 5) return { ok: false, why: "redirect loop" };
  for (const r of rules) {
    if (!match(r, p)) continue;
    if (!r.force && exists(p)) break;
    const to = r.to;
    return exists(to) ? { ok: true, via: `${r.code} → ${to}`, hops: depth + 1 } : resolve(to, depth + 1);
  }
  return exists(p) ? { ok: true, via: "200" , hops: depth } : { ok: false, why: "404" };
}
let bad = 0;
for (const u of urls) {
  const r = resolve(u);
  if (!r.ok) bad++;
  console.log(`${r.ok ? (r.hops > 1 ? "CHAIN" : "ok   ") : "FAIL "} ${u}  ${r.via ?? r.why}`);
}
console.log(`\n${urls.length - bad}/${urls.length} old URLs resolve.`);
process.exit(bad ? 1 : 0);
