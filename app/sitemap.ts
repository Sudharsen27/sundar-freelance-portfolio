import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  // Define all sitemap entries with proper SEO priorities and change frequencies
  const routes: MetadataRoute.Sitemap = [
    // Homepage - highest priority, updated weekly due to content changes
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Case study / portfolio project - high priority for lead generation
    {
      url: `${siteUrl}/projects/restaurant-erp`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Service page - high priority for service landing
    {
      url: `${siteUrl}/services/website-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Service page - high priority for custom software and product engineering
    {
      url: `${siteUrl}/services/software-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return routes;
}
