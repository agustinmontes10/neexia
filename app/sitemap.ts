import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/site";
import { services, cases } from "@/app/lib/landing-data";
import { industries } from "@/app/lib/industries-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/industrias`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...services.map((s) => ({
      url: `${SITE_URL}/servicios/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...industries.map((i) => ({
      url: `${SITE_URL}/industrias/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...cases.map((c) => ({
      url: `${SITE_URL}/casos/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
