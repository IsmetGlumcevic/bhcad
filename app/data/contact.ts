import { getCopy } from "../i18n";
import { SOCIAL_LINKS } from "../lib/seo";

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

const { contactPage } = getCopy();

export const contactDetails: ContactDetails = contactPage.details;

export const contactSocialLinks: ReadonlyArray<ContactSocialLink> = [
  {
    name: "Facebook",
    href: SOCIAL_LINKS.facebook,
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    icon: "linkedin",
  },
];
