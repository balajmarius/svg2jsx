import React from 'react';
import styled from 'styled-components';

import color from '../styles/color';

import Grid from './Grid';
import GridCell from './GridCell';

import IconSkeleton from '../icons/IconSkeleton';

const Gutter = styled.div`
  padding: 15px 0 15px 10px;
  border-left: 48px solid ${color.codGrey};
`;

function Loader() {
  return (
    <Grid columns="1fr 1fr" gap={2}>
      <GridCell>
        <Gutter>
          <IconSkeleton fillColor="darkGrey" />
        </Gutter>
      </GridCell>
      <GridCell>
        <Gutter>
          <IconSkeleton fillColor="darkGrey" />
        </Gutter>
      </GridCell>
    </Grid>
  );
}

export default Loader;
