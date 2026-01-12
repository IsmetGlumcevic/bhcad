import type { Metadata } from "next";
import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import { aboutNavigation } from "../components/navigation";
import { StructuredData } from "../components/StructuredData";
import { AboutIntroSection } from "./components/AboutIntroSection";
import { OriginSection } from "./components/OriginSection";
import { aboutIntroContent, aboutOriginContent } from "../data/about";
import { getCopy } from "../i18n";
import { ORGANIZATION_NAME, ORGANIZATION_SCHEMA, SITE_URL } from "../lib/seo";

const { aboutPage, footer, header, contactPage } = getCopy();

const aboutUrl = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: `About ${ORGANIZATION_NAME}`,
  description: aboutPage.description,
  alternates: {
    canonical: aboutUrl,
  },
  openGraph: {
    title: `About ${ORGANIZATION_NAME}`,
    description: aboutPage.description,
    url: aboutUrl,
    type: "article",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${ORGANIZATION_NAME}`,
    description: aboutPage.description,
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${ORGANIZATION_NAME}`,
  url: aboutUrl,
  description: aboutPage.description,
  mainEntity: ORGANIZATION_SCHEMA,
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header
        navigation={aboutNavigation}
        labels={{
          openMenu: header.openMenuLabel,
          closeMenu: header.closeMenuLabel,
        }}
      />
      <StructuredData data={aboutSchema} id="about-schema" />

      <main className="flex flex-1 flex-col">
        <AboutIntroSection content={aboutIntroContent} />
        <OriginSection content={aboutOriginContent} />
      </main>

      <SiteFooter
        email={contactPage.details.email}
        companyName={footer.companyName}
        copyrightLabel={footer.copyrightLabel}
      />
    </div>
  );
}
