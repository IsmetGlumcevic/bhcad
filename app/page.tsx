import { BackToTopLink } from "./components/BackToTopLink";
import { Header } from "./components/Header";
import { HeroIntro } from "./components/HeroIntro";
import { HeroVideo } from "./components/HeroVideo";
import { ServicesSection } from "./components/ServicesSection";
import { SiteFooter } from "./components/SiteFooter";
import {
  IconCad,
  IconCog,
  IconLaptop,
  IconQuote,
  IconWindows,
} from "./components/icons";
import type { NavigationItem, Service } from "./components/types";

const navigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "/about" },
  { label: "Our services", href: "#services" },
  { label: "Our team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const services: Service[] = [
  {
    title: "CAD/CAM Technical support",
    description:
      "At bhCAD, we pride ourselves on providing top-notch CAD/CAM technical support, which includes 2D and 3D drawing services and machine element programming.",
    icon: IconCad,
  },
  {
    title: "Technical consulting and support",
    description:
      "Our technical support encompasses essential consulting services to enhance your business operations.",
    icon: IconLaptop,
  },
  {
    title: "Quoting",
    description:
      "In sheet metal quoting, optimizing price involves minimizing costs through maximal plate usability, ensuring competitive pricing without compromising quality or delivery.",
    featured: false,
    icon: IconQuote,
  },
  {
    title: "Enginering",
    description:
      "At bhCAD, we pride ourselves on providing top-notch CAD/CAM technical support, which includes 2D and 3D drawing services and machine element programming.",
    icon: IconCog,
  },
  {
    title: "Business administration",
    description:
      "We specialize in streamlining your administrative tasks, allowing you to focus on what truly matters – growing your business.",
    icon: IconWindows,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={navigation} />

      <main className="flex flex-1 flex-col">
        <HeroVideo
          id="home"
          badge="Bosnia and Herzegovina"
          description="Strategically located to serve European manufacturers with agile, cost-effective solutions."
          videoSrc="/assets/hero-video.mp4"
          posterSrc="/assets/hero-background.png"
          videoType="video/mp4"
          offset={80}
        />
        <HeroIntro
          backgroundImage="/assets/hero-background.png"
          eyebrow="Technical Consultancy Bureau"
          heading="We go the extra mile!"
          description="Your flexible and reliable partner providing online services and the workforce you struggle to find."
        />
        <ServicesSection
          id="services"
          services={services}
          eyebrow="Services"
          heading="We go the extra mile!"
          description="Our dedicated team of experts is here to streamline your operations, enhance your technological capabilities, and drive your business forward."
          ctaLabel="Click here"
          ctaHref="#contact"
        />
      </main>

      <SiteFooter id="contact" email="info@bhcad.ba" />

      <BackToTopLink target="#home" />
    </div>
  );
}
