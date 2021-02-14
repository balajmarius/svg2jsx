import React, { Fragment } from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import { DropEvent, FileRejection } from 'react-dropzone';

import Text from '../components/Text';
import Grid from '../components/Grid';
import GridCell from '../components/GridCell';
import Droparea from '../components/Droparea';
import Editor from '../components/Editor';
import Tutorial from '../components/Tutorial';

interface Props {
  svg: string;
  jsx: string;
  onChange(value: string): void;
  onDrop?(acceptedFiles: File[], rejectedFiles: FileRejection[], event: DropEvent): void;
}

const Button = styled.button`
  top: 3px;
  right: 5px;
  z-index: 100;
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.lightGrey};
  background: ${({ theme }) => theme.color.grey};
  transition: 150ms ease-in-out;
  border-radius: 2px;
  position: absolute;
  &:active {
    background: ${({ theme }) => theme.color.charade};
  }
`;

const Playground: React.FC<Props> = ({ svg, jsx, onChange, onDrop }: Props) => {
  return (
    <Grid columns="1fr 1fr" gap={2} fullHeight>
      <GridCell fullHeight>
        <Droparea onDrop={onDrop}>
          {({ onClick }) => (
            <Fragment>
              {svg ? null : <Tutorial onClick={onClick} />}
              <Editor value={svg} mode="xml" onChange={onChange} />
            </Fragment>
          )}
        </Droparea>
      </GridCell>
      <GridCell fullHeight>
        {jsx ? (
          <CopyToClipboard text={jsx}>
            <Button>
              <Text size="normal" display="monospace">
                Copy
              </Text>
            </Button>
          </CopyToClipboard>
        ) : null}
        <Editor value={jsx} mode="jsx" isReadOnly />
      </GridCell>
    </Grid>
  );
};

export default Playground;
