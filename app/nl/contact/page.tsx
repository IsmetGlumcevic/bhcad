import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { SiteFooter } from "../../components/SiteFooter";
import { StructuredData } from "../../components/StructuredData";
import { ContactHero } from "../../contact/components/ContactHero";
import { contactSocialLinks } from "../../data/contact";
import { getCopy } from "../../i18n";
import { ORGANIZATION_NAME, SITE_URL } from "../../lib/seo";

const locale = "nl" as const;
const copy = getCopy(locale);

const contactUrl = `${SITE_URL}/nl/contact`;

export const metadata: Metadata = {
  title: `Contact ${ORGANIZATION_NAME}`,
  description: copy.contactPage.description,
  alternates: {
    canonical: contactUrl,
  },
  openGraph: {
    title: `Contact ${ORGANIZATION_NAME}`,
    description: copy.contactPage.description,
    url: contactUrl,
    type: "website",
    siteName: ORGANIZATION_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${ORGANIZATION_NAME}`,
    description: copy.contactPage.description,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${ORGANIZATION_NAME}`,
  url: contactUrl,
  description: copy.contactPage.description,
  mainEntity: {
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    email: copy.contactPage.details.email,
    telephone: copy.contactPage.details.phone,
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

export default function ContactPageNl() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-base-foreground">
      <Header
        navigation={copy.navigation}
        labels={{
          openMenu: copy.header.openMenuLabel,
          closeMenu: copy.header.closeMenuLabel,
        }}
      />
      <StructuredData data={contactSchema} id="contact-schema" />

      <main className="flex flex-1 flex-col">
        <ContactHero
          details={copy.contactPage.details}
          socialLinks={contactSocialLinks}
          labels={copy.contactPage.hero}
        />
      </main>

      <SiteFooter
        email={copy.contactPage.details.email}
        companyName={copy.footer.companyName}
        copyrightLabel={copy.footer.copyrightLabel}
      />
    </div>
  );
}
