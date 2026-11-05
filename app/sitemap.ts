import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://sadaqatrasool.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/services", "/about", "/contact"].map((p) => ({ url: `${SITE}${p}` }));
  return [...pages, ...projects.map((p) => ({ url: `${SITE}/work/${p.slug}` }))];
}
