import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";

import ScrollToHash from "@/components/ScrollToHash";
import ChatWidget from "@/components/AIChatbot/ChatWidget";
import CookieConsent from "@/components/CookieConsent";

import { getSiteUrl } from "@/lib/site";
import {
  BRAND_NAME,
  JOB_TITLE,
  PAGE_TITLE,
  PERSON_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  CONTACT_PHONE,
} from "@/lib/brand";

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
    default: "Sundar Digital | Software, AI & Digital Solutions",
    template: `%s | ${PERSON_NAME}`,
  },

  description:
    "Sundar Digital builds modern software, AI solutions, web applications, SaaS products, and digital solutions for businesses, startups, and creators.",

  keywords: [
    "Sundar Digital",
    "Sundar Lingam",
    "software engineer",
    "web development",
    "website development",
    "custom software development",
    "web application development",
    "SaaS development",
    "AI agents",
    "AI automation",
    "CRM development",
    "ERP development",
    "AWS development",
    "AWS cloud",
    "DevOps",
    "restaurant ERP",
  ],

  alternates: {
    canonical: "https://www.sundardigital.in/",
  },

  category: "technology",

  authors: [
    {
      name: PERSON_NAME,
      url: siteUrl,
    },
  ],

  creator: PERSON_NAME,
  publisher: BRAND_NAME,

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
    title: "Sundar Digital | Software, AI & Digital Solutions",

    description:
      "Sundar Digital builds modern websites, custom web applications, SaaS products, AI solutions, CRM systems, ERP solutions, and AWS-powered software for businesses and startups.",

    type: "website",
    url: siteUrl,
    siteName: BRAND_NAME,
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",

    title: "Sundar Digital | Software, AI & Digital Solutions",

    description:
      "Modern websites, custom software, SaaS products, AI solutions, CRM, ERP, AWS, and DevOps services from Sundar Digital.",
  },

  other: {
    "contact:email": CONTACT_EMAIL,
    "contact:phone": CONTACT_PHONE,
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
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen bg-bg font-sans antialiased">
        <CookieConsent>
          <ScrollToHash />
          {children}
          <ChatWidget />
        </CookieConsent>
      </body>
    </html>
  );
}