import Image from "next/image";

export function TeamHero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/assets/team/team-hero.png"
          alt="bhCAD team at work"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/70" />
      </div>
      <div className="relative mx-auto flex min-h-[48vh] w-full max-w-4xl flex-col items-center justify-center gap-4 px-4 py-16 text-center md:min-h-[56vh] md:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-semibold md:text-5xl">Our team</h1>
        <p className="max-w-3xl text-white/95 md:text-2xl">
          Our team consists of top experts with many years of experience in
          <span className="font-semibold"> CAD/CAM technologies</span>, technical consulting, and
          administrative services, dedicated to providing the highest
          quality support and solutions tailored to your specific needs.
        </p>
      </div>
    </section>
  );
}

