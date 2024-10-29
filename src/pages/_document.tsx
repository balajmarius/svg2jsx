import { Html, Head, Main, NextScript } from "next/document";

import copy from "@/data/copy/en-EN.json";

export default () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={copy.META_DESCRIPTION} />
        <meta name="keywords" content={copy.META_KEYWORDS} />
        <meta name="copyright" content={copy.META_COPYRIGHT} />
      </Head>

      <body className="bg-gray-250 text-white font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
