// A plain-text map of the site for AI assistants and search tools (llmstxt.org).
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "@/site.config";
import { pillars } from "@/lib/data";
import { getPosts, getWork } from "@/lib/content";

export const GET: APIRoute = async () => {
  const u = (p: string) => new URL(p, site.url).href;
  const services = await getCollection("services");
  const industries = await getCollection("industries");
  const locations = await getCollection("locations");
  const posts = await getPosts();
  const work = await getWork();
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Run by ${site.author}, a web designer based in Skipton, North Yorkshire. Contact: ${site.email}.`,
    "",
    "## Services",
    ...pillars.map((p) => {
      const s = services.find((x) => x.id === p.slug);
      return `- [${p.name}](${u(`/services/${p.slug}/`)}): ${p.summary}${s?.data.metaDescription ? ` ${s.data.metaDescription}` : ""}`;
    }),
    "",
    "## Industries",
    ...industries.map((i) => `- [${i.data.title}](${u(`/services/${i.id}/`)})`),
    "",
    "## Areas",
    ...locations.map((l) => `- [${l.data.title}](${u(`/${l.id}/`)})`),
    "",
    "## Case studies",
    ...work.map((w) => `- [${w.data.client}](${u(`/portfolio/${w.id}/`)}): ${w.data.summary}`),
    "",
    "## Articles",
    ...posts.map((p) => `- [${p.data.title}](${u(`/blog/${p.id}/`)}): ${p.data.description}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
