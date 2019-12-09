import React, { Fragment, ReactElement } from 'react';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class Root extends Document<DocumentInitialProps> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const initialRenderPage = ctx.renderPage;

    try {
      const initialProps = await Document.getInitialProps(ctx);

      ctx.renderPage = (): any | Promise<any> =>
        initialRenderPage({
          enhanceApp: (App: any) => (props: any): ReactElement =>
            sheet.collectStyles(<App {...props} />),
        });

      return {
        ...initialProps,
        styles: (
          <Fragment>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata"
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default Root;
