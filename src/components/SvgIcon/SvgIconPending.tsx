import React from "react";

import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

export interface SvgIconPendingProps extends SvgIconProps {}

export const SvgIconPending: React.FC<SvgIconPendingProps> = (props) => (
  <SvgIcon viewBox="0 0 100 100" className="animate-spin" {...props}>
    <circle
      cx="50"
      cy="50"
      r="24"
      fill="none"
      stroke="currentColor"
      strokeDasharray="50.26548245743669 50.26548245743669"
      strokeLinecap="round"
      strokeWidth="8"
    />
  </SvgIcon>
);

export default SvgIconPending;
