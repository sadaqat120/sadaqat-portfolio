import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { hirePages } from "@/lib/hire";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://sadaqatrasool.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: [string, number][] = [["", 1], ["/work", 0.9], ["/about", 0.9], ["/services", 0.8], ["/reviews", 0.8], ["/contact", 0.7]];
  return [
    ...pages.map(([p, priority]) => ({ url: `${SITE}${p}`, lastModified: now, changeFrequency: "weekly" as const, priority })),
    ...hirePages.map((h) => ({ url: `${SITE}/hire/${h.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projects.map((p) => ({ url: `${SITE}/work/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
