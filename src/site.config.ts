// Site-wide settings: contact details, booking links, navigation.
export const site = {
  name: "BVS Web Design",
  url: "https://www.bvswebdesign.co.uk",
  tagline: "WordPress websites for service businesses. Built in Skipton, working across Yorkshire and the UK.",
  description:
    "Website design for service businesses that get more enquiries, more bookings and found on Google. Based in Skipton, working across Yorkshire and the UK.",
  author: "Steve Marks",
  email: "info@bvswebdesign.co.uk",
  phone: "07521 917508",
  phoneHref: "+447521917508",
  address: {
    street: "3 Woodfield Drive",
    locality: "Bradley",
    town: "Skipton",
    region: "North Yorkshire",
    postcode: "BD20 9EN",
    country: "GB",
  },
  social: {
    facebook: "https://www.facebook.com/bvswebdesign",
    linkedin: "https://www.linkedin.com/company/bvswebdesign/",
  },
  // Shown above the dark call to action at the foot of most pages. Leave empty to hide.
  availability: "",
  googleAnalyticsId: "G-S0ZN2D7XG4",
  // The contact form posts JSON here (the BVS CRM).
  formEndpoint: "https://crm.bvswebdesign.co.uk/api/integrations/website-enquiry",
  defaultImage: "og-default", // media id used when a page has no image
};

export const links = {
  start: "https://tidycal.com/bvswebdesign/start-a-project",
  audit: "https://tidycal.com/bvswebdesign/30-minute-meeting",
  contact: "/contact/",
};

export const ctaLabels = {
  start: "Start a Project →",
  audit: "Book a Free Audit →",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/", services: true },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];
