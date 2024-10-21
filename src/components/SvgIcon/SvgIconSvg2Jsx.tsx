import React from "react";

import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

export interface SvgIconSvg2JsxProps extends SvgIconProps {}

export const SvgIconSvg2Jsx: React.FC<SvgIconSvg2JsxProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M21.6,6.7h-9.5C14.8,4.4,18.9,4.4,21.6,6.7z M21.6,17.3h-9.5C14.8,19.6,18.9,19.6,21.6,17.3z M14.1,13 c0-0.3,0.1-0.7,0.1-1s0-0.7-0.1-1.1h9.8c-0.1-0.7-0.3-1.4-0.6-1.9h-9.8c-1.1-2.4-3.7-4-6.4-4c-3.9,0-7.1,3.2-7.1,7.1 s3.2,7.1,7.1,7.1c2.9,0,5.3-1.6,6.4-4h9.8c0.3-0.7,0.6-1.4,0.6-2.1C23.9,13,14.1,13,14.1,13z" />
  </SvgIcon>
);

export default SvgIconSvg2Jsx;
