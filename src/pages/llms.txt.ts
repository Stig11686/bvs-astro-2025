// A plain-text map of the site for AI assistants and search tools (llmstxt.org).
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "@/site.config";
import { getPosts, getWork, summary } from "@/lib/content";

export const GET: APIRoute = async () => {
  const u = (p: string) => new URL(p, site.url).href;
  const industries = await getCollection("industries");
  const locations = await getCollection("locations");
  const posts = await getPosts();
  const work = await getWork();
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Run by ${site.author}, a web designer based in Skipton, North Yorkshire. Contact: ${site.email}. The website audit is free; website builds start at £2,000.`,
    "",
    "## Services",
    `- [Website Design](${u("/services/website-design/")}): new WordPress websites built to bring in enquiries, then looked after.`,
    `- [Website Rescue](${u("/services/website-rescue/")}): taking over sites with an absent developer, lost access or a costly platform.`,
    `- [Website Care Plans](${u("/services/website-support/")}): Essentials £35/month, Active £99/month, Growth £249/month. Hosting, updates, backups, edits and monthly improvements.`,
    `- [Free Website Audit](${u("/services/website-audit/")}): a plain-English video walkthrough and a priority list.`,
    "",
    "## Industries",
    ...industries.map((i) => `- [${i.data.heroEyebrow}](${u(`/services/${i.id}/`)}): ${i.data.metaDescription}`),
    "",
    "## Areas",
    ...locations.map((l) => `- [Web design in ${l.data.location}](${u(`/web-designer-${l.id}/`)})`),
    "",
    "## Case studies",
    ...work.map((w) => `- [${w.data.title}](${u(`/portfolio/${w.id}/`)}): ${w.data.description}`),
    "",
    "## Articles",
    ...posts.map((p) => `- [${p.data.title}](${u(`/blog/${p.id}/`)}): ${summary(p)}`),
    "",
    "## Contact",
    `- [Contact form](${u("/contact/")})`,
    `- [Book a free 30-minute intro call](${site.introCall})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
