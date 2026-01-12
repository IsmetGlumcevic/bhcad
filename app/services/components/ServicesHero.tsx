import Image from "next/image";

type ServicesHeroProps = {
  heading: string;
  descriptionParts: {
    intro: string;
    companyName: string;
    outro: string;
  };
};

export function ServicesHero({ heading, descriptionParts }: ServicesHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/assets/service/services-hero.png"
          alt="bhCAD team at work"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/40" />
      </div>
      <div className="relative mx-auto flex min-h-[56vh] w-full max-w-4xl flex-col items-center justify-center gap-4 px-4 py-16 text-center md:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-semibold md:text-5xl">{heading}</h1>
        <p className="max-w-2xl text-white md:text-3xl">
          {descriptionParts.intro}
          <span className="font-heading">{descriptionParts.companyName}</span>
          {descriptionParts.outro}
        </p>
      </div>
    </section>
  );
}
