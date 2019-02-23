import React, { Fragment } from 'react';

import StyleReset from '../shared/StyleReset';

function Layout({ children }) {
  return (
    <Fragment>
      <StyleReset />
      {children}
    </Fragment>
  );
}

export default Layout;
