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
import { getCopy, type Locale } from "../i18n";

export type ServiceContext = "home" | "detail" | "discipline";

export type BaseService = {
  key: string;
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

const iconByKey: Record<string, (props: IconProps) => JSX.Element> = {
  cadCamSupport: IconCad,
  technicalConsulting: IconLaptop,
  quoting: IconQuote,
  businessAdministration: IconWindows,
  engineering: IconCog,
  mechanicalEngineering: IconMechanical,
  electricalEngineering: IconElectrical,
  architecturalEngineering: IconArchitectural,
  civilEngineering: IconCivil,
};

export function getServices(locale?: Locale): ReadonlyArray<BaseService> {
  const { services: localizedServices } = getCopy(locale);
  return localizedServices.map((service) => ({
    ...service,
    icon: iconByKey[service.key],
  }));
}

export const services: ReadonlyArray<BaseService> = getServices();

export function isHomeService(service: BaseService): service is HomeService {
  return (
    service.contexts.includes("home") &&
    typeof service.description === "string" &&
    typeof service.icon === "function"
  );
}

export function isServiceDetail(
  service: BaseService
): service is ServiceDetail {
  return (
    service.contexts.includes("detail") && Array.isArray(service.paragraphs)
  );
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
