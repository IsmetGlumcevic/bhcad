import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { SiteFooter } from "../../components/SiteFooter";
import { StructuredData } from "../../components/StructuredData";
import { ServicesHero } from "../../services/components/ServicesHero";
import { ServicesContent } from "../../services/components/ServicesContent";
import { ExpertiseLogos } from "../../services/components/ExpertiseLogos";
import { PartnersSection } from "../../services/components/PartnersSection";
import { expertiseLogos } from "../../data/expertise";
import { getServices } from "../../data/services";
import { getCopy } from "../../i18n";
import { ORGANIZATION_NAME, SITE_URL } from "../../lib/seo";

const locale = "nl" as const;
const copy = getCopy(locale);

const servicesUrl = `${SITE_URL}/nl/services`;
const servicesList = getServices(locale);
const servicesOffered = Array.from(new Set(servicesList.map(({ title }) => title)));

export const metadata: Metadata = {
  title: `Diensten | ${ORGANIZATION_NAME}`,
  description: copy.servicesPage.description,
  alternates: {
    canonical: servicesUrl,
  },
  openGraph: {
    title: `Diensten | ${ORGANIZATION_NAME}`,
    description: copy.servicesPage.description,
    url: servicesUrl,
    type: "website",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Diensten | ${ORGANIZATION_NAME}`,
    description: copy.servicesPage.description,
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${ORGANIZATION_NAME} Diensten`,
  url: servicesUrl,
  description: copy.servicesPage.description,
  provider: {
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: copy.servicesPage.areaServedName,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: copy.servicesPage.offerCatalogName,
    itemListElement: servicesOffered.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  },
};

export default function ServicesPageNl() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header
        navigation={copy.navigation}
        labels={{
          openMenu: copy.header.openMenuLabel,
          closeMenu: copy.header.closeMenuLabel,
        }}
      />
      <StructuredData data={servicesSchema} id="services-schema" />

      <main className="flex flex-1 flex-col">
        <ServicesHero
          heading={copy.servicesPage.hero.heading}
          descriptionParts={copy.servicesPage.hero.descriptionParts}
        />
        <ServicesContent
          services={servicesList}
          intro={copy.servicesPage.intro}
          disciplines={copy.servicesPage.disciplines}
          detailsCta={copy.servicesPage.detailsCta}
          detailsFallbackDescription={copy.servicesPage.detailsFallbackDescription}
        />
        <ExpertiseLogos logos={expertiseLogos} heading={copy.servicesPage.expertiseHeading} />
        <PartnersSection heading={copy.servicesPage.partnersHeading} />
      </main>

      <SiteFooter
        email={copy.contactPage.details.email}
        companyName={copy.footer.companyName}
        copyrightLabel={copy.footer.copyrightLabel}
        homeHref={`/${locale}`}
      />
    </div>
  );
}
