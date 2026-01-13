import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { SiteFooter } from "../../components/SiteFooter";
import { StructuredData } from "../../components/StructuredData";
import { AboutIntroSection } from "../../about/components/AboutIntroSection";
import { OriginSection } from "../../about/components/OriginSection";
import { getCopy } from "../../i18n";
import { ORGANIZATION_NAME, ORGANIZATION_SCHEMA, SITE_URL } from "../../lib/seo";

const locale = "de" as const;
const copy = getCopy(locale);

const aboutUrl = `${SITE_URL}/de/about`;

export const metadata: Metadata = {
  title: `Über ${ORGANIZATION_NAME}`,
  description: copy.aboutPage.description,
  alternates: {
    canonical: aboutUrl,
  },
  openGraph: {
    title: `Über ${ORGANIZATION_NAME}`,
    description: copy.aboutPage.description,
    url: aboutUrl,
    type: "article",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Über ${ORGANIZATION_NAME}`,
    description: copy.aboutPage.description,
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `Über ${ORGANIZATION_NAME}`,
  url: aboutUrl,
  description: copy.aboutPage.description,
  mainEntity: ORGANIZATION_SCHEMA,
};

export default function AboutPageDe() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header
        navigation={copy.navigation}
        labels={{
          openMenu: copy.header.openMenuLabel,
          closeMenu: copy.header.closeMenuLabel,
        }}
      />
      <StructuredData data={aboutSchema} id="about-schema" />

      <main className="flex flex-1 flex-col">
        <AboutIntroSection content={copy.aboutPage.intro} />
        <OriginSection content={copy.aboutPage.origin} />
      </main>

      <SiteFooter
        email={copy.contactPage.details.email}
        companyName={copy.footer.companyName}
        copyrightLabel={copy.footer.copyrightLabel}
      />
    </div>
  );
}
