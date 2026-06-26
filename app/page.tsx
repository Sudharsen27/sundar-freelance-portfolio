import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import { getSiteUrl } from "@/lib/site";
import { buildStructuredDataGraph } from "@/lib/structured-data";

export default function Home() {
  const siteUrl = getSiteUrl();
  const linkedInUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/sundar-lingam";

  const structuredData = buildStructuredDataGraph({ siteUrl, linkedInUrl });

  return (
    <>
      <JsonLd data={structuredData} />

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
          <Hero />
          <About />
          <Services />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
