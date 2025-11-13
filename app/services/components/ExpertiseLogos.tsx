import Image from "next/image";

export type ExpertiseLogo = {
  src: string;
  alt: string;
};

type ExpertiseLogosProps = {
  logos: ReadonlyArray<ExpertiseLogo>;
};

export function ExpertiseLogos({ logos }: ExpertiseLogosProps) {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-heading tracking-[5px] text-primary">
            Our software <span className="text-foreground">expertise</span>
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo) => (
            <li key={logo.src} className="border border-surface bg-white p-4 shadow-sm">
              <div className="relative mx-auto aspect-square w-24">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="100px"
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-center text-xs text-muted">{logo.alt}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

