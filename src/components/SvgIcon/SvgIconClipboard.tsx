import React from "react";

import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

export interface SvgIconClipboardProps extends SvgIconProps {
  copied?: boolean;
}

export const SvgIconClipboard: React.FC<SvgIconClipboardProps> = ({ copied, ...props }) => (
  <SvgIcon {...props}>
    {copied ? (
      <path d="m22 7c0-.478-.379-1-1-1h-14c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1h14c.478 0 1-.379 1-1zm-20 8v2c0 .621.52 1 1 1h2v-1.5h-1.5v-1.5zm1.5-4.363v3.363h-1.5v-3.363zm0-4.637v3.637h-1.5v-3.637zm11.5-4v1.5h1.5v1.5h1.5v-2c0-.478-.379-1-1-1zm-10 0h-2c-.62 0-1 .519-1 1v2h1.5v-1.5h1.5zm4.5 1.5h-3.5v-1.5h3.5zm4.5 0h-3.5v-1.5h3.5z" />
    ) : (
      <path d="m6 19v2c0 .621.52 1 1 1h2v-1.5h-1.5v-1.5zm7.5 3h-3.5v-1.5h3.5zm4.5 0h-3.5v-1.5h3.5zm4-3h-1.5v1.5h-1.5v1.5h2c.478 0 1-.379 1-1zm-1.5-1v-3.363h1.5v3.363zm0-4.363v-3.637h1.5v3.637zm-13-3.637v3.637h-1.5v-3.637zm11.5-4v1.5h1.5v1.5h1.5v-2c0-.478-.379-1-1-1zm-10 0h-2c-.62 0-1 .519-1 1v2h1.5v-1.5h1.5zm4.5 1.5h-3.5v-1.5h3.5zm3-1.5v-2.5h-13v13h2.5v-1.863h1.5v3.363h-4.5c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v4.5h-3.5v-1.5z" />
    )}
  </SvgIcon>
);

export default SvgIconClipboard;
