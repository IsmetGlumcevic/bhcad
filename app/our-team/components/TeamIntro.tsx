import Image from "next/image";

export function TeamIntro() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div>
          <p className="md:text-lg text-muted">
            <span className="font-semibold text-foreground">Our team</span> continuously
            improves and keeps up with the latest trends and technologies to
            ensure that our clients receive the most efficient and
            innovative solutions. We are dedicated to building long-term
            partnerships with our clients, based on trust, professionalism,
            and excellence in every project.
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

