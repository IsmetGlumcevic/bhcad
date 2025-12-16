import { servicesIntro } from "./servicesContentData";
import {
  isEngineeringDiscipline,
  isHomeService,
  isServiceDetail,
  services,
} from "../../data/services";
import { EngineeringDisciplinesList } from "./EngineeringDisciplinesList";
import { ServiceDetailsList } from "./ServiceDetailsList";
import { ServiceHighlights } from "./ServiceHighlights";

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

        <ServiceHighlights services={homeServices} />

        <div className="mt-16 space-y-14">
          <ServiceDetailsList services={serviceDetails} />

          <div className="overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/10 via-white to-secondary/10 px-2 py-4 md:px-10 md:py-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[4px] text-primary">
                {servicesIntro.disciplinesEyebrow}
              </p>
              <h3 className="mt-2 text-3xl font-heading text-foreground md:text-4xl">
                {servicesIntro.disciplinesHeading}
              </h3>
              <p className="mt-4 text-muted">
                Deep, discipline-specific teams that pair engineering rigor with responsive delivery.
              </p>
            </div>

            <EngineeringDisciplinesList disciplines={engineeringDisciplines} />
          </div>
        </div>
      </div>
    </section>
  );
}
