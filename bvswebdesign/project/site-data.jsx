// site-data.jsx — content for the BVS Web Design site (per Steve's brief).
// Copy is implemented as written. First-person singular ("I/my"), name = Steve Marks.

const { useState, useEffect, useRef } = React;

const LINKS = {
  start:   'https://tidycal.com/bvswebdesign/start-a-project',
  audit:   'https://tidycal.com/bvswebdesign/30-minute-meeting',
  contact: '/contact/',
};

// Per-page meta titles (set on document.title) ───────────────────────────────
const META = {
  home:     'Websites that get service businesses more enquiries, more bookings, and found on Google | BVS Web Design',
  about:    'About Steve Marks | WordPress Web Designer Based in Skipton | BVS Web Design',
  design:   'WordPress Website Design for Service Businesses | BVS Web Design',
  rescue:   'Website Rescue | Stuck, Locked Out or Left Behind | BVS Web Design',
  support:  'Website Support & Care Plans | BVS Web Design',
  audit:    "Free Website Audit | Find Out What's Holding Your Site Back | BVS Web Design",
  portfolio:'Recent Work & Case Studies | BVS Web Design',
  case:     'Ilkley Dental Care — Case Study | BVS Web Design',
  blog:     'Web Design Blog | Tips, Case Studies & Insights | BVS Web Design',
  contact:  'Contact BVS Web Design | Web Designer in Skipton, Yorkshire',
};

// Services (nav dropdown order + descriptions from §3.1) ───────────────────────
const SERVICES_NAV = [
  { id: 'design',  title: 'Website Design',                desc: 'A new WordPress website built around generating enquiries — not just looking good.' },
  { id: 'rescue',  title: 'Website Rescue',                desc: 'Developer gone? Wrong platform? Locked out? I take it over and sort it out.' },
  { id: 'support', title: 'Website Support & Care Plans',  desc: 'Ongoing support, security and updates so your website keeps performing.' },
  { id: 'audit',   title: 'Website Audit',                 desc: "Free audit of your website — find out exactly what's holding it back." },
];

// Homepage proof strip (§2.1) ─────────────────────────────────────────────────
const PROOF_STATS = [
  { value: '30+',  label: 'Enquiries per month',        sub: 'Ilkley Dental Care' },
  { value: '3–4k', label: 'Visits per month',           sub: 'Rebecca Rennolds' },
  { value: '30',   label: 'Google reviews in 3 months', sub: 'Maidens & Ravens' },
];

// Homepage "I can help if..." cards (§2.1) ─────────────────────────────────────
const HELP_CARDS = [
  {
    title: "Your site isn't bringing anything in",
    body: "You've got a website. Maybe it even looks decent. But the enquiries aren't coming and you're not sure why. I find what's holding it back and fix it.",
    target: 'audit',
  },
  {
    title: "You're paying too much for your current platform",
    body: "Proprietary website builders and closed CMS platforms can cost hundreds — sometimes thousands — a year for no good reason. I move businesses onto WordPress and cut the ongoing cost significantly.",
    target: 'rescue',
  },
  {
    title: "Your developer disappeared — or stopped caring",
    body: "It happens more than it should. If you've been left with a half-finished site, no access to your own files, or a developer who's stopped returning calls — I can take it over and sort it out.",
    target: 'rescue',
  },
  {
    title: "You're starting from scratch",
    body: "New business, new direction, or starting properly for the first time. I'll build something that works from day one — not just something that looks good in a browser.",
    target: 'design',
  },
];

// Portfolio (§2.1 order) ──────────────────────────────────────────────────────
const PORTFOLIO = [
  { slug: 'yorkshire-unicorn', client: 'The Yorkshire Unicorn',          sector: 'Hospitality · Skipton', stat: 'Direct bookings from day one', target: 'case' },
  { slug: 'ilkley-dental',     client: 'Ilkley Dental Care',             sector: 'Healthcare · Ilkley',   stat: '30+ enquiries per month',      target: 'case' },
  { slug: 'maidens-ravens',    client: 'Maidens & Ravens Bridal Boutique', sector: 'Bridal · York',       stat: '30 Google reviews in 3 months', target: 'case' },
  { slug: 'antler-interiors',  client: 'Antler Interiors',               sector: 'Interiors',             stat: 'Case study coming soon',        target: 'case', placeholder: true },
];

// Website Audit — "What I look at" (§2.4) ──────────────────────────────────────
const AUDIT_ITEMS = [
  { title: 'First impressions',  body: 'Does it pass the five-second test? Is it immediately clear what you do and who for?' },
  { title: 'SEO foundations',    body: 'Are you showing up on Google for the right searches? Are there basic technical issues holding you back?' },
  { title: 'Conversion blockers',body: "Why aren't visitors getting in touch? What's getting in the way between landing on the page and picking up the phone?" },
  { title: 'Mobile experience',  body: 'Over 60% of your visitors are on a phone. Does your site actually work for them?' },
  { title: 'Technical health',   body: 'Speed, security, broken links, Core Web Vitals — the unglamorous stuff that quietly kills performance.' },
];

// Website Rescue — "Sound familiar?" cards (§2.3) ──────────────────────────────
const RESCUE_CARDS = [
  {
    title: 'Developer gone quiet',
    body: "You've sent the emails. Maybe you've even called. Nothing. Your website is sitting on someone else's server, you don't have the login details, and you're not sure what you even own. I'll get you back in control.",
  },
  {
    title: 'Locked out of your own site',
    body: "Some developers — intentionally or not — leave businesses with no access to their own domain, hosting, or files. I've helped businesses recover 30 years of content from a locked-down server. Whatever the situation, there's usually a way through.",
  },
  {
    title: 'Wrong platform, wrong price',
    body: 'Proprietary website builders and closed CMS platforms charge a premium for the privilege of keeping you stuck. I move businesses onto WordPress — reducing ongoing costs and giving you something you actually own and can take anywhere.',
  },
];

const RESCUE_STORIES = [
  {
    client: 'Ilkley Harriers',
    body: "A running club with 30 years of history on their website — and a developer who'd become unreliable and unresponsive, with everything locked on a server nobody else could access. I built a new site while they worked to recover the existing content, managed the migration, and handed them full control of their own domain for the first time. Their website, their domain, their call.",
  },
  {
    client: 'Climate Action Silsden',
    body: "A community organisation whose developer communicated sporadically via WhatsApp and had left them with no ownership of their own domain. I built them a new site and made sure they walked away with full control — so they could go elsewhere in future if they wanted to. That's how it should work.",
  },
];

// Website Support — care plan tiers (kept; voice already first-person) ─────────
const SUPPORT_PLANS = [
  {
    name: 'Essential Care',
    price: '£49',
    cadence: '/ month',
    blurb: 'The basics, properly handled — so nothing breaks while you get on with running the business.',
    features: ['Managed WordPress hosting', 'Weekly off-site backups', 'Core, theme & plugin updates', 'Uptime monitoring', 'Email support'],
  },
  {
    name: 'Complete Care',
    price: '£89',
    cadence: '/ month',
    blurb: 'Everything in Essential, plus a real person making small improvements every month.',
    features: ['Everything in Essential Care', 'Same-day priority fixes', '1 hour of edits each month', 'Security hardening & malware scans', 'Quarterly performance check'],
    featured: true,
  },
  {
    name: 'Growth Care',
    price: '£175',
    cadence: '/ month',
    blurb: 'For businesses treating the website as a channel that should keep getting better.',
    features: ['Everything in Complete Care', '3 hours of edits each month', 'Monthly SEO actions', 'Conversion improvements', 'Quarterly strategy call'],
  },
];

// Website Design — process (kept, first-person) ───────────────────────────────
const DESIGN_PROCESS = [
  ['01', 'Free call',  'A proper conversation about your business — not your colour scheme.'],
  ['02', 'Discovery',  'Your customers, what they need to see, and what is getting in the way.'],
  ['03', 'Design',     'Figma drafts you can mark up, built around the path to enquiry.'],
  ['04', 'Build',      'Hand-built WordPress — no bloated page builders.'],
  ['05', 'Launch + care', 'Live, trained, and looked after long after handover.'],
];

const DESIGN_INCLUDES = [
  'Discovery & strategy session',
  'Custom design in Figma',
  'Hand-built WordPress (no page builders)',
  'Copywriting guidance',
  'On-page SEO foundations',
  'Mobile-first, fast by default',
  'Editor training video',
  '30 days of post-launch fixes',
];

// Blog posts (categories normalised: SEO, Trends, Process, Tips) ───────────────
const BLOG_POSTS = [
  {
    cat: 'Trends', date: '14 May 2026', read: '6 min',
    title: 'Why “make it pop” is killing your small business website',
    excerpt: "Visual noise has a cost. Here's how restraint, hierarchy and one clear next action beats every bouncing slider on a Yorkshire high street.",
  },
  {
    cat: 'Process', date: '02 May 2026', read: '4 min',
    title: 'The 7 questions I ask before quoting any WordPress build',
    excerpt: 'A short list that saves both of us months of rework, and lets me give you a real number on the first call rather than a fudged range.',
  },
  {
    cat: 'Tips', date: '21 Apr 2026', read: '5 min',
    title: 'Stop writing “Welcome to our website”',
    excerpt: 'Your homepage hero has about two seconds. Spend them on the thing the visitor is here for, not a polite hello to nobody in particular.',
  },
  {
    cat: 'SEO', date: '03 Apr 2026', read: '8 min',
    title: 'Local SEO for Yorkshire businesses, without the snake oil',
    excerpt: 'The unglamorous handful of things that actually move you up Google Maps in Skipton, Ilkley, Otley and York — done in a Tuesday afternoon.',
  },
  {
    cat: 'Process', date: '18 Mar 2026', read: '3 min',
    title: "Why I build in WordPress (and when I won't)",
    excerpt: "Not because it's trendy. Because you can edit the thing without phoning me at 9pm on a Sunday before a wedding fair.",
  },
  {
    cat: 'SEO', date: '28 Feb 2026', read: '5 min',
    title: "The contact form that had been broken for two years",
    excerpt: "How a silent plugin failure cost one practice two years of enquiries — and the five-minute check that would have caught it.",
  },
];

// Testimonials (real, from brief — left unchanged as quotes) ───────────────────
const T_HOME = {
  quote: "My website crashed after a TikTok went viral with over 200,000 views. Steve looked at it immediately and got it back up and running straight away.",
  name: 'Elizabeth Matfin',
  role: 'Maidens & Ravens Bridal Boutique, York',
};
const T_ABOUT = {
  quote: "I have had poor experience in the past from other website designers — limited help, poor response times, and extortionate charging for small tasks. Steve is definitely the opposite of this and I have no plans to instruct anyone else any time soon.",
  name: 'Elizabeth Matfin',
  role: 'Maidens & Ravens Bridal Boutique, York',
};

// Homepage reviews carousel. `real: true` = verbatim client quote.
// Others are placeholder copy for Steve to replace with real Google reviews.
// `photo` is the slot label; `shape` hints whether it's a face or a site shot.
const REVIEWS = [
  {
    real: true,
    quote: "My website crashed after a TikTok went viral with over 200,000 views. Steve looked at it immediately and got it back up and running straight away.",
    name: 'Elizabeth Matfin',
    role: 'Maidens & Ravens Bridal Boutique, York',
    photo: 'Elizabeth M.', shape: 'face', stars: 5,
  },
  {
    real: true,
    quote: "I've had poor experiences with website designers before — limited help, slow responses, and charged a fortune for small tasks. Steve is the opposite. I've no plans to use anyone else.",
    name: 'Elizabeth Matfin',
    role: 'Maidens & Ravens Bridal Boutique, York',
    photo: 'Elizabeth M.', shape: 'face', stars: 5,
  },
  {
    real: false,
    quote: "Our contact form had been broken for two years and nobody had spotted it. Steve found it, rebuilt the site, and now we get more than thirty enquiries a month.",
    name: 'Ilkley Dental Care',
    role: 'Dental practice, Ilkley',
    photo: 'Ilkley Dental site', shape: 'site', stars: 5,
  },
  {
    real: false,
    quote: "Steve built our website from scratch when we had nothing online at all. We're now getting three to four thousand visits a month and ranking for the searches that matter.",
    name: 'Rebecca Rennolds',
    role: 'Rebecca Rennolds Permanent Beauty',
    photo: 'Rebecca R.', shape: 'face', stars: 5,
  },
  {
    real: false,
    quote: "We were locked out of thirty years of club history by a previous developer. Steve got us a new site, recovered the content, and handed us full control of our own domain.",
    name: 'Ilkley Harriers',
    role: 'Running club, Ilkley',
    photo: 'Ilkley Harriers', shape: 'face', stars: 5,
  },
  {
    real: false,
    quote: "Calm, clear and genuinely helpful from start to finish. Steve made sure we owned everything ourselves so we'd never be stuck again. Couldn't recommend him more highly.",
    name: 'Climate Action Silsden',
    role: 'Community organisation, Silsden',
    photo: 'Climate Action site', shape: 'site', stars: 5,
  },
];

Object.assign(window, {
  LINKS, META, SERVICES_NAV, PROOF_STATS, HELP_CARDS, PORTFOLIO,
  AUDIT_ITEMS, RESCUE_CARDS, RESCUE_STORIES, SUPPORT_PLANS,
  DESIGN_PROCESS, DESIGN_INCLUDES, BLOG_POSTS, T_HOME, T_ABOUT, REVIEWS,
});
