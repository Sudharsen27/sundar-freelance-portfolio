import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RestaurantErpCaseStudy from "@/components/case-studies/RestaurantErpCaseStudy";
import { RESTAURANT_ERP } from "@/lib/case-studies/restaurant-erp";
import { BRAND_NAME } from "@/lib/brand";
import { getSiteUrl } from "@/lib/site";

const path = `/projects/${RESTAURANT_ERP.slug}`;
const title = `${RESTAURANT_ERP.title} | Enterprise AWS Case Study`;
const description = RESTAURANT_ERP.subtitle;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  keywords: [
    "Restaurant ERP",
    "AWS",
    "Amazon ECS",
    "FastAPI",
    "React",
    "Cloud Native",
    "Infrastructure as Code",
    "AWS CDK",
    BRAND_NAME,
  ],
  openGraph: {
    title: `${RESTAURANT_ERP.title} — ${BRAND_NAME}`,
    description,
    type: "article",
    url: path,
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESTAURANT_ERP.title} — ${BRAND_NAME}`,
    description,
  },
};

export default function RestaurantErpPage() {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: RESTAURANT_ERP.title,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: RESTAURANT_ERP.overview.join(" "),
    url: `${siteUrl}${path}`,
    provider: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <RestaurantErpCaseStudy />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
