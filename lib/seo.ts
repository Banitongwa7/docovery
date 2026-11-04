import type { Metadata } from "next";
import { siteConfig, contact, socials } from "@/lib/site";

/**
 * One place to build a page's metadata so every route ships the same set:
 * title, description, canonical, Open Graph and Twitter card. The share image
 * itself comes from the nearest `opengraph-image.tsx` (file convention), so it
 * is never hard-coded here.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  authors,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  /** Route path, e.g. "/services" — resolved against `metadataBase`. */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  /** Skip the "%s | Docovery" template (home page). */
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: fullTitle,
      description,
      ...(type === "article" ? { publishedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Structured data (schema.org JSON-LD)                               */
/* ------------------------------------------------------------------ */

const orgId = `${siteConfig.url}/#organisation`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": orgId,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/apple-icon`,
  image: `${siteConfig.url}/opengraph-image`,
  email: contact.email,
  telephone: contact.phone.value,
  slogan: siteConfig.motto,
  address: {
    "@type": "PostalAddress",
    addressLocality: contact.office.city,
    addressCountry: "CD",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: "Worldwide",
  knowsLanguage: ["fr", "en"],
  sameAs: socials.map((social) => social.href),
  founder: [
    { "@type": "Person", name: "Omari Kayumba" },
    { "@type": "Person", name: "David Banitongwa" },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#site`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "fr-FR",
  publisher: { "@id": orgId },
};

/** BreadcrumbList for an inner page: Accueil › … › current. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  const items = [{ name: "Accueil", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export { orgId };

/** The eight services as a catalogue offered by the organisation. */
export function servicesJsonLd(
  items: { slug: string; title: string; description: string }[],
  baseUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Services Docovery",
    url: `${baseUrl}/services`,
    itemListElement: items.map((item, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: item.title,
        description: item.description,
        url: `${baseUrl}/services#${item.slug}`,
        provider: { "@id": orgId },
        areaServed: "Worldwide",
      },
    })),
  };
}
