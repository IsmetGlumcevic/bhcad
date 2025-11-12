import Image from "next/image";
import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import {
  IconCad,
  IconCog,
  IconLaptop,
  IconQuote,
  IconWindows,
} from "../components/icons";
import type { NavigationItem } from "../components/types";

const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Our team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

const expertise = [
  { src: "/assets/expertise/autodesk-autocad-lt-small-social-400-300x300.png", alt: "AutoCAD LT" },
  { src: "/assets/expertise/autodesk-fusion-360-logo-7F72A76397-seeklogo.com_-150x150.png", alt: "Autodesk Fusion 360" },
  { src: "/assets/expertise/Autodesk-Inventor.png", alt: "Autodesk Inventor" },
  { src: "/assets/expertise/logo-solidedge.png", alt: "Solid Edge" },
  { src: "/assets/expertise/DS-CATIA-Logo-150x150.png", alt: "CATIA" },
  { src: "/assets/expertise/solidworks-icon-400-300x300.png", alt: "SolidWorks" },
  { src: "/assets/expertise/PTC_Creonew.png", alt: "Creo" },
  { src: "/assets/expertise/SolidCAM_Logo_the-platform-for-manufacturing-01-1-150x150.png", alt: "SolidCAM" },
  { src: "/assets/expertise/keyshot-icon-256.png", alt: "Keyshot" },
  { src: "/assets/expertise/boost.png", alt: "TruTops / BOOST" },
  { src: "/assets/expertise/SprutCAM-X-logo-menu-01-1.png", alt: "SprutCAM" },
  { src: "/assets/expertise/sigmanest-logo-01.png", alt: "SigmaNEST" },
] as const;

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={navigation} />

      <main className="flex flex-1 flex-col">
        {/* Hero */}
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
            <h1 className="text-4xl font-heading font-semibold md:text-5xl">
              Our services
            </h1>
            <p className="max-w-2xl text-white md:text-3xl">
              Welcome to <span className="font-heading">bhCAD</span>, your reliable partner for
              comprehensive technical support and administrative services.
            </p>
          </div>
        </section>

        {/* Services icons and copy */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-5xl font-heading tracking-[5px] text-primary">
                Services
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-muted md:text-2xl">
                Our dedicated team of experts is here to streamline your operations,
                enhance your technological capabilities, and drive your business forward.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-10 text-center md:grid-cols-5 md:text-2xl">
              <div className="flex flex-col items-center gap-4">
                <IconWindows className="h-28 w-28 text-primary" aria-hidden />
                <div className="font-bold">Administrative services</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <IconCog className="h-28 w-28 text-primary" aria-hidden />
                <div className="font-bold">Engineering</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <IconQuote className="h-28 w-28 text-primary" aria-hidden />
                <div className="font-bold">Quoting</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <IconCad className="h-28 w-28 text-primary" aria-hidden />
                <div className="font-bold">CAD/CAM Technical support</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <IconLaptop className="h-28 w-28 text-primary" aria-hidden />
                <div className="font-bold">Technical consulting and support</div>
              </div>
            </div>

            <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-[17px]">
              <article>
                <h3 className="text-lg font-semibold text-foreground">
                  CAD/CAM Technical support
                </h3>
                <p className="mt-2 text-muted">
                  At bhCAD, we pride ourselves on providing top-notch CAD/CAM
                  technical support, which includes 2D and 3D drawing services
                  and machine element programming. Our expert team utilizes the
                  latest technologies to assist you in designing and developing
                  high-quality products. Whether it’s creating detailed
                  technical drawings or programming complex machine parts, we
                  ensure precision and efficiency at every step.
                </p>
              </article>
              <article>
                <h3 className="text-lg font-semibold text-foreground">
                  Technical consulting and support
                </h3>
                <p className="mt-2 text-muted">
                  Our technical support encompasses essential consulting
                  services to enhance your business operations. We offer
                  comprehensive technical consulting to ensure your equipment
                  and software operate optimally, maximizing efficiency and
                  minimizing downtime.
                </p>
              </article>
              <article className="lg:row-span-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Administrative Services
                </h3>
                <p className="mt-2 text-muted">
                  Welcome to our Administrative Services Hub! We specialize in
                  streamlining your administrative tasks, allowing you to focus
                  on what truly matters - growing your business. From managing
                  schedules and coordinating meetings to handling correspondence
                  and data entry, our dedicated team ensures seamless operations.
                  Trust us to optimize efficiency and enhance productivity, so
                  you can achieve your goals with ease.
                </p>
                <p className="mt-4 text-muted">
                  Discover the power of efficient administration with our
                  comprehensive services. From organizing your inbox to
                  orchestrating complex projects, we&apos;re here to lighten
                  your workload and elevate your productivity. With attention to
                  detail and a commitment to excellence, let us be your trusted
                  partner in navigating the demands of modern business.
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold text-foreground">
                  Nesting and Quoting in ERP Packages
                </h3>
                <p className="mt-2 text-muted">
                  We optimize fabrication processes and reduce waste through
                  advanced nesting techniques. Additionally, we offer quoting
                  services within ERP packages, ensuring your processes are not
                  only efficient but also cost‑effective.
                </p>
              </article>
              <article>
                <h3 className="text-lg font-semibold text-foreground">
                  Drawing and part fabrication
                </h3>
                <p className="mt-2 text-muted">
                  Our team specializes in creating precise technical drawings
                  that meet the highest industry standards. No matter the
                  complexity of your requirements, we are here to provide
                  solutions tailored to your specific needs.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Expertise logos */}
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-heading tracking-[5px] text-primary">
                Our software <span className="text-foreground">expertise</span>
              </h2>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {expertise.map((logo) => (
                <li key={logo.src} className="border border-surface bg-white p-4 shadow-sm">
                  <div className="relative mx-auto aspect-square w-24">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="100px"
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-muted">{logo.alt}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Partners */}
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
                  alt="MWA smart steel solutions"
                  fill
                  sizes="360px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter email="info@bhcad.ba" />
    </div>
  );
}
