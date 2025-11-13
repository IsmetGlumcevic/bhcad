import Image from "next/image";

export function ServicesHero() {
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
        <div className="absolute inset-0 bg-emerald-900/70" />
      </div>
      <div className="relative mx-auto flex min-h-[56vh] w-full max-w-4xl flex-col items-center justify-center gap-4 px-4 py-16 text-center md:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-semibold md:text-5xl">Our services</h1>
        <p className="max-w-2xl text-white md:text-3xl">
          Welcome to <span className="font-heading">bhCAD</span>, your reliable partner for
          comprehensive technical support and administrative services.
        </p>
      </div>
    </section>
  );
}

