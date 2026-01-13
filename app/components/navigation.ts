import type { NavigationItem } from "./types";
import { getCopy } from "../i18n";

const defaultNavigation: ReadonlyArray<NavigationItem> = getCopy().navigation;

export const homeNavigation = defaultNavigation;
export const aboutNavigation = defaultNavigation;
export const teamNavigation = defaultNavigation;
export const servicesNavigation = defaultNavigation;
export const contactNavigation = defaultNavigation;
