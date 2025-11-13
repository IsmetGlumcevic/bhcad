import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import { servicesNavigation } from "../components/navigation";
import { ServicesHero } from "./components/ServicesHero";
import { ServicesContent } from "./components/ServicesContent";
import { ExpertiseLogos } from "./components/ExpertiseLogos";
import { PartnersSection } from "./components/PartnersSection";
import { expertiseLogos } from "../data/expertise";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={servicesNavigation} />

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
