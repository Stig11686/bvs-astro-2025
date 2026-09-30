// Content schemas. The build fails with a clear message if a file breaks them,
// so a post with a missing title or unknown category never goes live.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { blogCategories } from "./site.config";

// Filename is the URL. `customSlug` (older posts) overrides it.
const idFromFile = ({ entry, data }: { entry: string; data: Record<string, unknown> }) =>
  (data.customSlug as string) || entry.replace(/\.(md|mdx)$/, "").split("/").pop()!;

const imagePath = z
  .string()
  .regex(/^\/images\//, 'Image paths start with "/images/", e.g. "/images/blog/my-post.jpg"');

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog", generateId: idFromFile }),
  schema: z
    .object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      image: imagePath.optional(),
      imageAlt: z.string().optional(),
      unsplashImage: z.string().url().optional(),
      // One category, from the list in src/site.config.ts
      category: z.enum(blogCategories).optional(),
      categories: z.array(z.enum(blogCategories)).optional(),
      tags: z.array(z.string()).optional(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      author: z.string().default("Steve Marks"),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      customSlug: z.string().optional(),
    })
    .refine((d) => d.category || d.categories?.length, {
      message: `Add a category, one of: ${blogCategories.join(", ")}`,
    })
    .transform((d) => ({ ...d, category: (d.category ?? d.categories![0]) as (typeof blogCategories)[number] })),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio", generateId: idFromFile }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: imagePath,
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    categories: z.array(z.string()).default([]),
    information: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    draft: z.boolean().default(false),
    customSlug: z.string().optional(),
  }),
});

const faq = z.array(z.object({ question: z.string(), answer: z.string() }));
const metric = z.array(z.object({ value: z.string(), label: z.string() }));

// Location landing pages: /web-designer-<file name>/
const locations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/locations" }),
  schema: z.object({
    title: z.string(),
    metaDescription: z.string(),
    location: z.string(),
    region: z.string(),
    heroHeadline: z.string(),
    heroExcerpt: z.string(),
    heroImage: imagePath,
    heroImageAlt: z.string().default(""),
    resultsHeadline: z.string(),
    resultsText: z.string(),
    testimonial: z.object({ quote: z.string(), author: z.string(), business: z.string(), avatar: imagePath.optional() }),
    whyWorkHeadline: z.string(),
    features: z.array(z.object({ title: z.string(), text: z.string() })),
    portfolioText: z.string().optional(),
    portfolioSlugs: z.array(z.string()).default([]),
    successStory: z.object({ business: z.string(), location: z.string(), text: z.string(), metrics: metric }),
    processSteps: z.array(z.object({ title: z.string(), text: z.string() })),
    faqHeadline: z.string(),
    faqText: z.string().optional(),
    faq,
  }),
});

// Industry pages: /services/<file name>/
const industries = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/industries" }),
  schema: z.object({
    title: z.string(),
    metaDescription: z.string(),
    industry: z.string(),
    industryPlural: z.string(),
    heroEyebrow: z.string(),
    heroHeadline: z.string(),
    heroExcerpt: z.string(),
    heroImage: imagePath,
    heroImageAlt: z.string().default(""),
    whyHeadline: z.string(),
    whyText: z.string(),
    whyPoints: z.array(z.string()).default([]),
    includesHeadline: z.string(),
    includesText: z.string().optional(),
    includes: z.array(z.object({ title: z.string(), text: z.string() })),
    portfolioHeadline: z.string().optional(),
    portfolioText: z.string().optional(),
    portfolioSlugs: z.array(z.string()).default([]),
    successStory: z.object({ business: z.string(), location: z.string().optional(), text: z.string(), metrics: metric }),
    testimonial: z
      .object({ quote: z.string(), author: z.string(), business: z.string(), avatar: imagePath.optional() })
      .optional(),
    faqHeadline: z.string(),
    faqText: z.string().optional(),
    faq,
  }),
});

// Simple content pages: privacy, terms and similar. /<file name>/
const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    headline: z.string().optional(),
    description: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    crumb: z.string().optional(),
    noindex: z.boolean().default(false),
    contactForm: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, portfolio, locations, industries, pages };
