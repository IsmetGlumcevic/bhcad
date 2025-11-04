type AboutSectionProps = {
  heading: string;
  subheading: string;
  description: string;
  id?: string;
};

export function AboutSection({
  heading,
  subheading,
  description,
  id,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className="bg-surface py-16 md:py-20 lg:py-24"
      aria-labelledby={`${id ?? "about"}-heading`}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 text-center md:px-6 lg:px-8 lg:flex-row lg:text-left">
        <div className="flex-1">
          <h2
            id={`${id ?? "about"}-heading`}
            className="text-sm font-heading uppercase tracking-[0.35em] text-primary"
          >
            {heading}
          </h2>
          <p className="mt-4 text-3xl font-heading font-semibold text-foreground md:text-4xl">
            {subheading}
          </p>
        </div>
        <p className="flex-1 text-base text-muted md:text-lg">{description}</p>
      </div>
    </section>
  );
}
