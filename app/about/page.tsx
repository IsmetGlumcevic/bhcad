import Image from "next/image";
import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import type { NavigationItem } from "../components/types";

const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Our team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={navigation} />

      <main className="flex flex-1 flex-col">
        {/* Intro / About us */}
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
              About us
            </h1>

            <div className="mx-auto mt-6 max-w-3xl space-y-5 text-center text-muted md:text-lg">
              <p>
                Today&apos;s modern industry is based on <b>global cooperation with
                professional teams</b> which are specialized in online technical
                support in many different branches of the economy.
              </p>
              <p>
                The ideas came to be for this very reason, we&apos;re happy to
                share our knowledge with you and help you with the whole
                organization process. We&apos;re open to any kind of realization of
                your projects like online support, drawing, processing drawings
                for production, processing data in ERP packages, administrative
                work, etc. We support a wide range of industries such as,
                technical industries (construction, the wood and steel
                industries, the mechanical industry, etc.)
              </p>
            </div>

            <div className="mt-12">
              <div className="mx-auto max-w-5xl overflow-hidden shadow-xl shadow-secondary/40">
                <Image
                  src="/assets/about-1.png"
                  alt="bhCAD team"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Where are we from */}
        <section
          id="origin"
          className="bg-gradient-to-b from-[#c9f2e5] via-[#c6f0e4] to-[#b4ebdc] py-16 md:py-24"
          aria-labelledby="origin-heading"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-8">
            <div className="order-2 md:order-1">
              <div className="shadow-2xl shadow-secondary/90">
                <Image
                  src="/assets/about-2.jpg"
                  alt="Bosnia and Herzegovina — Mostar Old Bridge"
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2
                id="origin-heading"
                className="text-4xl font-extrabold font-heading uppercase leading-none tracking-[4px] text-primary md:text-6xl"
              >
                Where are <br /> we from
              </h2>
              <div className="mt-6 max-w-xl text-muted md:text-lg">
                <p>
                  <span className="font-semibold text-foreground">Bosnia &amp; Herzegovina</span>{" "}
                  is a land full of cultural heritage, natural beauty, and
                  tourist attractions and it represents a crossroad of many
                  civilizations and cultures. Thousand years of cultural
                  diversity merged into Bosnia &amp; Herzegovina which makes it one
                  of the most fascinating countries in southern Europe. It&apos;s a
                  country where you can find an Ottoman mosque, Jewish synagogue,
                  and catholic and orthodox churches on the same corner of any
                  street.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter email="info@bhcad.ba" />
    </div>
  );
}
