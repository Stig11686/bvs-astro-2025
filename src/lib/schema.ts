// JSON-LD builders.
import { site } from "@/site.config";

export const faqJsonLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const businessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  founder: { "@type": "Person", name: site.author },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.town,
    addressRegion: site.address.region,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  areaServed: ["Skipton", "Yorkshire", "United Kingdom"],
  sameAs: Object.values(site.social),
});

export const breadcrumbJsonLd = (items: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: new URL(path, site.url).href })),
});

export const articleJsonLd = (a: { title: string; description: string; path: string; date: Date; updated?: Date; image?: string }) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: a.title,
  description: a.description,
  mainEntityOfPage: new URL(a.path, site.url).href,
  datePublished: a.date.toISOString(),
  dateModified: (a.updated ?? a.date).toISOString(),
  author: { "@type": "Person", name: site.author, url: new URL("/about/", site.url).href },
  publisher: { "@type": "Organization", name: site.name, url: site.url },
  ...(a.image ? { image: a.image } : {}),
});

export const serviceJsonLd = (s: { name: string; description: string; path: string; offers?: { name: string; price: string }[] }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  description: s.description,
  url: new URL(s.path, site.url).href,
  areaServed: [{ "@type": "Place", name: "Skipton" }, { "@type": "Place", name: "North Yorkshire" }, { "@type": "Country", name: "United Kingdom" }],
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  ...(s.offers?.length
    ? { offers: s.offers.map((o) => ({ "@type": "Offer", name: o.name, price: o.price, priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: o.price, priceCurrency: "GBP", unitCode: "MON" } })) }
    : {}),
});
