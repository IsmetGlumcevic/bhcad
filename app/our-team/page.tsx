import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import { teamNavigation } from "../components/navigation";
import { TeamHero } from "./components/TeamHero";
import { TeamIntro } from "./components/TeamIntro";
import { TeamGrid } from "./components/TeamGrid";
import { teamMembers } from "../data/team";

export default function OurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={teamNavigation} />

      <main className="flex flex-1 flex-col">
        <TeamHero />
        <TeamIntro />
        <TeamGrid members={teamMembers} />
      </main>

      <SiteFooter email="info@bhcad.ba" />
    </div>
  );
}
