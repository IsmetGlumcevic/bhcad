import Link from "next/link";
import type { Service } from "./types";

type ServicesSectionProps = {
  services: ReadonlyArray<Service>;
  heading: string;
  eyebrow: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  id?: string;
};

export function ServicesSection({
  services,
  heading,
  eyebrow,
  description,
  ctaLabel,
  ctaHref,
  id,
}: ServicesSectionProps) {
  return (
    <section
      id={id}
      className="bg-white py-20 md:py-24 lg:py-28"
      aria-labelledby={`${id ?? "services"}-heading`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-heading uppercase tracking-[0.35em] text-primary">
            {eyebrow}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted md:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {services.map(({ title, description: body, icon: Icon, featured }, index) => {
            const spanClass = index >= 3 ? "lg:col-span-3" : "lg:col-span-2";
            const featuredClass = featured
              ? "shadow-lg shadow-secondary/30 lg:translate-y-6"
              : "";

            return (
              <article
                key={title}
                className={[
                  "flex h-full flex-col items-center gap-5 border border-surface hover:bg-white p-10 text-center hover:shadow-2xl transition-shadow",
                  "md:col-span-1",
                  spanClass,
                  featuredClass,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="flex items-center justify-center">
                  <span className="flex h-[70px] w-[70px] items-center justify-center text-primary">
                    <Icon className="h-[70px] w-[70px]" aria-hidden />
                  </span>
                </div>
                <h3 className="text-4xl font-heading font-semibold text-primary">
                  {title}
                </h3>
                <p className="leading-relaxed text-muted">{body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={ctaHref}
            className="rounded-full bg-primary px-8 py-3 text-sm font-heading font-medium uppercase tracking-[0.25em] text-white shadow-md transition hover:bg-accent hover:shadow-lg"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
