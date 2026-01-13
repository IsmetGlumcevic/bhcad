import type { Metadata } from "next";
import { BackToTopLink } from "./components/BackToTopLink";
import { Header } from "./components/Header";
import { HeroIntro } from "./components/HeroIntro";
import { HeroVideo } from "./components/HeroVideo";
import { ServicesSection } from "./components/ServicesSection";
import { SiteFooter } from "./components/SiteFooter";
import { homeNavigation } from "./components/navigation";
import { StructuredData } from "./components/StructuredData";
import { getServices, isHomeService } from "./data/services";
import { getCopy } from "./i18n";
import { ORGANIZATION_NAME, ORGANIZATION_SCHEMA, SITE_URL } from "./lib/seo";

const { home, footer, header, contactPage } = getCopy();

export const metadata: Metadata = {
  title: `${ORGANIZATION_NAME} | CAD/CAM Technical Consultancy & Remote Engineering`,
  description: home.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${ORGANIZATION_NAME} | CAD/CAM Technical Consultancy & Remote Engineering`,
    description: home.description,
    url: SITE_URL,
    type: "website",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${ORGANIZATION_NAME} | CAD/CAM Technical Consultancy & Remote Engineering`,
    description: home.description,
  },
};

const homeSchema = [
  ORGANIZATION_SCHEMA,
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    description: home.description,
    potentialAction: {
      "@type": "ContactAction",
      target: `${SITE_URL}/#contact`,
    },
  },
];

const homeServiceCards = getServices().filter(isHomeService);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header
        navigation={homeNavigation}
        labels={{
          openMenu: header.openMenuLabel,
          closeMenu: header.closeMenuLabel,
        }}
      />
      <StructuredData data={homeSchema} id="home-schema" />

      <main className="flex flex-1 flex-col">
        <HeroVideo
          id="home"
          badge={home.heroVideo.badge}
          description={home.heroVideo.description}
          videoSrc={home.heroVideo.videoSrc}
          posterSrc={home.heroVideo.posterSrc}
          videoType={home.heroVideo.videoType}
          offset={home.heroVideo.offset}
        />
        <HeroIntro
          backgroundImage={home.heroIntro.backgroundImage}
          eyebrow={home.heroIntro.eyebrow}
          heading={home.heroIntro.heading}
          description={home.heroIntro.description}
        />
        <ServicesSection
          id="services"
          services={homeServiceCards}
          eyebrow={home.servicesSection.eyebrow}
          heading={home.servicesSection.heading}
          description={home.servicesSection.description}
          ctaLabel={home.servicesSection.ctaLabel}
          ctaHref={home.servicesSection.ctaHref}
        />
      </main>

      <SiteFooter
        id="contact"
        email={contactPage.details.email}
        companyName={footer.companyName}
        copyrightLabel={footer.copyrightLabel}
      />

      <BackToTopLink target="#home" label={home.backToTopLabel} />
    </div>
  );
}
