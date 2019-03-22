import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import Grid from './Grid';
import GridCell from './GridCell';

function Subheadings({ primary, secondary, inverse }) {
  const align = inverse ? 'left' : 'right';
  const direction = inverse ? 'rtl' : 'ltr';

  return (
    <Grid columns="1fr auto" direction={direction} gap={10}>
      <GridCell>
        <Text align={align} display="monospace" size="medium" textColor="lightGrey">
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

Subheadings.propTypes = {
  inverse: PropTypes.bool,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
};

Subheadings.defaultProps = {
  inverse: false,
};

export default Subheadings;
