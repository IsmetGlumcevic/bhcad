'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { NavigationItem } from "./types";
import { Logo } from "./Logo";
import { defaultLocale, getCopy, locales, type Locale } from "../i18n";

const languageNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  nl: "Nederlands",
};

type HeaderLabels = {
  openMenu: string;
  closeMenu: string;
};

type HeaderProps = {
  navigation: ReadonlyArray<NavigationItem>;
  labels: HeaderLabels;
};

export function Header({ navigation, labels }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const [hash, setHash] = useState("");

  const closeMenu = () => setIsMenuOpen(false);
  const queryString = searchParams.toString();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname, queryString]);

  const { currentLocale, basePath } = useMemo(() => {
    const matchedLocale =
      locales.find((locale) => {
        if (locale === defaultLocale) return false;
        const prefix = `/${locale}`;
        return pathname === prefix || pathname.startsWith(`${prefix}/`);
      }) ?? defaultLocale;

    if (matchedLocale === defaultLocale) {
      return {
        currentLocale: matchedLocale,
        basePath: pathname || "/",
      };
    }

    const prefix = `/${matchedLocale}`;
    const strippedPath = pathname.startsWith(prefix)
      ? pathname.slice(prefix.length)
      : pathname;

    return {
      currentLocale: matchedLocale,
      basePath: strippedPath === "" ? "/" : strippedPath,
    };
  }, [pathname]);

  const languageLabel = getCopy(currentLocale).header.languageLabel;

  const buildLocaleHref = (locale: Locale) => {
    const prefix = locale === defaultLocale ? "" : `/${locale}`;
    const path = `${prefix}${basePath === "/" ? "" : basePath}` || "/";
    const query = queryString ? `?${queryString}` : "";
    return `${path}${query}${hash}`;
  };

  const renderLanguageLinks = (
    variant: "desktop" | "mobile",
    onSelect?: () => void,
  ) => {
    const isDesktop = variant === "desktop";
    const containerClass = isDesktop
      ? "hidden md:flex items-center rounded-full bg-white/15 p-1"
      : "flex items-center rounded-full bg-white/80 p-1";
    const linkBase =
      "rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition";
    const activeClass = isDesktop
      ? "bg-white text-[#1f3f36]"
      : "bg-gray-900 text-white";
    const inactiveClass = isDesktop
      ? "text-white/90 hover:bg-white/25"
      : "text-gray-900/80 hover:bg-black/10";

    return (
      <nav aria-label={languageLabel} className={containerClass}>
        {locales.map((locale) => {
          const isActive = locale === currentLocale;
          return (
            <Link
              key={locale}
              href={buildLocaleHref(locale)}
              className={`${linkBase} ${isActive ? activeClass : inactiveClass}`}
              aria-current={isActive ? "page" : undefined}
              aria-label={languageNames[locale]}
              onClick={onSelect}
            >
              {locale.toUpperCase()}
            </Link>
          );
        })}
      </nav>
    );
  };

  return (
    <header className="relative z-20 bg-linear-to-r from-[#5c8a72] via-[#5bb59f] to-[#6ce0cc] text-white shadow-lg">
      <div className="mx-auto flex h-[100px] max-w-[1600px] items-center justify-between px-4 md:px-6 lg:px-0">
        <Logo priority />
        <div className="flex items-center gap-3 md:gap-8">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8 text-[17px] font-sans">
              {navigation.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="transition hover:text-black/80"
                    scroll={href.startsWith("#")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {renderLanguageLinks("desktop")}
          <button
            type="button"
            aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-30 transform transition md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-64 max-w-[80%] flex-col bg-primary text-gray-900 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
            <Logo className="h-10" />
            <button
              type="button"
              aria-label={labels.closeMenu}
              onClick={closeMenu}
              className="rounded-full p-2 text-gray-200 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5bb59f]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
          <nav className="px-4 py-4" aria-label="Primary mobile">
            <ul className="space-y-3 text-base font-sans">
              {navigation.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="block rounded-md px-2 py-2 transition"
                    scroll={href.startsWith("#")}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 border-t border-gray-200 px-4 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-900">
              {languageLabel}
            </p>
            <div className="mt-3 flex">
              {renderLanguageLinks("mobile", closeMenu)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
