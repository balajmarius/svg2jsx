import React, { Fragment } from 'react';
import AppNext from 'next/app';
import Head from 'next/head';

class App extends AppNext {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Editor - SVG2JSX</title>
        </Head>
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default App;
