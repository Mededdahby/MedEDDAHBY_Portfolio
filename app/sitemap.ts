import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

const baseUrl = "https://eddahby.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contacts`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const studies: MetadataRoute.Sitemap = caseStudies.map(({ slug }) => ({
    url: `${baseUrl}/projects/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...studies];
}
