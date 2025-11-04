import Link from "next/link";
import { Logo } from "./Logo";

type SiteFooterProps = {
  email: string;
  id?: string;
};

export function SiteFooter({ email, id }: SiteFooterProps) {
  return (
    <footer id={id} className="bg-primary border-t border-gray-200 py-10 text-center text-white md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between md:px-6 lg:px-8">
        <Logo />
        <div className="text-sm text-white/80">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="font-heading font-semibold">bhCAD</span>
        </div>
        <Link
          href={`mailto:${email}`}
          className="text-sm font-heading uppercase tracking-[0.25em] text-secondary transition hover:text-white"
        >
          {email}
        </Link>
      </div>
    </footer>
  );
}
