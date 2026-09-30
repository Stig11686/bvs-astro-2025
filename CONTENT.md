# Editing the BVS Web Design site

Everything you edit lives in `src/content/` (pages and posts) and `src/data/` (lists the pages pull from).
Push to `main` and Netlify publishes. Open a pull request first to get a private preview link.

## Where things live

| What | Where | URL |
|---|---|---|
| Blog post | `src/content/blog/<slug>.mdx` | `/blog/<slug>/` |
| Core service (one per pillar) | `src/content/services/<pillar slug>.mdx` | `/services/<slug>/` |
| Industry page | `src/content/industries/<slug>.mdx` | `/services/<slug>/` |
| Location page | `src/content/locations/<slug>.mdx` | `/<slug>/` |
| Case study | `src/content/work/<slug>.mdx` | `/portfolio/<slug>/` |
| Other pages (legal, landing) | `src/content/pages/<slug>.mdx` | `/<slug>/` |
| Pillars, audiences | `src/data/taxonomy.yaml` | |
| Images | `src/assets/media/` + `src/data/media.yaml` | |
| Testimonials | `src/data/testimonials.yaml` | |
| Verified results | `src/data/proof.yaml` | |
| Contact details, booking links, nav | `src/site.config.ts` | |
| Redirects | `public/_redirects` | |

## The two tags every post carries

- **pillar** (exactly one): `audit`, `support`, `rescue` or `design`. It decides the post's archive
  (`/blog/category/website-audit/` etc.), the service it links to, and the calls to action.
- **audiences** (optional): `salon`, `dental`, `bridal`, `hospitality`, `community`, `retail`.
  Leave empty for posts that suit any service business.
- Support posts can add `supportAngle`: `running`, `day-to-day` or `cost`.

Related posts, the case study at the foot of a post, and the posts shown on service and industry
pages all follow from these tags. Nothing is linked by hand.

## A blog post

```mdx
---
title: "Who actually owns your website?"
description: "One or two sentences. Used on cards and in search results."
date: 2026-10-01
pillar: rescue
audiences: [bridal]
image: dot-com            # a name from src/data/media.yaml
takeaways:
  - Three short points for people who skim.
faqs:
  - q: "A question readers ask"
    a: "The answer."
metaTitle: "Under 60 characters | BVS Web Design"
metaDescription: "Under 155 characters."
---

Body in markdown. Use ## and ### for headings (the title is already the H1).
```

### Blocks you can use in any post (no imports needed)

| Block | Use |
|---|---|
| `<Callout type="tip\|warning\|note\|steve" title="…">…</Callout>` | A tip, warning or "what I'd do" |
| `<PullQuote>…</PullQuote>` | One strong line from the post, set large |
| `<ClientQuote id="jodie-marks" />` | A testimonial from `testimonials.yaml` |
| `<Stat id="ilkley-dental-enquiries" />`, `<Stats ids={["…","…"]} />` | Numbers from `proof.yaml` |
| `<Steps>` numbered list `</Steps>` | A process |
| `<Checklist title="…">` bullet list `</Checklist>` | Things to tick off |
| `<Comparison left={{ title: "…", items: ["…"] }} right={{ title: "…", items: ["…"] }} />` | Two columns side by side |
| `<Figure id="jaynes-homepage" caption="…" />` | An image with a caption |
| `<InlineCTA />` | A soft prompt, worded for the post's pillar |
| `<CaseStudyCard id="maidens-and-ravens" />` | Link to a case study |

Leave a blank line after an opening block tag and before the closing tag when the block contains a list.

## Images

Each image is stored once and used by name anywhere: a post cover, a figure, a case study, a testimonial photo.

```bash
npm run add-image -- ~/Desktop/photo.jpg --name steve-desk --alt "Steve at his desk in Skipton"
```

That turns the photo the right way up, strips its metadata (including GPS location), resizes it to
2400px at most, saves `src/assets/media/steve-desk.webp`, and adds it to `src/data/media.yaml`.
The site then serves AVIF and WebP at the right size for each screen.

For an Unsplash photo, add an entry by hand and the build downloads it:

```yaml
laptop-cafe:
  file: laptop-cafe.webp
  alt: "Laptop on a café table"
  credit: "Photo by Jane Doe on Unsplash"
  unsplash: "https://images.unsplash.com/photo-…"
```

## Checks

`npm run check` (also runs before every build) fails if a page names an image, testimonial, result or
case study that doesn't exist, or an image has no alt text or is oversized. It warns about em dashes
in posts, long meta titles and descriptions, and images nothing uses.

The GitHub build check on pull requests also confirms every URL from the old sitemap still works.
