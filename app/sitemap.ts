import type { MetadataRoute } from "next";

const routes = [
  "",
  "/what-it-is",
  "/philosophy",
  "/philosophy/focus10",
  "/philosophy/link",
  "/in-practice",
  "/chapters",
  "/chapters/leadership",
  "/history",
  "/join",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `https://ourbizgps.com${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
