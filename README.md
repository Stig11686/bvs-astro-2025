# bvswebdesign.co.uk

The BVS Web Design website: Astro, plain CSS and one small script. Hosted on Netlify, which rebuilds the site on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

**Adding a blog post?** See [BLOG-GUIDE.md](BLOG-GUIDE.md).

## Where things live

```
src/
  content/                 ← words. Edit these for day-to-day changes
    blog/                  one .md file per post (filename = URL)
    portfolio/             one file per case study → /portfolio/<file>/
    locations/             town pages → /web-designer-<file>/
    industries/            sector pages → /services/<file>/
    pages/                 privacy, terms and other simple pages → /<file>/
  assets/images/           every image, in one place (see "Images")
  pages/                   page templates and the hand-built pages (home, services, about, contact)
  components/              reusable sections: hero, CTA slab, FAQ, cards, forms…
    mdx/                   components you can use inside .mdx content
  layouts/Base.astro       <head>, SEO tags, analytics, header and footer
  styles/tokens.css        design tokens: colours, type, spacing
  styles/site.css          all site styles
  scripts/site.ts          menu, animations, carousels, forms
  data/testimonials.ts     Google reviews shown in the review deck
  site.config.ts           phone, email, booking links, menu, footer links, blog categories
design/                    the Claude Design export this site is built from (reference only)
public/_redirects          Netlify redirects for old URLs
netlify/functions/         MailerLite sign-up for /from-pretty-to-profitable/
scripts/                   build step that downloads Unsplash images for new posts
```

## Images

Every image is in `src/assets/images/`, and content refers to it as `/images/...`:

```
src/assets/images/blog/domain.jpg   →   image: "/images/blog/domain.jpg"
```

The build turns each image into AVIF and WebP at several widths. Each browser picks the right size for its screen and the best format it supports. Add the original at good quality and the build handles the rest. A missing image stops the build with a message saying which file to add.

In templates, use the `Img` component:

```astro
<Img src="/images/portfolio/maidens-and-ravens.png" alt="…" sizes="(min-width: 1000px) 480px, 90vw" />
```

## Adding pages

- **A town page:** copy `src/content/locations/york.md`, rename it (for example `skipton.md` gives `/web-designer-skipton/`) and edit the text. Add it to `footerLinks.areas` in `src/site.config.ts` if you want it in the footer.
- **A sector page:** copy a file in `src/content/industries/`.
- **A simple text page:** add a `.md` file to `src/content/pages/`.
- **A case study:** add a file to `src/content/portfolio/`. Inside `.mdx` case studies you can use `<Cards>`, `<Card>`, `<Quote>`, `<Button>`, `<Accordion>` and `<Image>` (see `src/components/mdx/index.ts`).

## Forms

Enquiry forms post JSON to the CRM (`site.enquiryEndpoint` in `src/site.config.ts`) with the fields `name`, `email`, `website`, `service_type`, `message` and `privacy_agreed`. The solicitor audit form posts to `site.auditEndpoint`. The handling code is at the bottom of `src/scripts/site.ts`.

## Analytics and cookies

Google Analytics runs in Consent Mode. Nothing is stored until a visitor clicks "Accept analytics" in the cookie banner. They can change their mind from the "Cookies" link in the footer.

Events sent (see `trackEvent` in `src/scripts/site.ts`):

| Event | When | Useful parameters |
| --- | --- | --- |
| `generate_lead` | A form is sent successfully | `form_name` (contact_form, contact_form_home, care_plan_enquiry, audit_quick_form, solicitor_audit), `service_type` |
| `book_call_click` | Any TidyCal booking link is clicked | `link_text`, `page_path` |
| `cta_click` | A main button or text link is clicked | `link_text`, `link_url`, `page_path` |
| `email_click` | The email address is clicked | `page_path` |
| `sign_up` | Newsletter sign-up | `method` |

In GA, mark `generate_lead` and `book_call_click` as key events (Admin → Events).
