export const SITE_URL = "https://bhcad.ba";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61561074453074",
  instagram: "https://www.instagram.com/bh_cad/",
  linkedin: "https://www.linkedin.com/in/bh-cad-a43089266/?originalSubdomain=ba",
};

export const ORGANIZATION_NAME = "bhCAD";

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORGANIZATION_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/bhcad-logo-green.png`,
  sameAs: Object.values(SOCIAL_LINKS),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@bhcad.ba",
      telephone: "+38761140810",
      areaServed: "EU",
      availableLanguage: ["en", "bs"],
    },
  ],
};

