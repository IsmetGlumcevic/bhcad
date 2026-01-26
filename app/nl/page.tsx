import type { Metadata } from "next";
import { BackToTopLink } from "../components/BackToTopLink";
import { Header } from "../components/Header";
import { HeroIntro } from "../components/HeroIntro";
import { HeroVideo } from "../components/HeroVideo";
import { ServicesSection } from "../components/ServicesSection";
import { SiteFooter } from "../components/SiteFooter";
import { StructuredData } from "../components/StructuredData";
import { getServices, isHomeService } from "../data/services";
import { getCopy } from "../i18n";
import { ORGANIZATION_NAME, ORGANIZATION_SCHEMA, SITE_URL } from "../lib/seo";

const locale = "nl" as const;
const copy = getCopy(locale);

export const metadata: Metadata = {
  title: `${ORGANIZATION_NAME} | CAD/CAM Technische Support & Remote Engineering`,
  description: copy.home.description,
  alternates: {
    canonical: `${SITE_URL}/nl`,
  },
  openGraph: {
    title: `${ORGANIZATION_NAME} | CAD/CAM Technische Support & Remote Engineering`,
    description: copy.home.description,
    url: `${SITE_URL}/nl`,
    type: "website",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${ORGANIZATION_NAME} | CAD/CAM Technische Support & Remote Engineering`,
    description: copy.home.description,
  },
};

const homeSchema = [
  ORGANIZATION_SCHEMA,
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORGANIZATION_NAME,
    url: `${SITE_URL}/nl`,
    description: copy.home.description,
    potentialAction: {
      "@type": "ContactAction",
      target: `${SITE_URL}/nl#contact`,
    },
  },
];

const homeServiceCards = getServices(locale).filter(isHomeService);

export default function HomeNl() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header
        navigation={copy.navigation}
        labels={{
          openMenu: copy.header.openMenuLabel,
          closeMenu: copy.header.closeMenuLabel,
        }}
      />
      <StructuredData data={homeSchema} id="home-schema" />

      <main className="flex flex-1 flex-col">
        <HeroVideo
          id="home"
          badge={copy.home.heroVideo.badge}
          description={copy.home.heroVideo.description}
          videoSrc={copy.home.heroVideo.videoSrc}
          posterSrc={copy.home.heroVideo.posterSrc}
          videoType={copy.home.heroVideo.videoType}
          offset={copy.home.heroVideo.offset}
        />
        <HeroIntro
          backgroundImage={copy.home.heroIntro.backgroundImage}
          eyebrow={copy.home.heroIntro.eyebrow}
          heading={copy.home.heroIntro.heading}
          description={copy.home.heroIntro.description}
        />
        <ServicesSection
          id="services"
          services={homeServiceCards}
          eyebrow={copy.home.servicesSection.eyebrow}
          heading={copy.home.servicesSection.heading}
          description={copy.home.servicesSection.description}
          ctaLabel={copy.home.servicesSection.ctaLabel}
          ctaHref={copy.home.servicesSection.ctaHref}
        />
      </main>

      <SiteFooter
        id="contact"
        email={copy.contactPage.details.email}
        companyName={copy.footer.companyName}
        copyrightLabel={copy.footer.copyrightLabel}
        homeHref={`/${locale}`}
      />

      <BackToTopLink target="#home" label={copy.home.backToTopLabel} />
    </div>
  );
}
