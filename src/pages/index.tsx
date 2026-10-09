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
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from trusted static metadata.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <AppBar />
      <AppBarSettings />
      <AppCodeDeck />
    </>
  );
};
