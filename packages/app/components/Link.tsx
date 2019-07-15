import styled from 'styled-components';

import color from '../styles/color';

const Link = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  font-family: inherit;
  color: ${color.white};
`;

export default Link;
