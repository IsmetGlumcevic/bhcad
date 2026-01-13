import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "./i18n";
import { SITE_URL } from "./lib/seo";

const ROUTES = ["/", "/about", "/services", "/our-team", "/contact"];

const localizedRoutes = ROUTES.flatMap((path) =>
  locales.map((locale) => {
    if (locale === defaultLocale) {
      return path;
    }
    if (path === "/") {
      return `/${locale}`;
    }
    return `/${locale}${path}`;
  }),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return localizedRoutes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
  }));
}
