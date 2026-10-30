// One place for business details, links and navigation.

export const site = {
  name: "BVS Web Design",
  url: "https://www.bvswebdesign.co.uk",
  description:
    "Website design and care plans for service businesses in Skipton and across North Yorkshire. More enquiries, more bookings, and a site that stays looked after.",
  author: "Steve Marks",
  // No phone number on the site, by choice.
  email: "info@bvswebdesign.co.uk",
  location: "Skipton, North Yorkshire",
  introCall: "https://tidycal.com/bvswebdesign/30-minute-meeting",
  startProject: "https://tidycal.com/bvswebdesign/start-a-project",
  social: [
    { label: "Facebook", url: "https://www.facebook.com/bvswebdesign" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/bvswebdesign/" },
  ],
  googleAnalyticsId: "G-S0ZN2D7XG4",
  // Your CRM endpoints. Keep the field names in ContactForm.astro as they are.
  enquiryEndpoint: "https://crm.bvswebdesign.co.uk/api/integrations/website-enquiry",
  auditEndpoint: "https://crm.bvswebdesign.co.uk/api/audit-requests",
};

// Main menu (the slide-out panel)
export const menu = [
  { label: "Home", href: "/" },
  { label: "Website Design", href: "/services/website-design/" },
  { label: "Website Rescue", href: "/services/website-rescue/" },
  { label: "Care Plans", href: "/services/website-support/" },
  { label: "Free Audit", href: "/services/website-audit/" },
  { label: "Projects", href: "/portfolio/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const footerLinks = {
  services: [
    { label: "Website Design", href: "/services/website-design/" },
    { label: "Website Rescue", href: "/services/website-rescue/" },
    { label: "Care Plans", href: "/services/website-support/" },
    { label: "Free Website Audit", href: "/services/website-audit/" },
    { label: "Switch From Your Agency", href: "/switch-web-agency/" },
  ],
  industries: [
    { label: "Dental websites", href: "/services/dental-web-design/" },
    { label: "Bridal websites", href: "/services/bridal-web-design/" },
    { label: "Salon & beauty websites", href: "/services/salon-website-design/" },
    { label: "Hotel & B&B websites", href: "/services/hotel-website-design/" },
  ],
  areas: [
    { label: "Yorkshire", href: "/web-designer-yorkshire/" },
    { label: "York", href: "/web-designer-york/" },
    { label: "Ilkley", href: "/web-designer-ilkley/" },
    { label: "Keighley", href: "/web-designer-keighley/" },
  ],
};

// Blog categories. A post must use one of these exactly.
// Adding one here creates its /blog/category/<slug>/ page automatically.
export const blogCategories = [
  "Website Audit",
  "Website Support",
  "Website Rescue",
  "Website Design",
  "Case Studies",
] as const;

export const slugify = (s: string) =>
  s.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// The author: used for bylines, the author box on posts and case studies,
// the About page, and the structured data that tells Google who wrote what.
export const person = {
  name: "Steve Marks",
  jobTitle: "Web designer",
  profilePath: "/about/",
  image: "/images/steve/headshot.webp",
  // Your personal LinkedIn profile, e.g. "https://www.linkedin.com/in/your-name/".
  // Leave empty to hide the LinkedIn links.
  linkedin: "",
  bio: "I design, build and look after WordPress websites for small businesses across Yorkshire, from Skipton. You'll always deal with me, start to finish, and I write everything on this site myself.",
  knowsAbout: ["Web design", "WordPress", "Website maintenance", "Website rescue", "Local SEO", "Website accessibility"],
};

// Structured data for the author. Every post and case study points at the same
// @id, so Google connects them all to one person and their profile page.
export const personId = `${site.url}${person.profilePath}#steve`;
export const personSchema = (imageUrl?: string) => ({
  "@type": "Person",
  "@id": personId,
  name: person.name,
  jobTitle: person.jobTitle,
  url: `${site.url}${person.profilePath}`,
  ...(imageUrl ? { image: imageUrl } : {}),
  ...(person.linkedin ? { sameAs: [person.linkedin] } : {}),
  worksFor: { "@type": "Organization", name: site.name, url: site.url },
  knowsAbout: person.knowsAbout,
  address: { "@type": "PostalAddress", addressLocality: "Skipton", addressRegion: "North Yorkshire", addressCountry: "GB" },
});
