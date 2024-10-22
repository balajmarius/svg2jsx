import "@/static/css/tailwind.css";

import type { AppProps } from "next/app";
import { twMerge } from "tailwind-merge";
import { Roboto, Inconsolata } from "next/font/google";
import { IntlProvider } from "react-intl";

import AppBarCodeDeckStore from "@/core/AppBarCodeDeckStore";

import copy from "@/data/copy/en-EN.json";

const inconsolata400 = Inconsolata({
  subsets: ["latin"],
  variable: "--font-mono",
});

const robotoSans400 = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export default ({ Component, pageProps }: AppProps) => {
  return (
    <IntlProvider locale="en-EN" messages={copy}>
      <div className={twMerge(robotoSans400.variable, inconsolata400.variable, "font-sans flex flex-col h-screen")}>
        <Component {...pageProps} />
      </div>
    </IntlProvider>
  );
};
