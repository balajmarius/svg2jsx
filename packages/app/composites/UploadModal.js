import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color } from '../shared/constants';
import { stripedBackground } from '../shared/utils';

import Text from '../components/Text';
import Grid from '../components/Grid';
import GridCell from '../components/GridCell';

import IconPicture from '../icons/IconPicture';

const Modal = styled.div`
  width: 250px;
  padding: 30px;
  text-align: center;
  border-radius: 15px;
  background: ${color.darkGrey};
`;

const Button = styled.button`
  cursor: pointer;
  padding: 15px 30px;
  border-radius: 30px;
  color: ${color.white};
  background: ${color.purple};
`;

const Separator = styled.div`
  display: flex;
  margin: 15px -30px;
  justify-content: center;
  background: ${stripedBackground('bottom', color.darkGrey)};
`;

const Mark = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: ${color.grey};
  border: 2px solid ${color.black};
`;

function UploadModal({ onClick }) {
  return (
    <Modal>
      <Grid columns="auto 1fr" gap={15}>
        <GridCell>
          <IconPicture />
        </GridCell>
        <GridCell>
          <Text size="large">Drag and drop your file here</Text>
        </GridCell>
      </Grid>
      <Separator>
        <Mark>
          <Text fontWeight="bold" align="center">
            OR
          </Text>
        </Mark>
      </Separator>
      <Button onClick={onClick}>
        <Text size="large">Upload your file</Text>
      </Button>
    </Modal>
  );
}

UploadModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UploadModal;
