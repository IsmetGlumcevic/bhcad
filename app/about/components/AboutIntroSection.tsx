import Image from "next/image";
import type { AboutIntroContent } from "../../data/about";

type AboutIntroSectionProps = {
  content: AboutIntroContent;
};

export function AboutIntroSection({ content }: AboutIntroSectionProps) {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#e8f7f1] via-[#e9fbf7] to-[#c9f2e5] py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <h1
          id="about-heading"
          className="text-center text-5xl font-heading tracking-[3px] text-primary md:text-6xl"
        >
          {content.heading}
        </h1>

        <div className="mx-auto mt-6 max-w-3xl space-y-5 text-center text-muted md:text-lg">
          {content.paragraphs.map((paragraph, index) => (
            <IntroParagraph
              key={`${index}-${paragraph.slice(0, 12)}`}
              text={paragraph}
              highlight={index === 0 ? content.highlight : undefined}
            />
          ))}
        </div>

        <div className="mt-12">
          <div className="mx-auto max-w-5xl overflow-hidden shadow-xl shadow-secondary/40">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type IntroParagraphProps = {
  text: string;
  highlight?: string;
};

function IntroParagraph({ text, highlight }: IntroParagraphProps) {
  if (!highlight || !text.includes(highlight)) {
    return <p>{text}</p>;
  }

  const [before, after] = text.split(highlight);

  return (
    <p>
      {before}
      <span className="font-semibold text-foreground">{highlight}</span>
      {after}
    </p>
  );
}

