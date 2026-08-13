import type { MetadataRoute } from "next";
import { SITE_URL, NAV } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return NAV.map((item) => ({
    url: item.href === "/" ? `${SITE_URL}/` : `${SITE_URL}${item.href}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
