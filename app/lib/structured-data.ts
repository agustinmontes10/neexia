import {
  ADDRESS,
  AREA_SERVED,
  CONTACT_EMAIL,
  PHONE_E164,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/app/lib/site";
import type { CaseStudy, Service } from "@/app/lib/landing-data";

/**
 * JSON-LD builders. Every page renders the output of one or more of these via
 * <JsonLd>. The Organization node uses a stable @id so other nodes can point at
 * it with `provider` / `publisher` references instead of re-describing it.
 */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logoNeexia.svg`,
    image: `${SITE_URL}/opengraph-image`,
    email: CONTACT_EMAIL,
    telephone: PHONE_E164,
    address: {
      "@type": "PostalAddress",
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      addressCountry: ADDRESS.country,
    },
    areaServed: AREA_SERVED.map((name) => ({ "@type": "Place", name })),
    knowsAbout: [
      "Inteligencia artificial",
      "Automatización de procesos",
      "Agentes de IA",
      "Chatbots conversacionales",
      "Desarrollo web",
      "Integración de sistemas",
    ],
    sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      telephone: PHONE_E164,
      availableLanguage: ["Spanish"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "es",
    publisher: { "@id": ORG_ID },
  };
}

type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.seo?.description ?? service.longDescription,
    url: `${SITE_URL}/servicios/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED.map((name) => ({ "@type": "Place", name })),
    audience: {
      "@type": "BusinessAudience",
      name: "Pymes, startups y negocios",
    },
  };
}

export function caseStudySchema(caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.seo?.description ?? caseStudy.longDescription,
    url: `${SITE_URL}/casos/${caseStudy.slug}`,
    about: caseStudy.role,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "es",
    ...(caseStudy.image ? { image: `${SITE_URL}${caseStudy.image}` } : {}),
  };
}

export function faqPageSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function glossarySchema(
  terms: { term: string; slug: string; definition: string }[]
) {
  const setUrl = `${SITE_URL}/glosario`;
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": setUrl,
    name: "Glosario de IA y automatización",
    url: setUrl,
    inLanguage: "es",
    publisher: { "@id": ORG_ID },
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${setUrl}#${t.slug}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: setUrl,
    })),
  };
}
