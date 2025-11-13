import type { NavigationItem } from "./types";

// Common navigation for standalone pages
export const defaultNavigation: ReadonlyArray<NavigationItem> = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Our team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

// Home page anchors within the same page
export const homeNavigation: ReadonlyArray<NavigationItem> = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "/about" },
  { label: "Our services", href: "#services" },
  { label: "Our team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

// About page prefers linking to sections on the home page
export const aboutNavigation: ReadonlyArray<NavigationItem> = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Our team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

// Our team page prefers home contact anchor
export const teamNavigation: ReadonlyArray<NavigationItem> = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Our team", href: "/our-team" },
  { label: "Contact", href: "/#contact" },
];

// Services and Contact pages use the standard routes
export const servicesNavigation = defaultNavigation;
export const contactNavigation = defaultNavigation;

