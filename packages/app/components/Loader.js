import React from 'react';
import styled from 'styled-components';

import { color } from '../shared/constants';

import Grid from './Grid';
import GridCell from './GridCell';

import IconShimmer from '../icons/IconShimmer';

const Gutter = styled.div`
  height: 100vh;
  padding: 15px 0 15px 10px;
  border-left: 48px solid ${color.codGrey};
`;

function Loader() {
  return (
    <Grid columns="1fr 1fr" gap={2}>
      <GridCell>
        <Gutter>
          <IconShimmer fillColor="darkGrey" />
        </Gutter>
      </GridCell>
      <GridCell>
        <Gutter>
          <IconShimmer fillColor="darkGrey" />
        </Gutter>
      </GridCell>
    </Grid>
  );
}

export default Loader;
