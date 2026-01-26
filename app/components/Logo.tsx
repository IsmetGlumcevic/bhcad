import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
  href?: string;
};

export function Logo({ className, priority, href = "/" }: LogoProps) {
  const classes = ["h-[70px]", "w-auto", "object-contain"];
  if (className) classes.push(className);

  return (
    <Link href={href}>
      <Image
        src="/assets/bhcad-logo.png"
        alt="bhCAD logo"
        width={154}
        height={70}
        className={classes.join(" ")}
        priority={priority}
      />
    </Link>
  );
}
