import "@/static/css/tailwind.css";

import type { AppProps } from "next/app";
import { twMerge } from "tailwind-merge";
import { Roboto, Inconsolata } from "next/font/google";
import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import copy from "@/data/copy/en-EN.json";

import AppBarCodeDeckStore from "@/core/AppBarCodeDeckStore";

const inconsolata400 = Inconsolata({
  subsets: ["latin"],
  variable: "--font-mono",
});

const robotoSans400 = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const client = new QueryClient();

export default ({ Component, pageProps }: AppProps) => {
  return (
    <IntlProvider locale="en-EN" messages={copy}>
      <QueryClientProvider client={client}>
        <AppBarCodeDeckStore>
          <div className={twMerge(robotoSans400.variable, inconsolata400.variable, "font-sans flex flex-col h-screen")}>
            <Component {...pageProps} />
          </div>
        </AppBarCodeDeckStore>
      </QueryClientProvider>
    </IntlProvider>
  );
};
