import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GaRouteTracker from "@/components/GaRouteTracker";
import ScrollToHash from "@/components/ScrollToHash";
import VisitNotifier from "@/components/VisitNotifier";
import { getSiteUrl } from "@/lib/site";
import { BRAND_NAME, JOB_TITLE, OG_ALT, PAGE_TITLE, PERSON_NAME } from "@/lib/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: PAGE_TITLE,
    template: `%s | ${PERSON_NAME}`,
  },
  description:
    "Premium digital freelancer helping brands, startups, and creators build modern websites, landing pages, and digital experiences that drive business growth.",
  keywords: [
    "freelance developer",
    "digital creator",
    "website development",
    "landing pages",
    "UI/UX design",
    "portfolio websites",
    "business websites",
  ],
  alternates: { canonical: "/" },
  category: "technology",
  authors: [{ name: PERSON_NAME }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description:
      `${PERSON_NAME} — ${JOB_TITLE} at ${BRAND_NAME}. Modern websites, landing pages, and full-stack web apps for brands and startups.`,
    type: "website",
    url: "/",
    siteName: BRAND_NAME,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      `${PERSON_NAME} — ${JOB_TITLE}. Modern websites, landing pages, and full-stack web apps for brands and startups.`,
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-bg font-sans antialiased">
        <GaRouteTracker />
        <ScrollToHash />
        {children}
        <VisitNotifier />
        <Analytics />
      </body>
    </html>
  );
}
