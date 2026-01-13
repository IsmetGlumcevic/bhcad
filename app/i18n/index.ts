import type { ServiceContext } from "../data/services";
import { deCopy } from "./de";
import { enCopy } from "./en";
import { nlCopy } from "./nl";

export const defaultLocale = "en" as const;
export const locales = ["en", "de", "nl"] as const;

export type Locale = (typeof locales)[number];

type WidenLiteral<T> = T extends ServiceContext
  ? ServiceContext
  : T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends readonly (infer U)[]
  ? ReadonlyArray<WidenLiteral<U>>
  : T extends object
  ? { readonly [K in keyof T]: WidenLiteral<T[K]> }
  : T;

export type SiteCopy = WidenLiteral<typeof enCopy>;

const copyByLocale: Record<Locale, SiteCopy> = {
  de: deCopy,
  en: enCopy,
  nl: nlCopy,
};

export function getCopy(locale: Locale = defaultLocale) {
  return copyByLocale[locale];
}
