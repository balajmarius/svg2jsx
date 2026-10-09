import Head from "next/head";

import copy from "@/data/copy/en-EN.json";

import { AppBar } from "@/components/AppBar";
import { AppCodeDeck } from "@/components/AppCodeDeck";
import { AppBarSettings } from "@/components/AppBarSettings";

import { APP_URL, structuredData } from "@/utils/structuredData";

export default () => {
  return (
    <>
      <Head>
        <title>{copy.META_TITLE}</title>
        <link rel="canonical" href={APP_URL} />
      </Head>

      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD with HTML characters escaped.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <AppBar />
      <AppBarSettings />
      <AppCodeDeck />
    </>
  );
};
