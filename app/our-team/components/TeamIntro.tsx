import Image from "next/image";

type TeamIntroProps = {
  heading: string;
  highlightLabel: string;
  description: string;
};

export function TeamIntro({ heading, highlightLabel, description }: TeamIntroProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-[1600px] items-center gap-4 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-heading font-semibold text-primary md:text-4xl">
            {heading}
          </h2>
          <p className="md:text-lg text-muted">
            <span className="font-semibold text-foreground">{highlightLabel}</span> {description}
          </p>
        </div>
        <div className="relative mx-auto h-24 w-[300px] md:h-34 md:w-[520px] lg:h-40 lg:w-[620px]">
          <Image
            src="/assets/bhcad-logo-green.png"
            alt="bhCAD green logo"
            fill
            sizes="620px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
