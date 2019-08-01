import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import color from '../styles/color';
import getStripes from '../utils/getStripes';

import Text, { IText } from './Text';
import Grid from './Grid';
import GridCell from './GridCell';

import IconPicture from '../icons/IconPicture';

interface ITutorial {
  onClick(event: MouseEvent<HTMLElement>): void;
}

interface ButtonType extends ITutorial {}

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

const Button = styled.button<ButtonType>`
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
  background: ${getStripes('bottom', 'darkGrey')};
`;

const Ring = styled(Text)<IText>`
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

function Tutorial({ onClick }: ITutorial) {
  return (
    <Modal>
      <Grid columns="auto 1fr" gap={20}>
        <GridCell>
          <IconPicture />
        </GridCell>
        <GridCell>
          <Text size="large">Drag and drop your file here</Text>
        </GridCell>
      </Grid>
      <Separator>
        <Ring fontWeight="bold" align="center">
          or
        </Ring>
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
