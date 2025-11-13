import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import { aboutNavigation } from "../components/navigation";
import { AboutIntroSection } from "./components/AboutIntroSection";
import { OriginSection } from "./components/OriginSection";
import { aboutIntroContent, aboutOriginContent } from "../data/about";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={aboutNavigation} />

      <main className="flex flex-1 flex-col">
        <AboutIntroSection content={aboutIntroContent} />
        <OriginSection content={aboutOriginContent} />
      </main>

      <SiteFooter email="info@bhcad.ba" />
    </div>
  );
}
