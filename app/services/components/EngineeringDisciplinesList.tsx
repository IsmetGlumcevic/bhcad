import Image from "next/image";
import Link from "next/link";

import type { EngineeringDiscipline } from "../../data/services";

type EngineeringDisciplinesListProps = {
  disciplines: ReadonlyArray<EngineeringDiscipline>;
};

export function EngineeringDisciplinesList({ disciplines }: EngineeringDisciplinesListProps) {
  return (
    <div className="mt-10 space-y-10">
      {disciplines.map(
        ({ title, paragraphs, ctaHref, ctaLabel, ariaLabel, image, imageAlt, icon: Icon }, index) => {
          const imageOnRight = index % 2 === 0;

          return (
            <article
              key={title}
              className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                <div
                  className={`relative h-full min-h-[240px] w-full ${imageOnRight ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    {image ? (
                      <Image
                        src={image}
                        alt={imageAlt ?? title}
                        fill
                        sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 hover:scale-105"
                        priority={title === "Mechanical Engineering"}
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-r from-primary/20 via-white to-secondary/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                    {Icon ? (
                      <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-primary shadow-md backdrop-blur">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    ) : null}
                  </div>
                </div>

                <div
                  className={`order-2 flex flex-col gap-4 px-6 pb-8 pt-6 md:order-1 ${
                    imageOnRight ? "" : "md:order-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
                    {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                    <span>Engineering discipline</span>
                  </div>
                  <h4 className="text-2xl font-heading font-semibold text-foreground md:text-3xl">{title}</h4>
                  <p className="text-muted text-lg">{paragraphs[0]}</p>
                  {paragraphs[1] ? <p className="text-muted/90">{paragraphs[1]}</p> : null}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href={ctaHref}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold  shadow-md transition hover:bg-primary/90"
                      aria-label={ariaLabel}
                    >
                      <span className="text-white">{ctaLabel} <span aria-hidden>&rarr;</span></span>
                    </Link>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                      Built for precision
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        }
      )}
    </div>
  );
}
