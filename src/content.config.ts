import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { taxonomy } from "./lib/data";

// Enums come from src/data/taxonomy.yaml so there is one list to edit.
const keys = (o: Record<string, unknown>) => Object.keys(o) as [string, ...string[]];
const pillar = z.enum(keys(taxonomy.pillars));
const audience = z.enum(keys(taxonomy.audiences));
const supportAngle = z.enum(keys(taxonomy.supportAngles));
const format = z.enum(keys(taxonomy.formats));

const faq = z.object({ q: z.string(), a: z.string() });
const seo = {
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  noindex: z.boolean().default(false),
};

// ── Blog posts ─────────────────────────────────────────────────────────────
// src/content/blog/<slug>.mdx → /blog/<slug>/
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "*.mdx" }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      pillar,
      supportAngle: supportAngle.optional(),
      audiences: z.array(audience).default([]),
      format: format.default("article"),
      image: z.string().optional(), // media id from src/data/media.yaml
      takeaways: z.array(z.string()).max(5).optional(),
      faqs: z.array(faq).optional(),
      work: z.string().optional(), // case study to feature, by slug
      keywords: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
      ...seo,
    })
    .refine((p) => !p.supportAngle || p.pillar === "support", {
      message: "supportAngle is only for posts in the support pillar",
      path: ["supportAngle"],
    }),
});

// ── Core services: one per pillar ───────────────────────────────────────────
// src/content/services/<pillar slug>.mdx → /services/<pillar slug>/
const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "*.mdx" }),
  schema: z.object({
    title: z.string(),
    pillar,
    eyebrow: z.string(),
    heading: z.string(), // *words* in asterisks are set in accent italics
    intro: z.array(z.string()).default([]),
    primaryCta: z.enum(["start", "audit"]).default("start"),
    ctaLabel: z.string().optional(),
    messageHref: z.string().default("/contact/"), // where the hero's "Send a Message" button goes
    image: z.string().optional(),
    faqs: z.array(faq).optional(),
    ...seo,
  }),
});

// ── Industry pages ─────────────────────────────────────────────────────────
// src/content/industries/<slug>.mdx → /services/<slug>/
const industries = defineCollection({
  loader: glob({ base: "./src/content/industries", pattern: "*.mdx" }),
  schema: z.object({
    title: z.string(),
    audience,
    eyebrow: z.string(),
    heading: z.string(),
    intro: z.array(z.string()).default([]),
    image: z.string().optional(),
    faqs: z.array(faq).optional(),
    ...seo,
  }),
});

// ── Location pages ─────────────────────────────────────────────────────────
// src/content/locations/<slug>.mdx → /<slug>/   e.g. web-designer-york
const locations = defineCollection({
  loader: glob({ base: "./src/content/locations", pattern: "*.mdx" }),
  schema: z.object({
    title: z.string(),
    town: z.string(),
    eyebrow: z.string(),
    heading: z.string(),
    intro: z.array(z.string()).default([]),
    image: z.string().optional(),
    work: z.array(z.string()).default([]), // case studies to show, by slug
    testimonial: z.string().optional(),
    faqs: z.array(faq).optional(),
    ...seo,
  }),
});

// ── Case studies ───────────────────────────────────────────────────────────
// src/content/work/<slug>.mdx → /portfolio/<slug>/
const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "*.mdx" }),
  schema: z.object({
    client: z.string(),
    title: z.string(), // the headline
    summary: z.string(),
    date: z.coerce.date(),
    sector: z.string(),
    town: z.string().optional(),
    pillars: z.array(pillar).min(1),
    audiences: z.array(audience).default([]),
    website: z.string().url().optional(),
    image: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    testimonial: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
    ...seo,
  }),
});

// ── Standalone pages (legal, landing pages) ─────────────────────────────────
// src/content/pages/<slug>.mdx → /<slug>/
const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "*.mdx" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    intro: z.array(z.string()).default([]),
    template: z.enum(["prose", "landing"]).default("prose"), // not "layout": MDX reserves that key
    cta: z.enum(["start", "audit", "none"]).default("start"),
    faqs: z.array(faq).optional(),
    ...seo,
  }),
});

export const collections = { blog, services, industries, locations, work, pages };
