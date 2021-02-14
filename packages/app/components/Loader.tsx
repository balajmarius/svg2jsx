import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';
import GridCell from './GridCell';

import IconSkeleton from '../icons/IconSkeleton';

const Gutter = styled.div`
  height: 100%;
  padding: 15px 0 15px 10px;
  border-left: 48px solid ${({ theme }) => theme.color.codGrey};
`;

const Loader: React.FC = () => {
  return (
    <Grid columns="1fr 1fr" gap={2} fullHeight>
      <GridCell fullHeight>
        <Gutter>
          <IconSkeleton fillColor="darkGrey" />
        </Gutter>
      </GridCell>
      <GridCell fullHeight>
        <Gutter>
          <IconSkeleton fillColor="darkGrey" />
        </Gutter>
      </GridCell>
    </Grid>
  );
};

export default Loader;
