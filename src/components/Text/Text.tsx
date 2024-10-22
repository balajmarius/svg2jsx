import React from "react";

import type { TextVariant, TextVariantMapping } from "@/components/Text";
import { twMerge } from "tailwind-merge";

export interface TextProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  variant: TextVariant;
  cx?: React.HTMLProps<HTMLElement>["className"];
}

const defaultTextVariantMapping: TextVariantMapping = {
  title: "h1",
  subtitle: "h2",
  body: "p",
  caption: "span",
  overline: "small",
};

const defaultTextVariantCSSMapping: TextVariantMapping = {
  title: "text-lg font-bold",
  subtitle: "text-lg leading-6",
  body: "text-base text-gray-50 font-mono",
  caption: "text-xs font-bold",
  overline: "text-xs font-bold uppercase",
};

export const Text: React.FC<TextProps> = ({ variant = "body", cx, ...props }) => {
  return React.createElement(defaultTextVariantMapping[variant], {
    ...props,
    className: twMerge(defaultTextVariantCSSMapping[variant], cx),
  });
};

export default Text;
