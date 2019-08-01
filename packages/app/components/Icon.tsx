import styled from 'styled-components';

import color, { ColorType } from '../styles/color';

export interface IIcon {
  width?: number;
  height?: number;
  fillColor?: ColorType;
}

const Icon = styled.svg<IIcon>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  fill: ${({ fillColor }) => color[fillColor]};
`;

Icon.defaultProps = {
  fillColor: 'white',
};

export default Icon;
