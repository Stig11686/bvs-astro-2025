# BVSWebDesign Design System

BVSWebDesign is a one-person web design studio run by **Steve Marks** in Skipton, North Yorkshire. It builds WordPress websites for UK service businesses (dental practices, bridal boutiques, hospitality, beauty, clubs and community groups) and sells four services: **Website Design**, **Website Rescue**, **Website Support & Care Plans**, and a free **Website Audit**. The only product surface is the marketing website, bvswebdesign.co.uk. Bookings go through TidyCal (`start-a-project`, `30-minute-meeting`).

## Direction history
- **v1:** broadsheet. Stone paper, square ruled grids, mono caps labels. Taken straight from the repo prototype.
- **v2 (current):** warm editorial atelier. Cream canvas, white 20px cards, one soft shadow, photo hero, Newsreader 500 display with Geist UI. Claret and navy are kept as the only colours. Component APIs are unchanged apart from Button kinds (`outline`, `light` added), the StatCard `border` prop being dropped, and the new PhotoHero.

## Sources
- GitHub: https://github.com/Stig11686/bvs-astro-2025 (branch `main`). It's an Astro + Tailwind v4 site built on a Getastrothemes theme.
  - `src/styles/theme.css`: the live "editorial" palette (claret `#6e1a2c`, navy `#1d3a5f`, stone `#f5f5f4`)
  - `src/config/fonts.json`: Newsreader (primary) and Geist (secondary)
  - `bvswebdesign/project/`: a design handoff prototype ("BVSWebDesign - Site.html" + `site-*.jsx`). **This is the main source for this system**: tokens, components and copy all come from it.
- Upload: `uploads/bvs-logo…webp`, the primary logo mark.

The repo has more material than this system covers, including the care-plan page, location pages, the case study and 30+ blog posts in `src/content/blog`. Browse it if you need patterns or copy that aren't here.

**Palette note:** the prototype values are used (claret `#6a1a2c`, blue `#16365a`, paper `#f4f3ee`, ink `#14130e`). The live Astro theme uses slightly different hexes (`#6e1a2c`, `#1d3a5f`, `#f5f5f4`, `#1c1917`). Use the prototype values unless you're matching the current production site.

---

## CONTENT FUNDAMENTALS
- **Voice:** first-person singular, Steve speaking to the reader: "I'm Steve", "I take it over and sort it out", "I'll tell you honestly". Never "we". The reader is "you".
- **Tone:** plain-spoken and a bit wry, like a Yorkshire tradesman who knows the job. The copy names real problems: "Developer gone quiet", "Locked out of your own site", "Wrong platform, wrong price". It doesn't hype. "Results, not just redesigns." "Enquiries, not applause."
- **Proof over claims:** every claim comes with a named client and a number. "Ilkley Dental Care: 30+ enquiries per month", "3–4k visits per month", "30 Google reviews in 3 months". Portfolio tiles lead with the result.
- **Headlines:** sentence case, ending with a full stop. Each gets one claret moment: either an italic phrase ("Your website shouldn't be someone else's *hostage*.") or a claret full stop (the photo hero). Question headlines are used for CTAs: "Ready to get more from your *website*?"
- **CTAs:** Title Case with a trailing arrow: "Start a Project →", "Book a Free Audit →", "Send a Message". Secondary links are italic: "See my work", "More about how I work →".
- **Eyebrows:** a claret dot and a short sentence-case line with middot separators: "● WordPress web design · Skipton, Yorkshire & the UK". They double as live status: "● Currently booking · 2 project slots left this year".
- **Spelling:** British English ("colour", "organisation", "enquiries"). Place names come up often (Skipton, Ilkley, Keighley, York, Yorkshire).
- **Reassurance:** the copy repeatedly says the reader owns the work and has no lock-in: "Their website, their domain, their call." "No account managers, no handoffs to a junior."
- **No emoji.** Typographic glyphs do that job: → ↗ ▾ ★ ● · — “ ” №.

## VISUAL FOUNDATIONS
**Direction (v2): warm editorial atelier.** Pages sit on cream paper. Content lives on white cards with 20px corners and one soft shadow, and warm low-light photography carries the hero. Colour is used as punctuation: **claret** is the one point of emphasis in a view, and **navy** is the dark surface. The copy and tone above haven't changed.

- **Colour:** the cream canvas `#e4dfd9` is always the page background. Cards, inputs and dropdowns are white `#fff`. Graphite `#171717` is for primary buttons and scrims. Text is ink `#050505`, with iron `#4b4b4b` for long body copy on cream, slate `#737373` for secondary text on white, and stone `#999694` for placeholders. Fog `#c7c7c7` is for hairlines and chip/input borders.
- **Claret `#6a1a2c`** is the punctuation mark. Use it for one italic headline word *or* a full stop, eyebrow dots, stars, numerals in lists, and the single "Book a Free Audit" / "Send a Message" accent button. Never use it as a large fill. Aim for one claret moment per headline.
- **Navy `#0c2340`** is the dark surface: the pre-footer CTA slab, testimonial slab and "What you get" slab, always rounded to 20px inside the container. On navy the accent switches to bright claret `#d06a80`. `[data-accent="blue"]` swaps the two roles.
- **Type:** Newsreader **500** is the display face, with -0.02em tracking at every size. Sizes are 69 (hero/page h1 and the CTA), 28 (section h2), 23 (card titles) and 19 (quotes). It's never bold. The italic is kept for the one emphasised phrase. Geist handles everything functional: 19 subheading, 16 body, 14 caption/labels, and 15/500 for buttons and nav. Geist Mono and the uppercase labels from v1 are gone.
- **Layout:** 1200px max width with 24px side padding. There's 100px between major sections, 32px between a heading and its content, 24px between cards and 8px between small elements. Headings are left-aligned with a readable measure; only the photo hero is centred.
- **Cards:** white, 20px radius, 32px padding, `rgba(0,0,0,.07) 0 6px 27px`. There are no borders on cards. Image cards inset the image 12px with a 12px radius. Link cards lift 2px on hover.
- **Radii:** cards 20, inputs 12, buttons and icon tiles 8, chips/pills 9999, avatars 50%. Nothing is square.
- **Shadows:** there's only one shadow (above). No coloured, layered or hard shadows.
- **Backgrounds and imagery:** flat cream, a full-bleed photo hero (20px frame, graphite scrim at 35–62% from top to bottom), and navy slabs. Photography should be warm, low-light and candid with deep blacks and a shallow depth of field (e.g. `assets/photos/steve-1.jpg`). There are no illustrations, gradients or textures. The placeholder is a subtle cream stripe.
- **Blur/transparency:** only on the sticky header (cream at 90% with a 10px backdrop blur) and the photo scrim.
- **Motion:** .15s colour, background and border changes; .2s card lift; .45s `cubic-bezier(.4,0,.2,1)` carousel slide; the dropdown chevron rotates. Nothing bounces.
- **Hover/press:** solid goes from graphite to black; accent goes from claret to claret-deep; outline's border darkens to ink; ghost gets an underline; chips darken their border; the active chip is graphite. There's no specific pressed state.

## ICONOGRAPHY
The prototype uses **no icon library**. Unicode glyphs do the work: → (CTA and card arrows), ↗ (external/read), ▾ (dropdown), ★ (ratings), ● (category dot), · (separator), — (list bullet/eyebrow), ⌐ (placeholder caption), “ ” (quotes). Set them in the surrounding font, usually italic Newsreader in claret.
The live Astro site ships a small set of filled SVGs, copied to `assets/icons/`: arrow-top-right, star, phone-filled, message-filled, location-filled, facebook, google (colour). Use these for contact rows or social links. Don't draw new icons. If you need more, Lucide at 1.5px stroke is the closest match; flag the substitution if you use it.

## Logo
- `assets/logo/bvs-logo.webp` / `bvs-logo.png`: the primary mark. It shows `<` and `>` in angled claret and navy tiles, the "BVSWEBDESIGN" handwritten wordmark and "DIGITAL SERVICES". Use it on white or paper for favicons, social and print.
- `assets/logo/favicon.svg`, `apple-touch-icon.png`, `icon-512.png`
- In the site UI, the header and footer use the **typeset wordmark** instead (`<Wordmark/>`: "BVS*Web*Design" in Newsreader 500).

---

## Index
- `styles.css`: entry point (imports only)
- `tokens/`: `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css` (shared `bvs-*` classes: display, wrap, dot, btn, card, chip, field, navlink, menurow, ph, and the `.bvs-dark` navy scope)
- `guidelines/`: 17 foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/`: React primitives, each with `.jsx` + `.d.ts` + `.prompt.md` and one card per folder
- `ui_kits/website/`: click-through marketing site (see its README)
- `assets/`: logo, photos (testimonials, stock photos of Steve), portfolio screenshots, blog images, icons
- `SKILL.md`, `github.md`, `thumbnail.html`

### Components
- **core:** Button, UnderLink, Label, Eyebrow, Placeholder, StarRow, Wordmark
- **forms:** TextField
- **cards:** StatCard, HelpCard, PortfolioCard, ReviewCard, BlogCard, NumberedRow
- **navigation:** TopNav, Footer, FilterBar
- **sections:** PhotoHero, DarkCTA, ReviewsCarousel

### Intentional additions
- **Placeholder**: combines the prototype's `.ph` striped slot with a real-image mode, so screenshots can replace the stripes.
- **Wordmark**: pulls the inline header/footer wordmark out into its own component.
- **NumberedRow**: one component for the repeated numbered rows in the Audit and Design process sections.
- **PhotoHero**: the full-bleed photographic hero from the v2 atelier direction. The original prototype had a text-only hero.

### UI kits
- `ui_kits/website/index.html`: Home, About, Website Design, Website Rescue, Website Audit, Portfolio, Blog, Contact

### Fonts
Newsreader and Geist load from Google Fonts (`tokens/fonts.css`). The live site self-hosts the same families, but the generated woff2 filenames in the repo are hashed, so they weren't copied.
