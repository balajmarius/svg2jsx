import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import { color, fontFamily, fontSize } from '../shared/constants';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  input, button {
    border: 0;
    outline: 0;
  }
  body {    
    color: ${color.white};
    background: ${color.black};
    font-size: ${fontSize.base};
    font-family: ${fontFamily.sans};
  }
 
`;

function Layout({ children }) {
  return (
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  );
}

export default Layout;
