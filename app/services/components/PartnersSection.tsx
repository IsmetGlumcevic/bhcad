import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-5xl font-heading tracking-[5px] text-primary">
          Our partner
        </h2>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-10">
          <div className="relative h-28 w-[360px]">
            <Image
              src="/assets/smart-steel.png"
              alt="MWA smart steel solutions"
              fill
              sizes="360px"
              className="object-contain"
            />
          </div>
          <div className="relative h-28 w-[360px]">
            <Image
              src="/assets/synapta.png"
              alt="Synapta logo"
              fill
              sizes="360px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
