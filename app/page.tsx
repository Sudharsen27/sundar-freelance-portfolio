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

export default function Home() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sundarlingam.vercel.app";
  const linkedInUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/sundar-lingam";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sundar Lingam",
    url: siteUrl,
    jobTitle: "Digital Creator & Freelance Developer",
    email: "mailto:hello.sundardigital@gmail.com",
    telephone: "+916382519651",
    sameAs: ["https://github.com/Sudharsen27", linkedInUrl],
    knowsAbout: [
      "Website Development",
      "UI/UX Design",
      "React",
      "Next.js",
      "Landing Pages",
      "Business Websites",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sundar Lingam Portfolio",
    url: siteUrl,
    inLanguage: "en",
    potentialAction: {
      "@type": "ContactAction",
      target: `${siteUrl}/#contact`,
      name: "Contact Sundar Lingam",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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

        <Navbar />

        <main>
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
