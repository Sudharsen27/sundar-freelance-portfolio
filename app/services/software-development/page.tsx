import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  LockKeyhole,
  Network,
  ServerCog,
  Workflow,
} from "lucide-react";

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
import { getSiteUrl } from "@/lib/site";

const path = "/services/software-development";
const canonicalUrl = "https://www.sundardigital.in/services/software-development";
const title =
  "Software Development Company in Chennai | Sundar Digital";
const description =
  "Sundar Digital builds custom software, SaaS products, web applications, dashboards, CRM and ERP systems for startups and businesses in Chennai and beyond.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title,
    description,
    type: "website",
    url: canonicalUrl,
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const capabilities = [
  {
    icon: Code2,
    title: "Custom software development",
    text: "Software designed around your workflows, operational needs, and business goals, including dashboards, reporting tools, and internal systems.",
  },
  {
    icon: LayoutDashboard,
    title: "Web application development",
    text: "Business-facing applications, admin systems, portals, and customer workflows that make data, users, and processes easier to manage.",
  },
  {
    icon: Boxes,
    title: "SaaS product development",
    text: "SaaS products with role-based access, dashboards, APIs, data models, and multi-user experiences that can grow with the product.",
  },
  {
    icon: Workflow,
    title: "Business software and operational systems",
    text: "Practical platforms for inventory, procurement, reporting, CRM workflows, ERP-style operations, and process visibility.",
  },
];

const softwareTypes = [
  { icon: BarChart3, label: "Dashboards and reporting tools" },
  { icon: Network, label: "CRM and sales workflows" },
  { icon: Boxes, label: "ERP and operational platforms" },
  { icon: LayoutDashboard, label: "Internal business portals and tools" },
  { icon: Code2, label: "API-driven software and integrations" },
  { icon: ServerCog, label: "SaaS products and product MVPs" },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "AWS CDK",
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "Clarify the business goal, user needs, workflows, requirements, and technical constraints.",
  },
  {
    number: "02",
    title: "Product and system design",
    text: "Map the product flow, core modules, user experience, data model, and architecture.",
  },
  {
    number: "03",
    title: "Development and integration",
    text: "Build application logic, interfaces, workflows, APIs, and the integrations the product needs.",
  },
  {
    number: "04",
    title: "Testing and refinement",
    text: "Validate usability, reliability, and technical correctness before launch.",
  },
  {
    number: "05",
    title: "Deployment and support",
    text: "Deliver a maintainable product with deployment-ready implementation for ongoing growth.",
  },
];

const faqs = [
  {
    question: "What kinds of software does Sundar Digital build?",
    answer:
      "Sundar Digital builds custom web applications, SaaS products, dashboards, CRM systems, ERP-style platforms, internal business tools, and operational software for startups and growing businesses.",
  },
  {
    question: "Do you build SaaS products and business software?",
    answer:
      "Yes. The work includes SaaS product development, dashboards, multi-user product experiences, role-based access patterns, and business systems designed with future growth in mind.",
  },
  {
    question: "Can you build software for operations and reporting?",
    answer:
      "Yes. Sundar Digital works on software that supports reporting, dashboards, CRM workflows, ERP-style operations, and clearer access to business information.",
  },
  {
    question: "What does a software development project include?",
    answer:
      "Depending on the scope, a project can include discovery, technical planning, product design, development, API integrations, testing, and deployment-ready implementation.",
  },
];

export default function SoftwareDevelopmentPage() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}${path}#service`,
        name: "Custom Software Development",
        description,
        url: canonicalUrl,
        provider: {
          "@type": "Organization",
          name: BRAND_NAME,
          url: siteUrl,
        },
        serviceType: "Software Development",
        areaServed: "Chennai",
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
                  <li>
                    <Link href="/" className="transition hover:text-text-primary">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden className="text-accent-cyan">/</li>
                  <li>
                    <Link
                      href={sectionPath("services")}
                      className="transition hover:text-text-primary"
                    >
                      Services
                    </Link>
                  </li>
                  <li aria-hidden className="text-accent-cyan">/</li>
                  <li aria-current="page" className="text-text-primary">
                    Software Development
                  </li>
                </ol>
              </nav>

              <div className="mt-16 max-w-4xl sm:mt-20">
                <SectionReveal>
                  <span className="badge">Software Product Engineering</span>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-6xl">
                    Custom software, SaaS and web applications built for business growth
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                    Sundar Digital helps startups, businesses, and growing teams build
                    custom software, web applications, and SaaS platforms that support
                    operations, improve visibility, and create a stronger digital foundation.
                  </p>
                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                    From internal dashboards and CRM workflows to enterprise systems and
                    product platforms, we build software that fits the way your business
                    works and scales with it.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href={sectionPath("contact")} className="btn-primary">
                      Discuss Your Software Project
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                    <Link href="/projects/restaurant-erp" className="btn-secondary">
                      View Restaurant ERP Case Study
                    </Link>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          <section className="border-y border-white/[0.06] py-20 sm:py-28" aria-labelledby="capabilities-heading">
            <div className="section-container">
              <SectionReveal>
                <SectionHeader
                  badge="What we build"
                  title="Software shaped around how your business works"
                  subtitle="Product thinking, engineering execution, and practical architecture come together to support real business needs."
                  headingId="capabilities-heading"
                />
              </SectionReveal>
              <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                {capabilities.map(({ icon: Icon, title: capabilityTitle, text }) => (
                  <StaggerItem key={capabilityTitle}>
                    <article className="premium-card h-full p-6 sm:p-7">
                      <Icon className="h-6 w-6 text-accent-cyan" aria-hidden />
                      <h3 className="mt-5 font-display text-xl font-semibold text-text-primary">
                        {capabilityTitle}
                      </h3>
                      <p className="mt-3 leading-relaxed text-text-secondary">{text}</p>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="py-20 sm:py-28" aria-labelledby="software-types-heading">
            <div className="section-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <SectionReveal>
                <SectionHeader
                  badge="Software types"
                  title="Useful systems for products and operations"
                  subtitle="The focus is software that helps teams work more clearly, serve customers better, and make informed decisions."
                  align="left"
                  headingId="software-types-heading"
                />
              </SectionReveal>
              <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                {softwareTypes.map(({ icon: Icon, label }) => (
                  <StaggerItem key={label}>
                    <div className="glass flex min-h-20 items-center gap-4 p-5">
                      <Icon className="h-5 w-5 shrink-0 text-accent-cyan" aria-hidden />
                      <span className="font-display font-semibold text-text-primary">{label}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="border-y border-white/[0.06] py-20 sm:py-28" aria-labelledby="architecture-heading">
            <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-20">
              <SectionReveal>
                <SectionHeader
                  badge="Technology and architecture"
                  title="A modern foundation that can grow with the product"
                  subtitle="Technology choices follow the product requirements, user experience, data needs, and deployment context."
                  align="left"
                  headingId="architecture-heading"
                />
                <p className="mt-6 max-w-xl leading-relaxed text-text-secondary">
                  Sundar Digital works with React and Next.js for interfaces, Node.js and
                  FastAPI for application logic, PostgreSQL and MongoDB for data persistence,
                  and AWS and Docker for deployment-ready systems. The architecture is kept
                  clear, modular, and aligned with the actual business need.
                </p>
              </SectionReveal>
              <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                {technologies.map((technology) => (
                  <StaggerItem key={technology}>
                    <div className="glass flex items-center gap-3 p-5 text-text-primary">
                      <Code2 className="h-5 w-5 text-accent-purple" aria-hidden />
                      <span className="font-display font-semibold">{technology}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="py-20 sm:py-28" aria-labelledby="process-heading">
            <div className="section-container">
              <SectionReveal>
                <SectionHeader
                  badge="Development process"
                  title="A clear path from idea to working software"
                  subtitle="The process keeps requirements, communication, and delivery practical from the start."
                  headingId="process-heading"
                />
              </SectionReveal>
              <StaggerContainer className="grid gap-5 md:grid-cols-5">
                {processSteps.map((step) => (
                  <StaggerItem key={step.number}>
                    <div className="h-full border-l border-accent-purple/40 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5">
                      <span className="text-sm font-semibold text-accent-cyan">{step.number}</span>
                      <h3 className="mt-3 font-display font-semibold text-text-primary">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="border-y border-white/[0.06] py-20 sm:py-28" aria-labelledby="why-heading">
            <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-20">
              <SectionReveal>
                <SectionHeader
                  badge="Why Sundar Digital"
                  title="A software and product engineering partner"
                  subtitle="Sundar Digital brings product thinking, engineering execution, and a clear focus on business outcomes."
                  align="left"
                  headingId="why-heading"
                />
              </SectionReveal>
              <StaggerContainer className="space-y-4">
                {[
                  "Software shaped around your real workflows and users",
                  "Clear communication from requirements through delivery",
                  "Architecture designed for maintainability and future growth",
                  "A practical blend of product thinking and technical execution",
                ].map((point) => (
                  <StaggerItem key={point}>
                    <div className="glass flex items-start gap-4 p-5">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-cyan" aria-hidden />
                      <span className="leading-relaxed text-text-primary">{point}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            <div className="section-container mt-10">
              <SectionReveal>
                <p className="max-w-3xl leading-relaxed text-text-secondary">
                  Led by Sundar Lingam, the work is grounded in practical delivery and
                  software that is built to support the next stage of a business. You get a
                  partner focused on the system as a whole, not only isolated development tasks.
                </p>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 sm:py-28" aria-labelledby="case-study-heading">
            <div className="section-container">
              <SectionReveal>
                <SectionHeader
                  badge="Case study"
                  title="Built for real business systems and scalable operations"
                  subtitle="The Restaurant ERP Platform demonstrates enterprise-style software for multi-location operations, inventory, procurement, dashboards, and reporting."
                  headingId="case-study-heading"
                />
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <div className="premium-card mt-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <Database className="h-6 w-6 text-accent-cyan" aria-hidden />
                      <h3 className="font-display text-2xl font-semibold text-text-primary">
                        Restaurant ERP Platform
                      </h3>
                    </div>
                    <p className="mt-4 max-w-3xl leading-relaxed text-text-secondary">
                      The project combines business workflows with cloud-aware architecture,
                      including React, FastAPI, PostgreSQL, Redis, Docker, Amazon ECS, Amazon RDS,
                      and infrastructure as code. It is a useful example of how Sundar Digital
                      approaches complex operational software.
                    </p>
                  </div>
                  <Link href="/projects/restaurant-erp" className="btn-secondary whitespace-nowrap">
                    Read the case study
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="border-y border-white/[0.06] py-20 sm:py-28" aria-labelledby="related-heading">
            <div className="section-container">
              <SectionReveal>
                <SectionHeader
                  badge="Explore more"
                  title="Related work and services"
                  subtitle="See how software product engineering connects with websites and real project delivery at Sundar Digital."
                  headingId="related-heading"
                />
              </SectionReveal>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <SectionReveal delay={0.1}>
                  <Link href="/" className="glass block h-full p-6 transition hover:border-accent-cyan/30">
                    <h3 className="font-display text-xl font-semibold text-text-primary">Sundar Digital</h3>
                    <p className="mt-2 leading-relaxed text-text-secondary">
                      Explore the broader brand, services, skills, and project portfolio.
                    </p>
                  </Link>
                </SectionReveal>
                <SectionReveal delay={0.15}>
                  <Link href="/services/website-development" className="glass block h-full p-6 transition hover:border-accent-cyan/30">
                    <h3 className="font-display text-xl font-semibold text-text-primary">Website Development</h3>
                    <p className="mt-2 leading-relaxed text-text-secondary">
                      For business websites, landing pages, and digital experiences focused on credibility and growth.
                    </p>
                  </Link>
                </SectionReveal>
              </div>
            </div>
          </section>

          <section className="py-20 sm:py-28" aria-labelledby="faq-heading">
            <div className="section-container max-w-4xl">
              <SectionReveal>
                <SectionHeader
                  badge="FAQ"
                  title="Software development questions"
                  subtitle="Useful answers before you begin a project."
                  headingId="faq-heading"
                />
              </SectionReveal>
              <div className="mt-10 space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="premium-card group p-5">
                    <summary className="cursor-pointer list-none pr-8 font-display font-semibold text-text-primary marker:hidden">
                      {faq.question}
                    </summary>
                    <p className="mt-3 leading-relaxed text-text-secondary">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-white/[0.06] py-20 sm:py-28" aria-labelledby="cta-heading">
            <div className="section-container text-center">
              <SectionReveal>
                <SectionHeader
                  badge="Start a project"
                  title="Let’s build the right software for your business"
                  subtitle="Tell Sundar Digital about your software platform, dashboard, SaaS product, or business system and get a clear next step."
                  headingId="cta-heading"
                />
                <Link href={sectionPath("contact")} className="btn-primary mt-8 inline-flex">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
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
