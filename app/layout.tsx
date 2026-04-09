import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sundarlingam.vercel.app";

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
    default: "Sundar Lingam | Full-Stack Web Developer",
    template: "%s | Sundar Lingam",
  },
  description:
    "Hire a full-stack developer for React, Next.js, and Node.js. Fast delivery, clear communication, live projects. Available for Fiverr and contract work.",
  keywords: [
    "freelance developer",
    "Next.js developer",
    "React developer",
    "Fiverr developer",
    "full stack",
    "web development",
  ],
  alternates: {
    canonical: "/",
  },
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
    title: "Sundar Lingam | Full-Stack Developer (React, Next.js, Node.js)",
    description:
      "Production-ready web apps, APIs, and dashboards. Open for freelance and contract projects.",
    type: "website",
    url: "/",
    siteName: "Sundar Lingam Portfolio",
    images: [
      {
        url: "/hero-developer.svg",
        width: 1200,
        height: 1200,
        alt: "Sundar Lingam developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sundar Lingam | Full-Stack Developer",
    description:
      "React, Next.js, Node.js developer for freelance and contract projects.",
    images: ["/hero-developer.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
