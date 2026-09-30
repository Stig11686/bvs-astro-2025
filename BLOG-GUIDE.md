# Publishing a blog post

This is everything a person or an agent needs to add a post to bvswebdesign.co.uk.

**One Markdown file = one blog post.** Add the file, push to `main`, and Netlify publishes it in a couple of minutes.

## 1. Create the file

Put it in `src/content/blog/`. The file name becomes the web address:

```
src/content/blog/who-owns-my-website.md  →  https://www.bvswebdesign.co.uk/blog/who-owns-my-website/
```

Use lowercase words separated by hyphens. Keep it under about 60 characters. Use `.md`.

## 2. Frontmatter

The block between the `---` lines at the top of the file. Copy this and fill it in:

```yaml
---
title: "Who Actually Owns Your Website? What Every Small Business Owner Needs to Know"
description: "One or two sentences. Shown under the headline and on the blog cards."
date: 2026-10-01
categories:
  - Website Rescue
image: "/images/blog/who-owns-my-website.jpg"
imageAlt: "A domain name search bar"
metaTitle: "Who Owns My Website? | BVS Web Design"
metaDescription: "Under 155 characters, for Google results."
keywords:
  - who owns my website
  - web designer holding domain hostage
draft: false
---
```

| Field | Required? | Notes |
| --- | --- | --- |
| `title` | Yes | The headline. The last word is set in claret italic automatically. |
| `date` | Yes | `YYYY-MM-DD`. Posts are listed newest first. |
| `categories` | Yes | Exactly one, from the list below. |
| `description` | Recommended | The summary under the headline and on cards. If left out, the first paragraph is used. |
| `image` | Recommended | See "Images" below. Posts without an image show as a coloured text card. |
| `imageAlt` | Recommended | Describes the image for screen readers. |
| `metaTitle`, `metaDescription` | Optional | For Google. Fall back to the title and description. |
| `keywords` | Optional | Search phrases, for your own reference. |
| `unsplashImage` | Optional | An `https://images.unsplash.com/photo-...` URL. The build downloads it to the path in `image` if that file doesn't exist yet. |
| `featured` | Optional | `true` puts the post in the big "Start here" slot on /blog/. Otherwise the newest post goes there. |
| `draft` | Optional | `true` hides the post from the live site. It still shows in `npm run dev`. |
| `author` | Optional | Defaults to Steve Marks. |

`category: Website Rescue` (a single line) also works instead of the `categories` list.

### Categories

Use one of these, spelled exactly like this:

- `Website Audit`: sites with traffic but no enquiries, conversion, audits
- `Website Support`: keeping a site running, day-to-day help, care plans, fair running costs
- `Website Rescue`: absent or bad developers, ownership, lock-outs, moving off the wrong platform
- `Website Design`: new builds, redesigns, launches
- `Case Studies`: a named client's results

The list lives in `src/site.config.ts`. Adding a name there creates its category page automatically.

## 3. Images

All images live in **one folder**, `src/assets/images/`, and any page or post can use any of them. Blog images go in `src/assets/images/blog/`.

In content, write the path **without** `src/assets`:

```
file on disk:      src/assets/images/blog/who-owns-my-website.jpg
in frontmatter:    image: "/images/blog/who-owns-my-website.jpg"
inside the post:   ![A domain name search bar](/images/blog/who-owns-my-website.jpg)
```

To reuse an image from somewhere else on the site, point at it: `image: "/images/portfolio/maidens-and-ravens.png"`.

Upload a good-quality JPG, PNG or WebP, ideally 1600 to 2400px wide. You don't need to resize or compress it. The build compresses every image and makes AVIF and WebP versions at several widths, and each visitor's browser downloads the smallest one that looks sharp on their screen.

If a path is wrong, the build stops and says which file is missing. The live site stays as it was.

## 4. Writing the post

Standard Markdown. Don't start with a `# ` heading: the title is already the page's headline.

| You write | You get |
| --- | --- |
| `## Section heading` | A section heading. Every `##` heading is listed in the "On this page" menu. |
| `### Smaller heading` | A sub-heading |
| First paragraph | Shown larger, as the introduction |
| `**bold**` | **bold** |
| `[link text](/services/website-rescue/)` | A link. Links to other websites open in a new tab. |
| `- item` | Bullet list (white cards with a claret arrow) |
| `1. item` | Numbered list |
| `> A line worth pulling out` | A claret pull quote |
| `---` | The brand divider |
| `![alt text](/images/blog/file.jpg)` | An optimised image |
| Markdown tables | A styled table |

The site adds the byline, reading time, table of contents, "Get in touch" button, author box and related posts itself, so don't add them to the text.

`/elements/` shows each of these as it looks on the site.

## 5. Check and publish

```bash
npm run dev      # preview at http://localhost:4321/blog/<file-name>/
npm run build    # the same checks Netlify runs
```

The build fails, and the live site stays as it was, if:

- a required field is missing or the category isn't on the list
- an image path doesn't point to a real file
- an Unsplash download fails

Commit the `.md` file (and the image, if you added one) and push to `main`. Netlify builds and publishes it.
