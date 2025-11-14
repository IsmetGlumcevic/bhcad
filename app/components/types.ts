import type { IconProps } from "./icons";
import type { JSX } from "react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: (props: IconProps) => JSX.Element;
  featured?: boolean;
};
