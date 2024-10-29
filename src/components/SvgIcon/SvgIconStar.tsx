import React from "react";

import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

export interface SvgIconStarProps extends SvgIconProps {}

export const SvgIconStar: React.FC<SvgIconStarProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M22.9,8.4l-6.6-0.6c-0.4,0-0.8-0.3-0.9-0.7L13,1.3c-0.2-0.6-0.9-0.9-1.5-0.6c-0.3,0.1-0.5,0.3-0.6,0.6 L8.6,7.1C8.4,7.5,8.1,7.7,7.6,7.8L1,8.4C0.4,8.4,0,9,0,9.6c0,0.3,0.2,0.5,0.4,0.7l5,4.4c0.3,0.3,0.5,0.7,0.4,1.1L4.2,22 c-0.1,0.6,0.2,1.2,0.9,1.4c0.3,0.1,0.6,0,0.8-0.1l5.5-3.2c0.4-0.2,0.8-0.2,1.2,0l5.5,3.2c0.5,0.3,1.2,0.1,1.6-0.4 c0.2-0.3,0.2-0.6,0.1-0.8l-1.5-6.1c-0.1-0.4,0-0.8,0.4-1.1l5-4.4c0.5-0.4,0.5-1.2,0-1.6C23.5,8.5,23.2,8.4,22.9,8.4z" />
  </SvgIcon>
);

export default SvgIconStar;
