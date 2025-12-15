import Link from "next/link";

import { servicesIntro } from "./servicesContentData";
import {
  isEngineeringDiscipline,
  isHomeService,
  isServiceDetail,
  services,
} from "../../data/services";

const homeServices = services.filter(isHomeService);
const serviceDetails = services.filter(isServiceDetail);
const engineeringDisciplines = services.filter(isEngineeringDiscipline);

export function ServicesContent() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-heading tracking-[5px] text-primary">{servicesIntro.heading}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted md:text-2xl">{servicesIntro.description}</p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-10 text-center md:grid-cols-3 md:text-xl" role="list">
          {homeServices.map(({ title, icon: Icon }) => (
            <li key={title} className="flex flex-col items-center gap-3">
              <Icon className="h-16 w-16 text-primary" aria-hidden />
              <h3 className="font-bold">{title}</h3>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-[17px]">
          {serviceDetails.map(({ title, paragraphs }) => (
            <article key={title}>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              {paragraphs.map((text, index) => (
                <p
                  key={`${title}-paragraph-${index + 1}`}
                  className={`${index === 0 ? "mt-2" : "mt-4"} text-muted`}
                >
                  {text}
                </p>
              ))}
            </article>
          ))}
        </div>

        <div className="mt-16 text-[17px]">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-primary">
              {servicesIntro.disciplinesEyebrow}
            </p>
            <h3 className="mt-2 text-3xl font-heading text-foreground">
              {servicesIntro.disciplinesHeading}
            </h3>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {engineeringDisciplines.map(({ title, paragraphs, ctaHref, ctaLabel, ariaLabel }) => (
              <article
                key={title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-6 text-left"
              >
                <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                {paragraphs.map((text, index) => (
                  <p key={`${title}-discipline-${index + 1}`} className="text-muted">
                    {text}
                  </p>
                ))}
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80"
                  aria-label={ariaLabel}
                >
                  {ctaLabel} <span aria-hidden>&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
