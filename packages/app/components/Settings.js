import React from 'react';
import styled from 'styled-components';

import { Grid, GridCell } from './Grid';

import { Colour, FontSize, FontFamily } from '../shared/Globals';

/**
 * Styled Components
 */
const StyledSection = styled.section`
  margin-bottom: 2px;
  background: ${Colour.grey};
  font-size: ${FontSize.medium};
  font-family: ${FontFamily.monospace};
`;

/**
 * Component
 */
function Settings() {
  return (
    <StyledSection>
      <Grid justify="space-around">
        <GridCell>Input (Paste your code)</GridCell>
        <GridCell>Output (React valid SVG)</GridCell>
      </Grid>
    </StyledSection>
  );
}

export default Settings;
