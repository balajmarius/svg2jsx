import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useDropzone, DropEvent, FileRejection, DropzoneRootProps } from 'react-dropzone';

import color from '../styles/color';

interface Props {
  children(rootProps: DropzoneRootProps): ReactNode;
  onDrop?(acceptedFiles: File[], rejectedFiles: FileRejection[], event: DropEvent): void;
}

const Dropable = styled.div`
  outline: 0;
  height: 100%;
  position: relative;
  border-right: 1px solid ${color.codGrey};
`;

const Droparea: React.FC<Props> = ({ children, onDrop }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const rootProps = getRootProps();
  const inputProps = getInputProps();

  return (
    <Dropable {...rootProps} onClick={undefined}>
      <input {...inputProps} accept="image/svg+xml" multiple={false} />
      {children(rootProps)}
    </Dropable>
  );
};

export default Droparea;
