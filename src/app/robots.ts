import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/",
        "/static/",
        "/api/",
      ],
    },
    sitemap: "https://www.verlakcorporation.com/sitemap.xml",
  };
}
