import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.verlakcorporation.com";

  // Core static pages
  const coreRoutes = [
    "",
    "/about",
    "/leadership",
    "/services",
    "/contact",
    "/research",
    "/client-portal",
    "/disclosures",
    "/investor-charter",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  // Dynamic service slugs
  const serviceSlugs = [
    "wealth-management",
    "portfolio-management",
    "investment-advisory",
    "alternative-investments",
    "family-office-services",
    "estate-succession",
    "global-investments",
    "corporate-advisory",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1.0 : 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return sitemapEntries;
}
