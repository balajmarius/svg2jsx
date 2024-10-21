import Head from "next/head";
import dynamic from "next/dynamic";

import copy from "@/data/copy/en-EN.json";

import { AppBar } from "@/components/AppBar";
import { AppBarSettings } from "@/components/AppBarSettings";

import { SvgIconSkeleton } from "@/components/SvgIcon";

const AppCodeDeck = dynamic(() => import("@/components/AppCodeDeck"), {
  loading: (props) => <SvgIconSkeleton {...props} />,
});

export default () => {
  return (
    <>
      <Head>
        <title>{copy.META_TITLE}</title>
      </Head>

      <AppBar />
      <AppBarSettings />
      <AppCodeDeck />
    </>
  );
};
