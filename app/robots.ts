import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …) are
    // intentionally left allowed via "*" — we want the site cited in generative
    // answers. Only the API route is off-limits.
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
