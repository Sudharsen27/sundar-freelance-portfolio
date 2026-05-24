import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import VisitNotifier from "@/components/VisitNotifier";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sundarlingam.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/icon.svg", "/icon.png"],
    apple: "/icon.png",
  },
  title: {
    default: "Sundar Lingam | Digital Creator & Freelance Developer",
    template: "%s | Sundar Lingam",
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
  authors: [{ name: "Sundar Lingam" }],
  creator: "Sundar Lingam",
  publisher: "Sundar Lingam",
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
    title: "Sundar Lingam | Digital Creator & Freelance Developer",
    description:
      "Helping brands build their digital presence with modern websites and premium digital experiences.",
    type: "website",
    url: "/",
    siteName: "Sundar Lingam",
    images: [
      {
        url: "/sundar-hero.png",
        width: 800,
        height: 800,
        alt: "Sundar Lingam - Digital Creator & Freelancer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sundar Lingam | Digital Creator & Freelancer",
    description:
      "Modern websites, digital experiences, and business growth for brands and startups.",
    images: ["/sundar-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-bg font-sans antialiased">
        {children}
        <VisitNotifier />
        <Analytics />
      </body>
    </html>
  );
}
