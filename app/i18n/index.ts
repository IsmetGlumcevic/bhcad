import { deCopy } from "./de";
import { enCopy } from "./en";
import { nlCopy } from "./nl";

export const defaultLocale = "en" as const;
export const locales = ["en", "de", "nl"] as const;

export type Locale = (typeof locales)[number];
export type SiteCopy = typeof enCopy;

const copyByLocale: Record<Locale, SiteCopy> = {
  de: deCopy,
  en: enCopy,
  nl: nlCopy,
};

export function getCopy(locale: Locale = defaultLocale) {
  return copyByLocale[locale];
}
