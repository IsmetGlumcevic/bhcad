import type { Metadata } from "next";
import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import { teamNavigation } from "../components/navigation";
import { StructuredData } from "../components/StructuredData";
import { TeamHero } from "./components/TeamHero";
import { TeamIntro } from "./components/TeamIntro";
import { TeamGrid } from "./components/TeamGrid";
import { teamMembers } from "../data/team";
import { ORGANIZATION_NAME, SITE_URL } from "../lib/seo";

const teamUrl = `${SITE_URL}/our-team`;
const teamDescription =
  "Meet the multidisciplinary bhCAD team of CAD/CAM engineers, consultants, and administrators supporting manufacturing partners across Europe.";

export const metadata: Metadata = {
  title: `Our Team | ${ORGANIZATION_NAME}`,
  description: teamDescription,
  alternates: {
    canonical: teamUrl,
  },
  openGraph: {
    title: `Our Team | ${ORGANIZATION_NAME}`,
    description: teamDescription,
    url: teamUrl,
    type: "profile",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Team | ${ORGANIZATION_NAME}`,
    description: teamDescription,
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Our Team | ${ORGANIZATION_NAME}`,
  url: teamUrl,
  description: teamDescription,
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
      <Header navigation={teamNavigation} />
      <StructuredData data={teamSchema} id="team-schema" />

      <main className="flex flex-1 flex-col">
        <TeamHero />
        <TeamIntro />
        <TeamGrid members={teamMembers} />
      </main>

      <SiteFooter email="info@bhcad.ba" />
    </div>
  );
}
