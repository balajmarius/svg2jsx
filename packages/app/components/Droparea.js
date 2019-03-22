import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { noop } from '../shared/utils';

const DropRoot = styled.div`
  outline: 0;
  position: relative;
`;

function Droparea({ children, onDrop }) {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const rootProps = getRootProps();
  const inputProps = getInputProps();

  return (
    <DropRoot {...rootProps} onClick={noop}>
      <input {...inputProps} />
      {children(rootProps)}
    </DropRoot>
  );
}

Droparea.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default Droparea;
