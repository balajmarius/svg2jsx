export const TextVariants = ["overline", "caption", "body", "subtitle", "title"] as const;

export type TextVariant = (typeof TextVariants)[number];
export type TextVariantMapping = Record<TextVariant, string>;
