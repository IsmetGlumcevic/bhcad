import type { NavigationItem } from "./types";

// Common navigation for standalone pages
export const defaultNavigation: ReadonlyArray<NavigationItem> = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Our team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

export const homeNavigation = defaultNavigation;
export const aboutNavigation = defaultNavigation;
export const teamNavigation = defaultNavigation;
export const servicesNavigation = defaultNavigation;
export const contactNavigation = defaultNavigation;
