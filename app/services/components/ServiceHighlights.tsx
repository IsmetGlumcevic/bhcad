import type { HomeService } from "../../data/services";

type ServiceHighlightsProps = {
  services: ReadonlyArray<HomeService>;
};

export function ServiceHighlights({ services }: ServiceHighlightsProps) {
  return (
    <div className="mt-4 md:mt-10 flex flex-wrap justify-center gap-2 md:gap-4">
      {services.map(({ title, icon: Icon }) => (
        <div
          key={title}
          className="group inline-flex items-center gap-1 md:gap-3 rounded-full border border-primary/10 bg-primary/5 px-2 md:px-4 py-1 md:py-2 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-lg"
        >
          <span className="flex h-6 md:h-10 w-6 md:w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon className="h-4 md:h-6 w-4 md:w-6" aria-hidden />
          </span>
          <span className="whitespace-pre-line text-left">{title}</span>
        </div>
      ))}
    </div>
  );
}
