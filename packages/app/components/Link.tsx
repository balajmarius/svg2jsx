import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  font-family: inherit;
  color: ${({ theme }) => theme.color.white};
`;

export default Link;
