'use client';

import Link from "next/link";
import { useState } from "react";
import type { NavigationItem } from "./types";
import { Logo } from "./Logo";

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-20 bg-linear-to-r from-[#5c8a72] via-[#5bb59f] to-[#6ce0cc] text-white shadow-lg">
      <div className="mx-auto flex h-[100px] max-w-7xl items-center justify-between px-4 md:px-6 lg:px-0">
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
        </div>
      </div>
    </header>
  );
}
