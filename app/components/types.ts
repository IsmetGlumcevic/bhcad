import type { IconProps } from "./icons";

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
