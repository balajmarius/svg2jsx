import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import Grid from './Grid';
import GridCell from './GridCell';

function Headings({ primary, secondary, inverse }) {
  const align = inverse ? 'left' : 'right';
  const direction = inverse ? 'rtl' : 'ltr';

  return (
    <Grid columns="1fr auto" direction={direction} gap={10}>
      <GridCell>
        <Text align={align} display="mono" size="medium" textColor="lightGrey">
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

Headings.propTypes = {
  inverse: PropTypes.bool,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
};

Headings.defaultProps = {
  inverse: false,
};

export default Headings;
