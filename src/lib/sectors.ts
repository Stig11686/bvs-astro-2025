// Sector pages, and which case studies belong to them (matched on the
// case study's "Industry" line). Used for internal links.
export const sectors = [
  { match: /dental/i, tag: "Dental Website Design", title: "Websites for dental practices", text: "Built to win new patient enquiries and build trust before the first appointment.", href: "/services/dental-web-design/" },
  { match: /bridal/i, tag: "Bridal Website Design", title: "Websites for bridal boutiques", text: "Built to show off your dresses and fill the appointment diary.", href: "/services/bridal-web-design/" },
  { match: /beauty|salon|aesthetic/i, tag: "Salon & Beauty Website Design", title: "Websites for salons and clinics", text: "Built to take bookings and earn client trust.", href: "/services/salon-website-design/" },
  { match: /hotel|hospitality|accommodation/i, tag: "Hotel & B&B Website Design", title: "Websites for hotels and B&Bs", text: "Built to win direct bookings and cut OTA commission.", href: "/services/hotel-website-design/" },
];
export const sectorFor = (industry: string) => sectors.find((s) => s.match.test(industry));
