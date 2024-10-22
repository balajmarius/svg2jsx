import React from "react";

import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

export interface SvgIconClipboardProps extends SvgIconProps {
  copied?: boolean;
}

export const SvgIconClipboard: React.FC<SvgIconClipboardProps> = ({ copied, ...props }) => (
  <SvgIcon {...props}>
    {copied ? (
      <path d="M22,7c0-0.5-0.4-1-1-1H7C6.4,6,6,6.5,6,7v14c0,0.6,0.5,1,1,1h14c0.5,0,1-0.4,1-1V7z M7.5,7.5h13v13h-13V7.5z M2,15v2 c0,0.6,0.5,1,1,1h2v-1.5H3.5V15H2z M3.5,10.6V14H2v-3.4H3.5z M3.5,6v3.6H2V6H3.5z M15,2v1.5h1.5V5H18V3c0-0.5-0.4-1-1-1H15z M5,2H3 C2.4,2,2,2.5,2,3v2h1.5V3.5H5V2z M9.5,3.5H6V2h3.5V3.5z M14,3.5h-3.5V2H14V3.5z M17.5,11.1l-4.6,4.6l-2.1-2.1 c-0.2-0.2-0.7-0.2-0.9,0c-0.2,0.2-0.2,0.7,0,0.9l2.6,2.6c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2l5.1-5.1 c0.2-0.2,0.2-0.7,0-0.9C18.2,10.8,17.8,10.8,17.5,11.1z" />
    ) : (
      <path d="m6 19v2c0 .621.52 1 1 1h2v-1.5h-1.5v-1.5zm7.5 3h-3.5v-1.5h3.5zm4.5 0h-3.5v-1.5h3.5zm4-3h-1.5v1.5h-1.5v1.5h2c.478 0 1-.379 1-1zm-1.5-1v-3.363h1.5v3.363zm0-4.363v-3.637h1.5v3.637zm-13-3.637v3.637h-1.5v-3.637zm11.5-4v1.5h1.5v1.5h1.5v-2c0-.478-.379-1-1-1zm-10 0h-2c-.62 0-1 .519-1 1v2h1.5v-1.5h1.5zm4.5 1.5h-3.5v-1.5h3.5zm3-1.5v-2.5h-13v13h2.5v-1.863h1.5v3.363h-4.5c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v4.5h-3.5v-1.5z" />
    )}
  </SvgIcon>
);

export default SvgIconClipboard;
