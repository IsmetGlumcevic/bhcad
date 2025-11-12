import Link from "next/link";
import type { NavigationItem } from "./types";
import { Logo } from "./Logo";

type HeaderProps = {
  navigation: ReadonlyArray<NavigationItem>;
};

export function Header({ navigation }: HeaderProps) {
  return (
    <header className="relative z-20 bg-linear-to-r from-[#5c8a72] via-[#5bb59f] to-[#6ce0cc] text-white shadow-lg">
      <div className="mx-auto flex h-[100px] max-w-7xl items-center justify-between px-4 md:px-6 lg:px-0">
        <Logo priority />
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-8 text-[17px] font-sans md:flex">
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
      </div>
      <div className="mx-auto block w-full max-w-7xl px-4 pb-4 md:hidden">
        <nav aria-label="Primary mobile">
          <ul className="flex items-center gap-4 overflow-x-auto whitespace-nowrap text-[0.65rem] font-sans">
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
      </div>
    </header>
  );
}
