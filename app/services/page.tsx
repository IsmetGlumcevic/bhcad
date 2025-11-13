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
import { ORGANIZATION_NAME, SITE_URL } from "../lib/seo";

const servicesUrl = `${SITE_URL}/services`;
const servicesDescription =
  "Explore bhCAD's CAD/CAM technical support, engineering consulting, administrative services, and software expertise tailored to streamline manufacturing operations.";

export const metadata: Metadata = {
  title: `Services | ${ORGANIZATION_NAME}`,
  description: servicesDescription,
  alternates: {
    canonical: servicesUrl,
  },
  openGraph: {
    title: `Services | ${ORGANIZATION_NAME}`,
    description: servicesDescription,
    url: servicesUrl,
    type: "website",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${ORGANIZATION_NAME}`,
    description: servicesDescription,
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${ORGANIZATION_NAME} Services`,
  url: servicesUrl,
  description: servicesDescription,
  provider: {
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "Europe",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CAD/CAM & Consulting Services",
    itemListElement: [
      "Administrative services",
      "Engineering",
      "Quoting",
      "CAD/CAM Technical support",
      "Technical consulting and support",
    ].map((service) => ({
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
      <Header navigation={servicesNavigation} />
      <StructuredData data={servicesSchema} id="services-schema" />

      <main className="flex flex-1 flex-col">
        <ServicesHero />
        <ServicesContent />
        <ExpertiseLogos logos={expertiseLogos} />
        <PartnersSection />
      </main>

      <SiteFooter email="info@bhcad.ba" />
    </div>
  );
}
