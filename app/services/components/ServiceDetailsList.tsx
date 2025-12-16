import Image from "next/image";
import Link from "next/link";

import type { ServiceDetail } from "../../data/services";

type ServiceDetailsListProps = {
  services: ReadonlyArray<ServiceDetail>;
};

export function ServiceDetailsList({ services }: ServiceDetailsListProps) {
  return (
    <div className="mt-16 space-y-14">
      {services.map(({ title, paragraphs, description, image, imageAlt, icon: Icon }, index) => {
        const imageOnRight = index % 2 === 0;

        return (
          <article
            key={title}
            className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div
                className={`order-2 flex flex-col gap-4 px-6 pb-8 pt-6 md:order-1 ${
                  imageOnRight ? "" : "md:order-2"
                }`}
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
                  {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                  <span>Service</span>
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground md:text-3xl">{title}</h3>
                <p className="text-muted text-lg">
                  {paragraphs?.[0] ?? description ?? "Tailored support to keep your operations moving."}
                </p>
                {paragraphs?.[1] ? <p className="text-muted/90">{paragraphs[1]}</p> : null}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold  shadow-md transition hover:bg-primary/90"
                    aria-label={`Plan ${title} with bhCAD`}
                  >
                    <span className="text-white">Plan this with us <span aria-hidden>&rarr;</span></span>
                  </Link>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Delivery ready
                  </span>
                </div>
              </div>

              <div
                className={`relative h-full min-h-[260px] w-full ${imageOnRight ? "md:order-2" : "md:order-1"}`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  {image ? (
                    <Image
                      src={image}
                      alt={imageAlt ?? title}
                      fill
                      sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 hover:scale-105"
                      priority={title === "CAD/CAM Technical support"}
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-primary/10 via-white to-secondary/10" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  {Icon ? (
                    <span className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-primary shadow-md backdrop-blur">
                      <Icon className="h-7 w-7" aria-hidden />
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
