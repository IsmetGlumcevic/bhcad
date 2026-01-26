import Link from "next/link";
import { Logo } from "./Logo";

type SiteFooterProps = {
  email: string;
  companyName: string;
  copyrightLabel: string;
  homeHref?: string;
  id?: string;
};

export function SiteFooter({
  email,
  companyName,
  copyrightLabel,
  homeHref,
  id,
}: SiteFooterProps) {
  return (
    <footer
      id={id}
      className="bg-primary border-t border-gray-200 py-10 text-center text-white md:py-12"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-6 px-4 md:flex-row md:justify-between md:px-6 lg:px-8">
        <Logo href={homeHref} />
        <div className="text-sm text-white/80">
          {copyrightLabel} {new Date().getFullYear()} {" "}
          <span className="font-heading font-semibold">{companyName}</span>
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
