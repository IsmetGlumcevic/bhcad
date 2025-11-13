import type { Metadata } from "next";
import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import { aboutNavigation } from "../components/navigation";
import { StructuredData } from "../components/StructuredData";
import { AboutIntroSection } from "./components/AboutIntroSection";
import { OriginSection } from "./components/OriginSection";
import { aboutIntroContent, aboutOriginContent } from "../data/about";
import { ORGANIZATION_NAME, ORGANIZATION_SCHEMA, SITE_URL } from "../lib/seo";

const aboutUrl = `${SITE_URL}/about`;
const aboutDescription =
  "Learn about bhCAD's mission, background, and roots in Bosnia & Herzegovina, where our remote team delivers CAD/CAM expertise for European partners.";

export const metadata: Metadata = {
  title: `About ${ORGANIZATION_NAME}`,
  description: aboutDescription,
  alternates: {
    canonical: aboutUrl,
  },
  openGraph: {
    title: `About ${ORGANIZATION_NAME}`,
    description: aboutDescription,
    url: aboutUrl,
    type: "article",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${ORGANIZATION_NAME}`,
    description: aboutDescription,
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${ORGANIZATION_NAME}`,
  url: aboutUrl,
  description: aboutDescription,
  mainEntity: ORGANIZATION_SCHEMA,
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={aboutNavigation} />
      <StructuredData data={aboutSchema} id="about-schema" />

      <main className="flex flex-1 flex-col">
        <AboutIntroSection content={aboutIntroContent} />
        <OriginSection content={aboutOriginContent} />
      </main>

      <SiteFooter email="info@bhcad.ba" />
    </div>
  );
}
