export const SvgIconSizes = ["sm", "md", "lg", "xl", "full"] as const;

export type SvgIconSize = (typeof SvgIconSizes)[number];
export type SvgIconSizeMapping = Record<SvgIconSize, string>;
