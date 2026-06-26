import {
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  JOB_TITLE,
  PERSON_NAME,
  SITE_DESCRIPTION,
} from "@/lib/brand";
import { buildFaqPageSchema } from "@/lib/faq-schema";
import { SERVICES } from "@/lib/services-data";

type StructuredDataOptions = {
  siteUrl: string;
  linkedInUrl: string;
};

export function buildStructuredDataGraph({
  siteUrl,
  linkedInUrl,
}: StructuredDataOptions) {
  const ids = {
    person: `${siteUrl}/#person`,
    organization: `${siteUrl}/#organization`,
    website: `${siteUrl}/#website`,
    professionalService: `${siteUrl}/#professional-service`,
  };

  const sameAs = ["https://github.com/Sudharsen27", linkedInUrl];
  const heroImage = `${siteUrl}/sundar-hero.png`;
  const logoImage = `${siteUrl}/brand-logo.svg`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": ids.person,
        name: PERSON_NAME,
        url: siteUrl,
        image: heroImage,
        jobTitle: JOB_TITLE,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        sameAs,
        worksFor: { "@id": ids.organization },
        knowsAbout: [
          "Website Development",
          "Full Stack Development",
          "UI/UX Design",
          "React",
          "Next.js",
          "Landing Pages",
          "Business Websites",
        ],
      },
      {
        "@type": "Organization",
        "@id": ids.organization,
        name: BRAND_NAME,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: logoImage,
        },
        image: heroImage,
        description: SITE_DESCRIPTION,
        founder: { "@id": ids.person },
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: CONTACT_EMAIL,
            telephone: CONTACT_PHONE,
            availableLanguage: ["English"],
            areaServed: "Worldwide",
            url: `${siteUrl}/contact`,
          },
        ],
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: siteUrl,
        name: BRAND_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-IN",
        publisher: { "@id": ids.organization },
      },
      {
        "@type": "ProfessionalService",
        "@id": ids.professionalService,
        name: BRAND_NAME,
        url: siteUrl,
        image: heroImage,
        description: SITE_DESCRIPTION,
        provider: { "@id": ids.organization },
        areaServed: "Worldwide",
        serviceType: SERVICES.map((service) => service.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Services",
          itemListElement: SERVICES.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: { "@id": ids.organization },
            },
          })),
        },
      },
      buildFaqPageSchema(siteUrl),
    ],
  };
}
