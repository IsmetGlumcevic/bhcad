type TeamSectionProps = {
  eyebrow: string;
  heading: string;
  description: string;
  id?: string;
};

export function TeamSection({
  eyebrow,
  heading,
  description,
  id,
}: TeamSectionProps) {
  return (
    <section
      id={id}
      className="bg-surface py-16 md:py-20 lg:py-24"
      aria-labelledby={`${id ?? "team"}-heading`}
    >
      <div className="mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8">
        <h2
          id={`${id ?? "team"}-heading`}
          className="text-sm font-heading uppercase tracking-[0.35em] text-primary"
        >
          {eyebrow}
        </h2>
        <p className="mt-4 text-3xl font-heading font-semibold text-foreground md:text-4xl">
          {heading}
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-base text-muted md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
