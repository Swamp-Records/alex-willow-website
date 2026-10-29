import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alexwillowmusic.com";
  return ["", "/EPK", "/shows", "/contact", "/lyrics"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}