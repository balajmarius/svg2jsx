import React, { Fragment, ReactElement } from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

/**
 * Types
 */
interface Props {
  children: ReactElement;
}

const CSSReset = createGlobalStyle`
  html {    
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    min-height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul, pre {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  textarea, input, button {
    border: 0;
    outline: 0;
  }
`;

function Layout({ children }: Props) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Convert SVG to valid JSX" />
        <meta name="keywords" content="svg, jsx, svg2jsx" />
        <meta name="author" content="Bălaj Marius" />
        <meta name="copyright" content="Copyright Bălaj Marius 2019. All Rights Reserved." />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <CSSReset />
        <title>Editor - Convert SVG to valid JSX</title>
      </Head>
      {children}
    </Fragment>
  );
}

export default Layout;
