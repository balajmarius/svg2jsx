import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color } from '../shared/constants';

import Grid from '../components/Grid';
import GridCell from '../components/GridCell';
import Switch from '../components/Switch';
import Headings from '../components/Headings';

import IconGear from '../icons/IconGear';

const Section = styled.section`
  padding: 10px 30px;
  border-bottom: 2px solid ${color.black};
  background: linear-gradient(
    to left,
    ${color.grey},
    ${color.grey} calc(50% - 1px),
    ${color.black} calc(50% - 1px),
    ${color.black} calc(50% + 1px),
    ${color.grey} calc(50% + 1px),
    ${color.grey}
  );
`;

const Status = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 40px;
  justify-content: center;
  background: ${color.purple};
  border: 2px solid ${color.black};
`;

function SettingsBar({ variant }) {
  return (
    <Section>
      <Grid columns="1fr 2fr 1fr">
        <GridCell>
          <Switch label="Optimize SVG" />
        </GridCell>
        <GridCell>
          <Grid columns="1fr auto 1fr" gap={10}>
            <GridCell>
              <Headings primary="SVG" secondary="Input" />
            </GridCell>
            <GridCell>
              <Status variant={variant}>
                <IconGear />
              </Status>
            </GridCell>
            <GridCell>
              <Headings primary="JSX" secondary="Output" inverse />
            </GridCell>
          </Grid>
        </GridCell>
      </Grid>
    </Section>
  );
}

SettingsBar.propTypes = {
  variant: PropTypes.string.isRequired,
};

export default SettingsBar;
