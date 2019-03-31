import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { noop } from '../shared/utils';
import { color } from '../shared/constants';

const Dropable = styled.div`
  outline: 0;
  position: relative;
  border-right: 1px solid ${color.codGrey};
`;

function Droparea({ children, onDrop }) {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const rootProps = getRootProps();
  const inputProps = getInputProps();

  return (
    <Dropable {...rootProps} onClick={noop}>
      <input {...inputProps} />
      {children(rootProps)}
    </Dropable>
  );
}

Droparea.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default Droparea;
