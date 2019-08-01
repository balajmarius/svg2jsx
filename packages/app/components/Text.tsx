import styled from 'styled-components';

import color, { ColorType } from '../styles/color';
import fontSize, { FontSizeType } from '../styles/fontSize';
import fontFamily, { FontFamilyType } from '../styles/fontFamily';

export interface IText {
  size?: FontSizeType;
  display?: FontFamilyType;
  textColor?: ColorType;
  fontWeight?: 'normal' | 'bold';
  align?: 'left' | 'right' | 'center';
}

const Text = styled.span<IText>`
  display: block;
  text-align: ${({ align }) => align};
  color: ${({ textColor }) => color[textColor]};
  font-size: ${({ size }) => fontSize[size]};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ display }) => fontFamily[display]};
`;

Text.defaultProps = {
  align: 'left',
  size: 'base',
  display: 'sans',
  textColor: 'white',
  fontWeight: 'normal',
};

export default Text;
