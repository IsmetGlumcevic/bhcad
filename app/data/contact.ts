export type ContactSocialIcon = "facebook" | "instagram" | "linkedin";

export type ContactSocialLink = {
  name: string;
  href: string;
  icon: ContactSocialIcon;
};

export type ContactDetails = {
  email: string;
  phone: string;
  address: string;
  mapEmbedUrl: string;
};

export const contactDetails: ContactDetails = {
  email: "info@bhcad.ba",
  phone: "+387 61 140 810",
  address: "Školska 10 Zenica 72 000, Bosnia and Herzegovina",
  mapEmbedUrl:
    "https://www.google.com/maps?q=%C5%A0kolska%2010%2C%20Zenica%2072000&z=18&output=embed&hl=bs",
};

export const contactSocialLinks: ReadonlyArray<ContactSocialLink> = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61561074453074",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bh_cad/",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bh-cad-a43089266/?originalSubdomain=ba",
    icon: "linkedin",
  },
];

