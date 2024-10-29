export const ButtonVariants = ["contained", "text"] as const;

export type ButtonVariant = (typeof ButtonVariants)[number];
