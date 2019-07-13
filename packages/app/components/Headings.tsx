import React from 'react';

import Text from './Text';
import Grid from './Grid';
import GridCell from './GridCell';

interface HeadingsType {
  primary: string;
  secondary: string;
  inverse?: boolean;
}

function Headings({ primary, secondary, inverse }: HeadingsType) {
  const align = inverse ? 'left' : 'right';
  const direction = inverse ? 'rtl' : 'ltr';

  return (
    <Grid columns="1fr auto" direction={direction} gap={10}>
      <GridCell>
        <Text
          align={align}
          display="monospace"
          size="medium"
          textColor="lightGrey"
        >
          {secondary}
        </Text>
      </GridCell>
      <GridCell>
        <Text align={align} fontWeight="bold" size="large">
          {primary}
        </Text>
      </GridCell>
    </Grid>
  );
}

Headings.defaultProps = {
  inverse: false,
};

export default Headings;
