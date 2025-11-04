type HeroIntroProps = {
  backgroundImage: string;
  eyebrow: string;
  heading: string;
  description: string;
};

export function HeroIntro({
  backgroundImage,
  eyebrow,
  heading,
  description,
}: HeroIntroProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-neutral-900 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#0f172a]/70 mix-blend-multiply" />
      <div className="relative mx-auto flex w-full min-h-screen max-w-7xl flex-col justify-center gap-6 px-4 py-20 text-center text-white md:px-6 md:py-24 lg:px-8">
        <p className="w-full font-heading uppercase tracking-[0.35em] text-secondary">
          {eyebrow}
        </p>
        <h1 className="text-9xl font-heading font-semibold uppercase leading-tight md:text-8xl max-w-4xl mx-auto">
          {heading}
        </h1>
        <p className="mx-auto max-w-lg text-white/85 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
