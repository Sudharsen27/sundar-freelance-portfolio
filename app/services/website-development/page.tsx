import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Globe2,
  LockKeyhole,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/SectionReveal";
import { BRAND_NAME } from "@/lib/brand";
import { sectionPath } from "@/lib/routes";
import { SERVICES } from "@/lib/services-data";
import { getSiteUrl } from "@/lib/site";

const path = "/services/website-development";
const service = SERVICES.find((item) => item.id === "web-dev");

if (!service) {
  throw new Error("Website Development service data is missing.");
}

const title = "Website Development Services";
const description =
  "Modern, fast, SEO-friendly website development for businesses, startups, and creators from Sundar Digital.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | ${BRAND_NAME}`,
    description,
    type: "website",
    url: path,
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${BRAND_NAME}`,
    description,
  },
};

const featureIcons = [Gauge, Smartphone, Globe2, LockKeyhole];

const faqs = [
  {
    question: "What type of websites do you build?",
    answer:
      "Sundar Digital builds modern websites for businesses, startups, and creators, with an emphasis on credibility, speed, responsiveness, and long-term growth.",
  },
  {
    question: "Are the websites mobile responsive?",
    answer:
      "Yes. Mobile responsiveness is one of the core features of the Website Development service, so the experience is designed to work across smartphones, tablets, and desktop screens.",
  },
  {
    question: "What technologies do you use?",
    answer:
      `The Website Development service uses ${service.tags.join(", ")}. The right choice depends on the needs of the project.`,
  },
  {
    question: "Are the websites SEO-friendly?",
    answer:
      "Yes. SEO optimization is included in the service, alongside fast loading, mobile responsiveness, and secure implementation.",
  },
  {
    question: "How much does a website project cost?",
    answer:
      "Project cost depends on the requirements, features, integrations, complexity, and timeline. Share the project details to get a clear quote based on the work involved.",
  },
  {
    question: "How can I start a website project?",
    answer:
      "Use the contact section to tell Sundar Digital about your project. The next step is to understand the requirements and outline a suitable plan.",
  },
];

export default function WebsiteDevelopmentPage() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}${path}#service`,
        name: service.title,
        description: service.description,
        url: `${siteUrl}${path}`,
        provider: {
          "@type": "Organization",
          name: BRAND_NAME,
          url: siteUrl,
        },
        serviceType: service.title,
        areaServed: "Worldwide",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative min-h-screen">
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,92,246,0.12), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(6,182,212,0.08), transparent), #050816",
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <section className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16">
            <div className="section-container">
              <nav aria-label="Breadcrumb" className="text-sm text-text-secondary">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link href="/" className="transition hover:text-text-primary">Home</Link></li>
                  <li aria-hidden className="text-accent-cyan">/</li>
                  <li><Link href={sectionPath("services")} className="transition hover:text-text-primary">Services</Link></li>
                  <li aria-hidden className="text-accent-cyan">/</li>
                  <li aria-current="page" className="text-text-primary">Website Development</li>
                </ol>
              </nav>

              <div className="mt-16 max-w-4xl sm:mt-20">
                <SectionReveal>
                  <span className="badge">Website Development</span>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-6xl">
                    Website Development Services for a stronger online presence
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                    {service.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href={sectionPath("contact")} className="btn-primary">
                      {service.ctaLabel}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                    <Link href="/projects/restaurant-erp" className="btn-secondary">
                      View a project
                    </Link>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          <section className="border-y border-white/[0.06] py-20 sm:py-28" aria-labelledby="overview-heading">
            <div className="section-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <SectionReveal>
                <SectionHeader badge="The service" title="A website built around your goals" subtitle="Website development is more than putting pages online. It is the craft of shaping a clear, dependable experience that helps a business, startup, or creator build credibility and grow." align="left" headingId="overview-heading" />
              </SectionReveal>
              <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                {service.features.map((feature, index) => {
                  const Icon = featureIcons[index];
                  return (
                    <StaggerItem key={feature}>
                      <article className="premium-card h-full p-6">
                        <Icon className="h-6 w-6 text-accent-cyan" aria-hidden />
                        <h3 className="mt-5 font-display text-lg font-semibold text-text-primary">{feature}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                          A considered part of the Website Development service for a reliable experience on the web.
                        </p>
                      </article>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </section>

          <section className="py-20 sm:py-28" aria-labelledby="technology-heading">
            <div className="section-container">
              <SectionReveal>
                <SectionHeader badge="Technology" title="A focused, modern web stack" subtitle="The service uses established tools selected from the project requirements and the experience the website needs to deliver." headingId="technology-heading" />
              </SectionReveal>
              <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {service.tags.map((tag) => (
                  <StaggerItem key={tag}>
                    <div className="glass flex items-center gap-3 p-5 text-text-primary">
                      <Code2 className="h-5 w-5 text-accent-purple" aria-hidden />
                      <span className="font-display font-semibold">{tag}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="border-y border-white/[0.06] py-20 sm:py-28" aria-labelledby="audience-heading">
            <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-20">
              <SectionReveal>
                <SectionHeader badge="Built for" title="Businesses, startups, and creators" subtitle="The service supports people who need a modern website to explain what they do, establish trust, and create a solid foundation for long-term growth." align="left" headingId="audience-heading" />
              </SectionReveal>
              <StaggerContainer className="space-y-4">
                {["Businesses", "Startups", "Creators"].map((audience) => (
                  <StaggerItem key={audience}>
                    <div className="glass flex items-center gap-4 p-5">
                      <Check className="h-5 w-5 shrink-0 text-accent-cyan" aria-hidden />
                      <span className="font-display text-lg font-semibold text-text-primary">{audience}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="py-20 sm:py-28" aria-labelledby="approach-heading">
            <div className="section-container">
              <SectionReveal>
                <SectionHeader badge="Approach" title="A clear path from idea to launch" subtitle="The work moves through focused stages so the final website stays aligned with its purpose and requirements." headingId="approach-heading" />
              </SectionReveal>
              <StaggerContainer className="grid gap-4 md:grid-cols-5">
                {["Discovery", "Planning", "Design & Development", "Testing", "Launch"].map((step, index) => (
                  <StaggerItem key={step}>
                    <div className="h-full border-l border-accent-purple/40 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5">
                      <span className="text-sm font-semibold text-accent-cyan">0{index + 1}</span>
                      <h3 className="mt-3 font-display font-semibold text-text-primary">{step}</h3>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="border-y border-white/[0.06] py-20 sm:py-28" aria-labelledby="faq-heading">
            <div className="section-container max-w-4xl">
              <SectionReveal>
                <SectionHeader badge="FAQ" title="Website development questions" subtitle="Useful answers before you begin a project." headingId="faq-heading" />
              </SectionReveal>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="glass group p-5 open:border-accent-purple/30">
                    <summary className="cursor-pointer list-none pr-8 font-display font-semibold text-text-primary marker:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/50">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 sm:py-28" aria-labelledby="cta-heading">
            <div className="section-container">
              <SectionReveal>
                <div className="rounded-2xl border border-accent-purple/20 bg-gradient-to-r from-accent-purple/10 via-card/80 to-accent-cyan/10 p-8 text-center backdrop-blur-xl sm:p-12">
                  <h2 id="cta-heading" className="font-display text-3xl font-bold text-text-primary sm:text-4xl">Ready to build your website?</h2>
                  <p className="mx-auto mt-4 max-w-xl text-text-secondary">Tell me about your project and get a clear plan for the next steps.</p>
                  <Link href={sectionPath("contact")} className="btn-primary mt-7">Get a Free Quote<ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link>
                </div>
              </SectionReveal>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}