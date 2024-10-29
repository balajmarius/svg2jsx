import React from "react";

import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

export interface SvgIconPendingProps extends SvgIconProps {}

export const SvgIconPending: React.FC<SvgIconPendingProps> = (props) => (
  <SvgIcon viewBox="0 0 100 100" {...props}>
    <circle
      cx="50"
      cy="50"
      r="32"
      fill="none"
      stroke="currentColor"
      strokeDasharray="50.26548245743669 50.26548245743669"
      strokeLinecap="round"
      strokeWidth="16"
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </SvgIcon>
);

export default SvgIconPending;
