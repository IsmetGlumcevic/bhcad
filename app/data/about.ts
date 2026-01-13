import { getCopy } from "../i18n";

export type AboutIntroContent = {
  heading: string;
  highlight: string;
  paragraphs: ReadonlyArray<string>;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type AboutOriginContent = {
  headingLines: Readonly<[string, string]>;
  highlight: string;
  paragraphs: ReadonlyArray<string>;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const { aboutPage } = getCopy();

export const aboutIntroContent: AboutIntroContent = aboutPage.intro;
export const aboutOriginContent: AboutOriginContent = aboutPage.origin;
