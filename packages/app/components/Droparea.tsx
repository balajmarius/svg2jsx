import React from 'react';
import styled from 'styled-components';
import { useDropzone, DropEvent } from 'react-dropzone';

import color from '../styles/color';

interface DropareaType {
  children: Function;
  onDrop?(acceptedFiles: File[], rejectedFiles: File[], event: DropEvent): void;
}

const Dropable = styled.div`
  outline: 0;
  position: relative;
  border-right: 1px solid ${color.codGrey};
`;

function Droparea({ children, onDrop }: DropareaType) {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const rootProps = getRootProps();
  const inputProps = getInputProps();

  return (
    <Dropable {...rootProps}>
      <input {...inputProps} accept="image/svg+xml" multiple={false} />
      {children(rootProps)}
    </Dropable>
  );
}

export default Droparea;
