import type { MetadataRoute } from "next";
import { SITE, SERVICES, BLOG_POSTS } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/about/", "/contact/", "/get-a-quote/", "/faq/", "/service-areas/", "/blog/", "/privacy/", "/terms/"];
  const servicePaths = SERVICES.map((s) => `/${s.slug}/`);
  const blogPaths = BLOG_POSTS.map((p) => `/blog/${p.slug}/`);
  const all = [...staticPaths, ...servicePaths, ...blogPaths];
  return all.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
