import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color } from '../shared/constants';
import { stripedBackground } from '../shared/utils';

import Text from './Text';
import Grid from './Grid';
import GridCell from './GridCell';

import IconPicture from '../icons/IconPicture';

const Modal = styled.div`
  top: 20%;
  left: 50%;
  width: 250px;
  padding: 30px;
  z-index: 100;
  position: absolute;
  text-align: center;
  border-radius: 15px;
  margin: 0 0 0 -125px;
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

const Conjunction = styled(Text)`
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: ${color.grey};
  border: 2px solid ${color.black};
`;

function Tutorial({ onClick }) {
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
        <Conjunction fontWeight="bold" align="center">
          or
        </Conjunction>
      </Separator>
      <Button onClick={onClick}>
        <Text size="large">Upload your file</Text>
      </Button>
    </Modal>
  );
}

Tutorial.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Tutorial;
