import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Sundar Lingam | React & Next.js Developer for Hire | Freelance Full-Stack",
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
  openGraph: {
    title: "Sundar Lingam | Full-Stack Developer (React, Next.js, Node.js)",
    description:
      "Production-ready web apps, APIs, and dashboards. Open for freelance and contract projects.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
