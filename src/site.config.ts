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
