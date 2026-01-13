import type { Metadata } from "next";
import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import { servicesNavigation } from "../components/navigation";
import { StructuredData } from "../components/StructuredData";
import { ServicesHero } from "./components/ServicesHero";
import { ServicesContent } from "./components/ServicesContent";
import { ExpertiseLogos } from "./components/ExpertiseLogos";
import { PartnersSection } from "./components/PartnersSection";
import { expertiseLogos } from "../data/expertise";
import { getServices } from "../data/services";
import { getCopy } from "../i18n";
import { ORGANIZATION_NAME, SITE_URL } from "../lib/seo";

const { servicesPage, footer, header, contactPage } = getCopy();

const servicesUrl = `${SITE_URL}/services`;

const servicesList = getServices();
const servicesOffered = Array.from(new Set(servicesList.map(({ title }) => title)));

export const metadata: Metadata = {
  title: `Services | ${ORGANIZATION_NAME}`,
  description: servicesPage.description,
  alternates: {
    canonical: servicesUrl,
  },
  openGraph: {
    title: `Services | ${ORGANIZATION_NAME}`,
    description: servicesPage.description,
    url: servicesUrl,
    type: "website",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${ORGANIZATION_NAME}`,
    description: servicesPage.description,
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${ORGANIZATION_NAME} Services`,
  url: servicesUrl,
  description: servicesPage.description,
  provider: {
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: servicesPage.areaServedName,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: servicesPage.offerCatalogName,
    itemListElement: servicesOffered.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header
        navigation={servicesNavigation}
        labels={{
          openMenu: header.openMenuLabel,
          closeMenu: header.closeMenuLabel,
        }}
      />
      <StructuredData data={servicesSchema} id="services-schema" />

      <main className="flex flex-1 flex-col">
        <ServicesHero
          heading={servicesPage.hero.heading}
          descriptionParts={servicesPage.hero.descriptionParts}
        />
        <ServicesContent
          services={servicesList}
          intro={servicesPage.intro}
          disciplines={servicesPage.disciplines}
          detailsCta={servicesPage.detailsCta}
          detailsFallbackDescription={servicesPage.detailsFallbackDescription}
        />
        <ExpertiseLogos logos={expertiseLogos} heading={servicesPage.expertiseHeading} />
        <PartnersSection heading={servicesPage.partnersHeading} />
      </main>

      <SiteFooter
        email={contactPage.details.email}
        companyName={footer.companyName}
        copyrightLabel={footer.copyrightLabel}
      />
    </div>
  );
}
