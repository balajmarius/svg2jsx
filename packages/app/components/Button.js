import styled from 'styled-components';

import { color, fontSize, fontFamily } from '../shared/constants';

const Button = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 15px 30px;
  border-radius: 30px;
  color: ${color.white};
  background: ${color.purple};
  font-size: ${fontSize.medium};
  font-family: ${fontFamily.sans};
`;

export default Button;
