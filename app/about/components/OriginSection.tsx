import Image from "next/image";
import type { AboutOriginContent } from "../../data/about";

type OriginSectionProps = {
  content: AboutOriginContent;
};

export function OriginSection({ content }: OriginSectionProps) {
  return (
    <section
      id="origin"
      className="bg-gradient-to-b from-[#c9f2e5] via-[#c6f0e4] to-[#b4ebdc] py-16 md:py-24"
      aria-labelledby="origin-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="order-2 md:order-1">
          <div className="shadow-2xl shadow-secondary/90">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2
            id="origin-heading"
            className="text-4xl font-extrabold font-heading uppercase leading-none tracking-[4px] text-primary md:text-6xl"
          >
            {content.headingLines[0]} <br /> {content.headingLines[1]}
          </h2>
          <div className="mt-6 max-w-xl text-muted md:text-lg">
            {content.paragraphs.map((paragraph, index) => (
              <OriginParagraph
                key={`${index}-${paragraph.slice(0, 12)}`}
                text={paragraph}
                highlight={index === 0 ? content.highlight : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type OriginParagraphProps = {
  text: string;
  highlight?: string;
};

function OriginParagraph({ text, highlight }: OriginParagraphProps) {
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

