import styled from 'styled-components';

import color, { ColorType } from '../styles/color';

export interface IconType {
  width?: number;
  height?: number;
  fillColor?: ColorType;
}

const Icon = styled.svg<IconType>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  fill: ${({ fillColor }) => color[fillColor]};
`;

Icon.defaultProps = {
  fillColor: 'white',
};

export default Icon;
