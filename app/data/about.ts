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
  headingLines: [string, string];
  highlight: string;
  paragraphs: ReadonlyArray<string>;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const aboutIntroContent: AboutIntroContent = {
  heading: "About us",
  highlight: "global cooperation with professional teams",
  paragraphs: [
    "Today's modern industry is based on global cooperation with professional teams which are specialized in online technical support in many different branches of the economy.",
    "The ideas came to be for this very reason, we're happy to share our knowledge with you and help you with the whole organization process. We're open to any kind of realization of your projects like online support, drawing, processing drawings for production, processing data in ERP packages, administrative work, etc. We support a wide range of industries such as, technical industries (construction, the wood and steel industries, the mechanical industry, etc.)",
  ],
  image: {
    src: "/assets/about-1.png",
    alt: "bhCAD team",
    width: 1600,
    height: 900,
  },
};

export const aboutOriginContent: AboutOriginContent = {
  headingLines: ["Where are", "we from"],
  highlight: "Bosnia & Herzegovina",
  paragraphs: [
    "Bosnia & Herzegovina is a land full of cultural heritage, natural beauty, and tourist attractions and it represents a crossroad of many civilizations and cultures. Thousand years of cultural diversity merged into Bosnia & Herzegovina which makes it one of the most fascinating countries in southern Europe. It's a country where you can find an Ottoman mosque, Jewish synagogue, and catholic and orthodox churches on the same corner of any street.",
  ],
  image: {
    src: "/assets/about-2.jpg",
    alt: "Bosnia and Herzegovina — Mostar Old Bridge",
    width: 1400,
    height: 900,
  },
};

