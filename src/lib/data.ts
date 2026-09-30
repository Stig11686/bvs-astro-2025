// Loads the YAML data files in src/data/ once, validates them, and exports them.
// These are small lists that pages pull from: the taxonomy, the media library,
// testimonials and proof points.
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { z } from "astro/zod";

const DATA_DIR = path.resolve(process.cwd(), "src/data");

function load<T>(file: string, schema: z.ZodType<T>): T {
  const raw = yaml.load(fs.readFileSync(path.join(DATA_DIR, file), "utf8")) ?? {};
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `  ${i.path.join(".")}: ${i.message}`)
      .join("\n");
    throw new Error(`src/data/${file} is not valid:\n${issues}`);
  }
  return parsed.data;
}

// ── Taxonomy ───────────────────────────────────────────────────────────────
const pillarSchema = z.object({
  name: z.string(),
  shortName: z.string().optional(),
  slug: z.string(),
  problem: z.string(),
  summary: z.string(),
  cta: z.object({
    heading: z.string(),
    body: z.string(),
    primary: z.enum(["start", "audit"]),
  }),
  inline: z.object({ heading: z.string(), body: z.string() }),
});

export const taxonomy = load(
  "taxonomy.yaml",
  z.object({
    pillars: z.record(pillarSchema),
    pillarOrder: z.array(z.string()),
    supportAngles: z.record(z.string()),
    audiences: z.record(z.string()),
    formats: z.record(z.string()),
  }),
);

export type PillarId = keyof typeof taxonomy.pillars & string;
export type Pillar = z.infer<typeof pillarSchema> & { id: string };

export const pillars: Pillar[] = taxonomy.pillarOrder.map((id) => ({
  id,
  ...taxonomy.pillars[id],
}));

export function getPillar(id: string): Pillar {
  const p = taxonomy.pillars[id];
  if (!p) throw new Error(`Unknown pillar "${id}". Pillars are listed in src/data/taxonomy.yaml.`);
  return { id, ...p };
}

export function getPillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}

// ── Media library ──────────────────────────────────────────────────────────
// One entry per image. The key is the image's name, used everywhere else.
const mediaSchema = z.record(
  z.object({
    file: z.string(),
    alt: z.string().default(""), // required unless decorative; checked by scripts/check-content.mjs
    decorative: z.boolean().default(false),
    caption: z.string().optional(),
    credit: z.string().optional(),
    unsplash: z.string().url().optional(),
  }),
);
export const media = load("media.yaml", mediaSchema);
export type MediaEntry = z.infer<typeof mediaSchema>[string];

// ── Testimonials ───────────────────────────────────────────────────────────
// Real client words only. Never paraphrased, never invented.
const testimonialSchema = z.record(
  z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    work: z.string().optional(), // case study slug
    pillars: z.array(z.string()).default([]),
    audiences: z.array(z.string()).default([]),
    source: z.enum(["google", "direct", "email"]).default("direct"),
    stars: z.number().min(1).max(5).optional(),
    photo: z.string().optional(), // media id
  }),
);
export const testimonials = load("testimonials.yaml", testimonialSchema);
export type Testimonial = z.infer<typeof testimonialSchema>[string] & { id: string };

export function getTestimonial(id: string): Testimonial {
  const t = testimonials[id];
  if (!t) throw new Error(`Unknown testimonial "${id}". Add it to src/data/testimonials.yaml.`);
  return { id, ...t };
}

// ── Proof points ───────────────────────────────────────────────────────────
// Verified numbers only. `named: false` shows the anonymous label instead of the client.
const proofSchema = z.record(
  z.object({
    value: z.string(),
    label: z.string(),
    client: z.string(),
    named: z.boolean().default(true),
    anonymousLabel: z.string().optional(),
    work: z.string().optional(),
    pillars: z.array(z.string()).default([]),
    audiences: z.array(z.string()).default([]),
    homepage: z.boolean().default(false),
  }),
);
export const proof = load("proof.yaml", proofSchema);
export type Proof = z.infer<typeof proofSchema>[string] & { id: string; attribution: string };

export function getProof(id: string): Proof {
  const p = proof[id];
  if (!p) throw new Error(`Unknown proof point "${id}". Add it to src/data/proof.yaml.`);
  return { id, ...p, attribution: p.named ? p.client : (p.anonymousLabel ?? "A client") };
}

export const allProof = (): Proof[] => Object.keys(proof).map(getProof);
