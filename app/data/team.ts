export type TeamMember = {
  name: string;
  src: string;
  alt: string;
  grayscale: boolean;
};

export const teamMembers: ReadonlyArray<TeamMember> = [
  { name: "ENES", src: "/assets/team/enes.jpg", alt: "Enes", grayscale: true },
  { name: "ALBIN", src: "/assets/team/albin.jpg", alt: "Albin", grayscale: true },
  { name: "SANJA", src: "/assets/team/sanja.jpg", alt: "Sanja", grayscale: false },
  { name: "ADIS", src: "/assets/team/adis.jpg", alt: "Adis", grayscale: true },
  { name: "ELMA", src: "/assets/team/elma.jpg", alt: "Elma", grayscale: true },
  { name: "MIRZA", src: "/assets/team/mirza.jpg", alt: "Mirza", grayscale: true },
  { name: "KENAN", src: "/assets/team/kenan.jpg", alt: "Kenan", grayscale: true },
];

