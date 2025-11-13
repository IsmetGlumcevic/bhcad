import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import { contactNavigation } from "../components/navigation";
import { ContactHero } from "./components/ContactHero";
import { contactDetails, contactSocialLinks } from "../data/contact";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={contactNavigation} />

      <main className="flex flex-1 flex-col">
        <ContactHero details={contactDetails} socialLinks={contactSocialLinks} />
      </main>

      <SiteFooter email="info@bhcad.ba" />
    </div>
  );
}
