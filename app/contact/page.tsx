import type { Metadata } from "next";
import { Header } from "../components/Header";
import { SiteFooter } from "../components/SiteFooter";
import { contactNavigation } from "../components/navigation";
import { StructuredData } from "../components/StructuredData";
import { ContactHero } from "./components/ContactHero";
import { contactDetails, contactSocialLinks } from "../data/contact";
import { ORGANIZATION_NAME, SITE_URL } from "../lib/seo";

const contactUrl = `${SITE_URL}/contact`;
const contactDescription =
  "Get in touch with bhCAD for CAD/CAM support, engineering consultancy, and administrative services via email, phone, or social channels.";

export const metadata: Metadata = {
  title: `Contact ${ORGANIZATION_NAME}`,
  description: contactDescription,
  alternates: {
    canonical: contactUrl,
  },
  openGraph: {
    title: `Contact ${ORGANIZATION_NAME}`,
    description: contactDescription,
    url: contactUrl,
    type: "website",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${ORGANIZATION_NAME}`,
    description: contactDescription,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${ORGANIZATION_NAME}`,
  url: contactUrl,
  description: contactDescription,
  mainEntity: {
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    email: contactDetails.email,
    telephone: contactDetails.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Školska 10",
      addressLocality: "Zenica",
      postalCode: "72000",
      addressCountry: "BA",
    },
    sameAs: contactSocialLinks.map((link) => link.href),
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header navigation={contactNavigation} />
      <StructuredData data={contactSchema} id="contact-schema" />

      <main className="flex flex-1 flex-col">
        <ContactHero details={contactDetails} socialLinks={contactSocialLinks} />
      </main>

      <SiteFooter email="info@bhcad.ba" />
    </div>
  );
}
