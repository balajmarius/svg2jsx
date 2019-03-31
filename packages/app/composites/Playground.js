import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '../components/Grid';
import GridCell from '../components/GridCell';
import Droparea from '../components/Droparea';
import Editor from '../components/Editor';
import Tutorial from '../components/Tutorial';

function Playground({ svg, jsx, onChange, onDrop }) {
  return (
    <Grid columns="1fr 1fr" gap={2}>
      <GridCell>
        <Droparea onDrop={onDrop}>
          {({ onClick }) => (
            <Fragment>
              <Tutorial onClick={onClick} />
              <Editor value={svg} mode="xml" onChange={onChange} />
            </Fragment>
          )}
        </Droparea>
      </GridCell>
      <GridCell>
        <Editor value={jsx} mode="jsx" readOnly />
      </GridCell>
    </Grid>
  );
}

Playground.propTypes = {
  svg: PropTypes.string.isRequired,
  jsx: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default Playground;
