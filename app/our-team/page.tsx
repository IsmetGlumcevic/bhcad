import Image from "next/image";
import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import type { NavigationItem } from "../components/types";

const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Our team", href: "/our-team" },
  { label: "Contact", href: "/#contact" },
];

const team = [
  { name: "ENES", src: "/assets/team/enes.jpg", alt: "Enes", grayscale: true },
  { name: "ALBIN", src: "/assets/team/albin.jpg", alt: "Albin", grayscale: true },
  { name: "SANJA", src: "/assets/team/sanja.jpg", alt: "Sanja", grayscale: false },
  { name: "ADIS", src: "/assets/team/adis.jpg", alt: "Adis", grayscale: true },
  { name: "ELMA", src: "/assets/team/elma.jpg", alt: "Elma", grayscale: true },
  { name: "MIRZA", src: "/assets/team/mirza.jpg", alt: "Mirza", grayscale: true },
  { name: "KENAN", src: "/assets/team/kenan.jpg", alt: "Kenan", grayscale: true },
];

export default function OurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={navigation} />

      <main className="flex flex-1 flex-col">
        {/* Hero */}
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

        {/* Intro + logo */}
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

        {/* Team grid */}
        <section className="bg-gradient-to-b from-[#e8f7f1] via-[#e9fbf7] to-[#c9f2e5] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            {/* Mobile: unified grid (2 per row) */}
            <ul className="grid grid-cols-2 gap-10 md:hidden">
              {team.map((member) => (
                <li key={member.name} className="">
                  <div className="overflow-hidden rounded-xl bg-white shadow-xl shadow-emerald-300/40">
                    <Image
                      src={member.src}
                      alt={member.alt}
                      width={520}
                      height={640}
                      className={`h-auto w-full object-cover ${member.grayscale ? "grayscale" : ""}`}
                    />
                  </div>
                  <p className="mt-4 text-center text-sm font-semibold tracking-[0.25em] text-primary">
                    {member.name}
                  </p>
                </li>
              ))}
            </ul>

            {/* First row: 3 images (md and up) */}
            <ul className="hidden gap-10 md:grid md:grid-cols-3 md:px-10">
              {team.slice(0, 3).map((member) => (
                <li key={member.name} className="">
                  <div className="overflow-hidden rounded-xl bg-white shadow-xl shadow-emerald-300/40">
                    <Image
                      src={member.src}
                      alt={member.alt}
                      width={520}
                      height={640}
                      className={`h-auto w-full object-cover ${member.grayscale ? "grayscale" : ""}`}
                    />
                  </div>
                  <p className="mt-4 text-center text-sm font-semibold tracking-[0.25em] text-primary">
                    {member.name}
                  </p>
                </li>
              ))}
            </ul>

            {/* Second row: 4 images (md and up) */}
            <ul className="mt-14 hidden gap-10 md:grid md:grid-cols-4">
              {team.slice(3).map((member) => (
                <li key={member.name} className="">
                  <div className="overflow-hidden rounded-xl bg-white shadow-xl shadow-emerald-300/40">
                    <Image
                      src={member.src}
                      alt={member.alt}
                      width={520}
                      height={640}
                      className={`h-auto w-full object-cover ${member.grayscale ? "grayscale" : ""}`}
                    />
                  </div>
                  <p className="mt-4 text-center text-sm font-semibold tracking-[0.25em] text-primary">
                    {member.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter email="info@bhcad.ba" />
    </div>
  );
}
