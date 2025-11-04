import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority }: LogoProps) {
  const classes = ["h-20", "w-auto", "object-contain"];
  if (className) classes.push(className);

  return (
    <Image
      src="/assets/bhcad-logo.png"
      alt="bhCAD logo"
      width={154}
      height={70}
      className={classes.join(" ")}
      priority={priority}
    />
  );
}
