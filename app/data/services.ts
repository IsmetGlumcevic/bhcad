import type { JSX } from "react";
import type { IconProps } from "../components/icons";
import type { Service } from "../components/types";
import {
  IconArchitectural,
  IconCad,
  IconCivil,
  IconCog,
  IconElectrical,
  IconLaptop,
  IconMechanical,
  IconQuote,
  IconWindows,
} from "../components/icons";

export type ServiceContext = "home" | "detail" | "discipline";

type BaseService = {
  title: string;
  contexts: ReadonlyArray<ServiceContext>;
  description?: string;
  icon?: (props: IconProps) => JSX.Element;
  featured?: boolean;
  paragraphs?: ReadonlyArray<string>;
  ctaLabel?: string;
  ctaHref?: string;
  ariaLabel?: string;
  image?: string;
  imageAlt?: string;
};

export type HomeService = BaseService & Service;
export type ServiceDetail = BaseService & {
  paragraphs: ReadonlyArray<string>;
};
export type EngineeringDiscipline = ServiceDetail & {
  ctaLabel: string;
  ctaHref: string;
  ariaLabel: string;
};

export const services: ReadonlyArray<BaseService> = [
  {
    title: "CAD/CAM Technical support",
    description:
      "At bhCAD, we pride ourselves on providing top-notch CAD/CAM technical support, which includes 2D and 3D drawing services and machine element programming.",
    icon: IconCad,
    image: "/assets/service/images/CAD:CAM-Technical-support.png",
    imageAlt: "Engineer providing CAD/CAM technical support on a workstation",
    paragraphs: [
      "At bhCAD, we pride ourselves on providing top-notch CAD/CAM technical support, which includes 2D and 3D drawing services and machine element programming. Our expert team utilizes the latest technologies to assist you in designing and developing high-quality products. Whether it’s creating detailed technical drawings or programming complex machine parts, we ensure precision and efficiency at every step.",
    ],
    contexts: ["home", "detail"],
  },
  {
    title: "Technical consulting and support",
    description:
      "Our technical support encompasses essential consulting services to enhance your business operations.",
    icon: IconLaptop,
    image: "/assets/service/images/Technical-consulting-and-support.png",
    imageAlt: "Consultant collaborating with a client over a laptop",
    paragraphs: [
      "Our technical support encompasses essential consulting services to enhance your business operations. We offer comprehensive technical consulting to ensure your equipment and software operate optimally, maximizing efficiency and minimizing downtime.",
    ],
    contexts: ["home", "detail"],
  },
  {
    title: "Administrative Services",
    image: "/assets/service/images/Administrative-Services.png",
    imageAlt: "Administrative professional organizing schedules and documents",
    paragraphs: [
      "Welcome to our Administrative Services Hub! We specialize in streamlining your administrative tasks, allowing you to focus on what truly matters - growing your business. From managing schedules and coordinating meetings to handling correspondence and data entry, our dedicated team ensures seamless operations. Trust us to optimize efficiency and enhance productivity, so you can achieve your goals with ease.",
      "Discover the power of efficient administration with our comprehensive services. From organizing your inbox to orchestrating complex projects, we’re here to lighten your workload and elevate your productivity. With attention to detail and a commitment to excellence, let us be your trusted partner in navigating the demands of modern business.",
    ],
    contexts: ["detail"],
  },
  {
    title: "Nesting and Quoting in ERP Packages",
    image: "/assets/service/images/Nesting-and-Quoting-in-ERP-Packages.png",
    imageAlt: "Technician optimizing nesting and quoting inside an ERP interface",
    paragraphs: [
      "We optimize fabrication processes and reduce waste through advanced nesting techniques. Additionally, we offer quoting services within ERP packages, ensuring your processes are not only efficient but also cost‑effective.",
    ],
    contexts: ["detail"],
  },
  {
    title: "Drawing and part fabrication",
    image: "/assets/service/images/Drawing-and-part-fabrication.png",
    imageAlt: "Detailed technical drawing being reviewed beside fabricated parts",
    paragraphs: [
      "Our team specializes in creating precise technical drawings that meet the highest industry standards. No matter the complexity of your requirements, we are here to provide solutions tailored to your specific needs.",
    ],
    contexts: ["detail"],
  },
  {
    title: "Quoting",
    description:
      "In sheet metal quoting, optimizing price involves minimizing costs through maximal plate usability, ensuring competitive pricing without compromising quality or delivery.",
    featured: false,
    icon: IconQuote,
    image: "/assets/service/images/Nesting-and-Quoting-in-ERP-Packages.png",
    imageAlt: "Quotation and nesting workflow displayed on a screen",
    contexts: ["home"],
  },
  {
    title: "Engineering",
    description:
      "Applied R&D and process optimization to refine parts, assemblies, and production flows across industries.",
    icon: IconCog,
    image: "/assets/service/images/Mechanical-Engineering.png",
    imageAlt: "Engineer refining mechanical designs on a laptop",
    contexts: ["home"],
  },
  {
    title: "Business administration",
    description:
      "We specialize in streamlining your administrative tasks, allowing you to focus on what truly matters – growing your business.",
    icon: IconWindows,
    image: "/assets/service/images/Administrative-Services.png",
    imageAlt: "Administrative tools and dashboards on a desk",
    contexts: ["home"],
  },
  {
    title: "Mechanical Engineering",
    description:
      "Efficient CAD/CAM design, 3D models, and machine programming that turn concepts into ready-to-make components.",
    icon: IconMechanical,
    image: "/assets/service/images/Mechanical-Engineering.png",
    imageAlt: "Mechanical engineer reviewing a 3D model on screen",
    paragraphs: [
      "Precision in Motion: Engineered for Efficiency. At bhCAD, our mechanical engineering services bring your ideas to life with expert CAD/CAM design, 3D modeling, and machine programming.",
      "We specialize in optimizing components for manufacturing, from automotive parts to industrial machinery, ensuring durability, cost savings, and seamless integration. Whether it is stress analysis, prototyping, or custom tooling, our team minimizes waste and maximizes performance using advanced tools and software. Ideal for the growing industrial sector, we deliver fast turnarounds without compromising quality.",
    ],
    ctaLabel: "Get a Free Consultation",
    ctaHref: "/contact",
    ariaLabel: "Get a free consultation for mechanical engineering",
    contexts: ["home", "discipline"],
  },
  {
    title: "Electrical Engineering",
    description:
      "Circuit design, wiring schematics, and automation layouts built for safe, energy-efficient systems and smart controls.",
    icon: IconElectrical,
    image: "/assets/service/images/Electrical-Engineering.png",
    imageAlt: "Electrical engineer configuring panels and schematics",
    paragraphs: [
      "Powering Innovation: Safe, Smart, and Sustainable. bhCAD's electrical engineering expertise covers circuit design, wiring schematics, and automation systems, all powered by precise CAD simulations.",
      "We handle everything from renewable energy setups to smart building controls, ensuring compliance with EU standards and energy efficiency. Our services include PCB layouts, power distribution planning, and IoT integrations, reducing risks like overloads while boosting reliability. Perfect for modern renovations or new builds.",
    ],
    ctaLabel: "Contact Us Today",
    ctaHref: "/contact",
    ariaLabel: "Contact bhCAD about electrical engineering services",
    contexts: ["home", "discipline"],
  },
  {
    title: "Architectural Engineering",
    description:
      "2D/3D renders, structural checks, and BIM support that balance aesthetics, safety, and sustainability for every build.",
    icon: IconArchitectural,
    image: "/assets/service/images/Architectural-Engineering.png",
    imageAlt: "Architectural plans and 3D renderings on a desk",
    paragraphs: [
      "Designing Spaces That Inspire: Form Meets Function. From concept sketches to detailed blueprints, bhCAD's architectural engineering blends creativity with technical precision.",
      "We offer 2D/3D rendering, structural analysis, and BIM (Building Information Modeling) for residential, commercial, and public projects. Our focus on sustainable materials and ergonomic designs ensures buildings that are beautiful, safe, and eco-friendly.",
    ],
    ctaLabel: "Start Your Design",
    ctaHref: "/contact",
    ariaLabel: "Start an architectural engineering design with bhCAD",
    contexts: ["home", "discipline"],
  },
  {
    title: "Civil Engineering",
    description:
      "Site surveys, structural planning, and infrastructure design that keep roads, bridges, and utilities durable and on budget.",
    icon: IconCivil,
    image: "/assets/service/images/Civil-Engineering.png",
    imageAlt: "Civil engineer inspecting infrastructure plans outdoors",
    paragraphs: [
      "Building Strong Foundations: Infrastructure That Lasts. bhCAD provides comprehensive civil engineering solutions, including site surveys, structural engineering, and infrastructure planning for roads, bridges, and utilities.",
      "Using CAD tools for hydrology modeling, geotechnical analysis, and project quoting, we ensure projects are resilient, budget-friendly, and environmentally sound. Lay the groundwork for success—request a quote and let us plan a durable path forward.",
    ],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
    ariaLabel: "Request a civil engineering quote from bhCAD",
    contexts: ["home", "discipline"],
  },
] as const;

export function isHomeService(service: BaseService): service is HomeService {
  return (
    service.contexts.includes("home") &&
    typeof service.description === "string" &&
    typeof service.icon === "function"
  );
}

export function isServiceDetail(service: BaseService): service is ServiceDetail {
  return service.contexts.includes("detail") && Array.isArray(service.paragraphs);
}

export function isEngineeringDiscipline(
  service: BaseService
): service is EngineeringDiscipline {
  return (
    service.contexts.includes("discipline") &&
    Array.isArray(service.paragraphs) &&
    Boolean(service.ctaLabel && service.ctaHref && service.ariaLabel)
  );
}
