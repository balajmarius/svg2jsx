import React, { Fragment, ReactElement } from 'react';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { RenderPageResult, AppType } from 'next-server/dist/lib/utils';
import { ServerStyleSheet } from 'styled-components';

class Root extends Document<DocumentInitialProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const initialRenderPage = ctx.renderPage;

    try {
      const initialProps = await Document.getInitialProps(ctx);
      const initialStyles = initialProps.styles;
      const styleTags = sheet.getStyleElement();

      ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> => {
        return initialRenderPage({
          enhanceApp: (App: AppType) => (props): ReactElement =>
            sheet.collectStyles(<App {...props} />),
        });
      };

      return {
        ...initialProps,
        styles: (
          <Fragment>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata"
            />
            {initialStyles}
            {styleTags}
          </Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default Root;
