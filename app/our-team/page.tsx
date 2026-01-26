import type { Metadata } from "next";
import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import { teamNavigation } from "../components/navigation";
import { StructuredData } from "../components/StructuredData";
import { TeamHero } from "./components/TeamHero";
import { TeamIntro } from "./components/TeamIntro";
import { TeamGrid } from "./components/TeamGrid";
import { CompanyCarousel } from "./components/CompanyCarousel";
import { teamMembers } from "../data/team";
import { getCopy } from "../i18n";
import { ORGANIZATION_NAME, SITE_URL } from "../lib/seo";

const { teamPage, footer, header, contactPage } = getCopy();

const teamUrl = `${SITE_URL}/our-team`;

export const metadata: Metadata = {
  title: `Our Team | ${ORGANIZATION_NAME}`,
  description: teamPage.description,
  alternates: {
    canonical: teamUrl,
  },
  openGraph: {
    title: `Our Team | ${ORGANIZATION_NAME}`,
    description: teamPage.description,
    url: teamUrl,
    type: "website",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Team | ${ORGANIZATION_NAME}`,
    description: teamPage.description,
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Our Team | ${ORGANIZATION_NAME}`,
  url: teamUrl,
  description: teamPage.description,
  hasPart: teamMembers.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: "Team member",
    image: `${SITE_URL}${member.src}`,
    worksFor: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
    },
  })),
};

export default function OurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header
        navigation={teamNavigation}
        labels={{
          openMenu: header.openMenuLabel,
          closeMenu: header.closeMenuLabel,
        }}
      />
      <StructuredData data={teamSchema} id="team-schema" />

      <main className="flex flex-1 flex-col">
        <TeamHero
          heading={teamPage.hero.heading}
          descriptionParts={teamPage.hero.descriptionParts}
        />
        <TeamIntro
          heading={teamPage.intro.heading}
          highlightLabel={teamPage.intro.highlightLabel}
          description={teamPage.intro.descriptionParts.intro}
        />
        <TeamGrid members={teamMembers} />
        <CompanyCarousel labels={teamPage.carousel} />
      </main>

      <SiteFooter
        email={contactPage.details.email}
        companyName={footer.companyName}
        copyrightLabel={footer.copyrightLabel}
      />
    </div>
  );
}
