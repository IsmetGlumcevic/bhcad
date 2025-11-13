import type { Service } from "../components/types";
import { IconCad, IconCog, IconLaptop, IconQuote, IconWindows } from "../components/icons";

export const homeServices: ReadonlyArray<Service> = [
  {
    title: "CAD/CAM Technical support",
    description:
      "At bhCAD, we pride ourselves on providing top-notch CAD/CAM technical support, which includes 2D and 3D drawing services and machine element programming.",
    icon: IconCad,
  },
  {
    title: "Technical consulting and support",
    description:
      "Our technical support encompasses essential consulting services to enhance your business operations.",
    icon: IconLaptop,
  },
  {
    title: "Quoting",
    description:
      "In sheet metal quoting, optimizing price involves minimizing costs through maximal plate usability, ensuring competitive pricing without compromising quality or delivery.",
    featured: false,
    icon: IconQuote,
  },
  {
    title: "Enginering",
    description:
      "At bhCAD, we pride ourselves on providing top-notch CAD/CAM technical support, which includes 2D and 3D drawing services and machine element programming.",
    icon: IconCog,
  },
  {
    title: "Business administration",
    description:
      "We specialize in streamlining your administrative tasks, allowing you to focus on what truly matters – growing your business.",
    icon: IconWindows,
  },
];

