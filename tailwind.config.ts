import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        red: {
          50: "#F10C4A",
        },
        pink: {
          50: "#FF659F",
        },
        green: {
          50: "#57FFB1",
          100: "#21D179",
        },
        purple: {
          50: "#8A74fC",
          100: "#5522E6",
        },
        gray: {
          50: "#949494",
          100: "#363644",
          150: "#232329",
          200: "#2B2B35",
          250: "#0D0D0D",
          300: "#1C1C1C",
        },
      },
      borderWidth: ({ theme }) => ({
        xl: theme("width.14"),
      }),
    },
  },
};

export default config;
