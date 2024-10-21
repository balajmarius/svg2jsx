import React from "react";
import { twMerge } from "tailwind-merge";

import type { SvgIconSize, SvgIconSizeMapping } from "./types";

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  size?: SvgIconSize;
  cx?: React.HTMLProps<HTMLElement>["className"];
}

const defaultSvgIconSizeMapping: SvgIconSizeMapping = {
  sm: "w-4",
  md: "w-5",
  lg: "w-10",
  xl: "w-16",
};

export const SvgIcon: React.FC<SvgIconProps> = ({ cx, size = "md", ...props }) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      className={twMerge("fill-current", defaultSvgIconSizeMapping[size], cx)}
      {...props}
    />
  );
};

export default SvgIcon;
