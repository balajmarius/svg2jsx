import React, { Fragment, ReactElement } from 'react';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { AppType, RenderPageResult } from 'next/dist/next-server/lib/utils';
import { ServerStyleSheet } from 'styled-components';

class Root extends Document<DocumentInitialProps> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const initialRenderPage = ctx.renderPage;

    try {
      const initialProps = await Document.getInitialProps(ctx);

      ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        initialRenderPage({
          enhanceApp: (App: AppType) => (props: any): ReactElement =>
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
