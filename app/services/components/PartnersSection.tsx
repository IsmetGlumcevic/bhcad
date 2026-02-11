import Image from "next/image";

type PartnersSectionProps = {
  heading: string;
};

const partners = [
  { src: "/assets/smart-steel.png", alt: "MWA smart steel solutions" },
  { src: "/assets/synapta.png", alt: "Synapta logo" },
  { src: "/assets/partner/partner1.jpeg", alt: "Partner 1 logo" },
  { src: "/assets/partner/partner2.jpeg", alt: "Partner 2 logo" },
  { src: "/assets/partner/partner3.jpeg", alt: "Partner 3 logo" },
  { src: "/assets/partner/partner4.jpeg", alt: "Partner 4 logo" },
  { src: "/assets/partner/partner5.jpeg", alt: "Partner 5 logo" },
] as const;

export function PartnersSection({ heading }: PartnersSectionProps) {
  const firstRowPartners = partners.slice(0, 4);
  const secondRowPartners = partners.slice(4);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-5xl font-heading tracking-[5px] text-primary">
          {heading}
        </h2>
        <div className="mt-14 space-y-5 md:space-y-6">
          <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {firstRowPartners.map((partner) => (
              <li
                key={partner.src}
                className="rounded-2xl border border-surface bg-base p-4"
              >
                <div className="relative h-20 sm:h-24 md:h-28">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1023px) 25vw, 22vw"
                    className="object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>

          <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:mx-auto lg:max-w-[75%] lg:grid-cols-3">
            {secondRowPartners.map((partner) => (
              <li
                key={partner.src}
                className="rounded-2xl border border-surface bg-base p-4"
              >
                <div className="relative h-20 sm:h-24 md:h-28">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1023px) 25vw, 24vw"
                    className="object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
