import React from 'react';
import styled from 'styled-components';
import { useDropzone, DropEvent } from 'react-dropzone';

import color from '../styles/color';

interface IDroparea {
  children: Function;
  onDrop?(acceptedFiles: File[], rejectedFiles: File[], event: DropEvent): void;
}

const Dropable = styled.div`
  outline: 0;
  height: 100%;
  position: relative;
  border-right: 1px solid ${color.codGrey};
`;

function Droparea({ children, onDrop }: IDroparea) {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const rootProps = getRootProps();
  const inputProps = getInputProps();

  return (
    <Dropable {...rootProps} onClick={undefined}>
      <input {...inputProps} accept="image/svg+xml" multiple={false} />
      {children(rootProps)}
    </Dropable>
  );
}

export default Droparea;
