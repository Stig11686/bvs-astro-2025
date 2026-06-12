// shared.jsx — tokens, helpers, placeholders, navigation hook
// All exported on window so Babel scripts can share scope.

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ── Pages each direction must render ──────────────────────────────────────────
const PAGES = ['home', 'services', 'blog', 'case'];
const PAGE_LABEL = {
  home: 'Home',
  services: 'Services',
  blog: 'Blog',
  case: 'Case study',
};

// Per-artboard navigation. Each artboard owns its own page state so the user
// can click the nav inside any artboard to jump pages without affecting others.
function useArtboardNav(initial = 'home') {
  const [page, setPage] = useState(initial);
  return [page, setPage];
}

// ── Striped placeholder for imagery ──────────────────────────────────────────
function Placeholder({ label = 'image', height = 360, tone = 'warm', radius = 0, style = {} }) {
  const stripeColor = tone === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(28,23,15,0.06)';
  const baseBg = tone === 'dark' ? '#1c170f' : 'rgba(28,23,15,0.04)';
  const txt = tone === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(28,23,15,0.45)';
  return (
    <div
      style={{
        height,
        background: `repeating-linear-gradient(135deg, ${baseBg} 0 14px, ${stripeColor} 14px 28px)`,
        borderRadius: radius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: txt,
        font: '500 11px/1 ui-monospace, SFMono-Regular, Menlo, monospace',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        border: tone === 'dark' ? 'none' : '1px solid rgba(28,23,15,0.08)',
        ...style,
      }}
    >
      ⌐ {label}
    </div>
  );
}

// ── Tiny SVG-free icons via unicode (kept neutral) ───────────────────────────
const Arrow = ({ size = 14, style = {} }) => (
  <span style={{ display: 'inline-block', lineHeight: 1, ...style }}>→</span>
);

// ── Service & case study & blog seed data (shared across directions) ─────────
const SERVICES = [
  {
    no: '01',
    title: 'Website Design',
    short: 'Considered, fast, conversion-focused WordPress sites built for Yorkshire businesses.',
    tag: 'From £3,800',
    bullets: ['Discovery & strategy', 'Custom design in Figma', 'Hand-built WordPress', 'Launch & training'],
  },
  {
    no: '02',
    title: 'Website Care',
    short: 'Hosting, updates, backups and a real person at the other end of the email.',
    tag: 'From £85 / month',
    bullets: ['Managed hosting', 'Weekly backups', 'Plugin & WP updates', 'Same-day fixes'],
  },
  {
    no: '03',
    title: 'Growth Plans',
    short: 'Monthly retainer that keeps copy, SEO and pages improving — not gathering dust.',
    tag: 'From £450 / month',
    bullets: ['Monthly SEO actions', 'Conversion tweaks', 'New pages & content', 'Quarterly strategy call'],
  },
];

const CASES = [
  {
    slug: 'yorkshire-unicorn',
    client: 'The Yorkshire Unicorn',
    sector: 'Hospitality · Skipton',
    title: 'How a new Skipton venue built a website to compete with established hotels — and drive direct bookings from day one.',
    metric1: { value: '62%', label: 'of bookings direct in month 1' },
    metric2: { value: '4.1s → 1.2s', label: 'Time to interactive' },
    metric3: { value: '£0', label: 'on OTA commissions' },
    year: '2025',
  },
  {
    slug: 'maidens-and-ravens',
    client: 'Maidens & Ravens',
    sector: 'Bridal Boutique · York',
    title: 'A website as distinctive as their dresses — and 30 Google reviews in three months.',
    metric1: { value: '×3.4', label: 'consultation bookings' },
    metric2: { value: '30+', label: 'Google reviews in 90 days' },
    metric3: { value: '#1', label: 'York bridal boutique on Maps' },
    year: '2024',
  },
  {
    slug: 'ilkley-dental',
    client: 'Ilkley Dental Care',
    sector: 'Healthcare · Ilkley',
    title: 'From broken contact form and zero faith — to 30+ enquiries a month.',
    metric1: { value: '30+', label: 'enquiries / month' },
    metric2: { value: '0 → 12', label: 'new patient calls / week' },
    metric3: { value: '92', label: 'PageSpeed mobile' },
    year: '2024',
  },
];

const BLOG_POSTS = [
  {
    cat: 'Trends',
    date: '14 May 2026',
    read: '6 min',
    title: 'Why “make it pop” is killing your small business website',
    excerpt: 'Visual noise has a cost. Here\'s how restraint, hierarchy and one clear next action beats every bouncing slider on a Skipton high street.',
  },
  {
    cat: 'Process',
    date: '02 May 2026',
    read: '4 min',
    title: 'The 7 questions I ask before quoting any WordPress build',
    excerpt: 'A short list that saves both of us months of rework, and lets me give you a real number on the first call rather than a fudged range.',
  },
  {
    cat: 'Tips',
    date: '21 Apr 2026',
    read: '5 min',
    title: 'Stop writing “Welcome to our website”',
    excerpt: 'Your homepage hero has about two seconds. Spend them on the thing the visitor is here for, not a polite hello to nobody in particular.',
  },
  {
    cat: 'SEO',
    date: '03 Apr 2026',
    read: '8 min',
    title: 'Local SEO for Yorkshire businesses, without the snake oil',
    excerpt: 'The unglamorous handful of things that actually move you up Google Maps in Skipton, Ilkley, Otley and York — done in a Tuesday afternoon.',
  },
  {
    cat: 'Process',
    date: '18 Mar 2026',
    read: '3 min',
    title: 'Why I build in WordPress (and when I won\'t)',
    excerpt: 'Not because it\'s trendy. Because you can edit the thing without phoning me at 9pm on a Sunday before a wedding fair.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'We had a “nice” website that did absolutely nothing. Within six weeks of relaunch we were turning enquiries away. Worth every penny.',
    name: 'Sarah Whitfield',
    role: 'Owner, The Yorkshire Unicorn',
  },
  {
    quote: 'Ben listens, then quietly delivers. The site looks like us, sounds like us, and finally works on a phone.',
    name: 'Aisha Marsden',
    role: 'Founder, Maidens & Ravens',
  },
  {
    quote: 'The first web person who didn\'t make me feel stupid. And the form actually emails us now.',
    name: 'Dr. James Thornton',
    role: 'Principal, Ilkley Dental Care',
  },
];

Object.assign(window, {
  PAGES, PAGE_LABEL, useArtboardNav,
  Placeholder, Arrow,
  SERVICES, CASES, BLOG_POSTS, TESTIMONIALS,
});
