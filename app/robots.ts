import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "PerplexityBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://eddahby.tech/sitemap.xml",
    host: "https://eddahby.tech",
  };
}
