import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { SiteFooter } from "../../components/SiteFooter";
import { StructuredData } from "../../components/StructuredData";
import { TeamHero } from "../../our-team/components/TeamHero";
import { TeamIntro } from "../../our-team/components/TeamIntro";
import { TeamGrid } from "../../our-team/components/TeamGrid";
import { CompanyCarousel } from "../../our-team/components/CompanyCarousel";
import { teamMembers } from "../../data/team";
import { getCopy } from "../../i18n";
import { ORGANIZATION_NAME, SITE_URL } from "../../lib/seo";

const locale = "de" as const;
const copy = getCopy(locale);

const teamUrl = `${SITE_URL}/de/our-team`;

export const metadata: Metadata = {
  title: `Unser Team | ${ORGANIZATION_NAME}`,
  description: copy.teamPage.description,
  alternates: {
    canonical: teamUrl,
  },
  openGraph: {
    title: `Unser Team | ${ORGANIZATION_NAME}`,
    description: copy.teamPage.description,
    url: teamUrl,
    type: "website",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Unser Team | ${ORGANIZATION_NAME}`,
    description: copy.teamPage.description,
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Unser Team | ${ORGANIZATION_NAME}`,
  url: teamUrl,
  description: copy.teamPage.description,
  hasPart: teamMembers.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: "Teammitglied",
    image: `${SITE_URL}${member.src}`,
    worksFor: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
    },
  })),
};

export default function OurTeamPageDe() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header
        navigation={copy.navigation}
        labels={{
          openMenu: copy.header.openMenuLabel,
          closeMenu: copy.header.closeMenuLabel,
        }}
      />
      <StructuredData data={teamSchema} id="team-schema" />

      <main className="flex flex-1 flex-col">
        <TeamHero
          heading={copy.teamPage.hero.heading}
          descriptionParts={copy.teamPage.hero.descriptionParts}
        />
        <TeamIntro
          heading={copy.teamPage.intro.heading}
          highlightLabel={copy.teamPage.intro.highlightLabel}
          description={copy.teamPage.intro.descriptionParts.intro}
        />
        <TeamGrid members={teamMembers} />
        <CompanyCarousel labels={copy.teamPage.carousel} />
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
