import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

const ROUTES = ["/", "/about", "/services", "/our-team", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
  }));
}

