import React from 'react';

import Grid from '../components/Grid';
import GridCell from '../components/GridCell';

function Playground() {
  return (
    <Grid columns="1fr 1fr">
      <GridCell>1</GridCell>
      <GridCell>2</GridCell>
    </Grid>
  );
}

export default Playground;
