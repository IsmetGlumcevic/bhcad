import type { Metadata } from "next";
import { BackToTopLink } from "./components/BackToTopLink";
import { Header } from "./components/Header";
import { HeroIntro } from "./components/HeroIntro";
import { HeroVideo } from "./components/HeroVideo";
import { ServicesSection } from "./components/ServicesSection";
import { SiteFooter } from "./components/SiteFooter";
import { homeNavigation } from "./components/navigation";
import { StructuredData } from "./components/StructuredData";
import { homeServices } from "./data/homeServices";
import { ORGANIZATION_NAME, ORGANIZATION_SCHEMA, SITE_URL } from "./lib/seo";

const homeDescription =
  "bhCAD delivers flexible CAD/CAM technical support, engineering consulting, and remote business administration for manufacturers across Europe.";

export const metadata: Metadata = {
  title: `${ORGANIZATION_NAME} | CAD/CAM Technical Consultancy & Remote Engineering`,
  description: homeDescription,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${ORGANIZATION_NAME} | CAD/CAM Technical Consultancy & Remote Engineering`,
    description: homeDescription,
    url: SITE_URL,
    type: "website",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${ORGANIZATION_NAME} | CAD/CAM Technical Consultancy & Remote Engineering`,
    description: homeDescription,
  },
};

const homeSchema = [
  ORGANIZATION_SCHEMA,
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    description: homeDescription,
    potentialAction: {
      "@type": "ContactAction",
      target: `${SITE_URL}/#contact`,
    },
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={homeNavigation} />
      <StructuredData data={homeSchema} id="home-schema" />

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
          services={homeServices}
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
