import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document from 'next/document';

class Root extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): any =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: unknown): unknown => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <Fragment>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata" />
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
