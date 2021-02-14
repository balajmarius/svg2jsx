import React from 'react';
import styled from 'styled-components';

import getVariantColor, { VariantType } from '../utils/getVariantColor';

import Text from '../components/Text';
import Link from '../components/Link';
import Grid from '../components/Grid';
import GridCell from '../components/GridCell';

import IconLogo from '../icons/IconLogo';
import IconStar from '../icons/IconStar';
import IconGithub from '../icons/IconGithub';

interface Props {
  variant: VariantType;
}

interface HeaderProps {
  variant: VariantType;
}

const Header = styled.header<HeaderProps>`
  padding: 15px 25px;
  transition: 300ms linear;
  background-size: 300% 100%;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  background-color: ${({ variant }) => getVariantColor(variant)};
`;

const TextLogo = styled(Text)`
  margin: 0 0 0 7px;
`;

const TextStar = styled(Text)`
  margin: 0 5px 0 7px;
`;

const NavBar: React.FC<Props> = ({ variant }: Props) => {
  return (
    <Header variant={variant}>
      <Grid columns="auto auto">
        <GridCell>
          <Link href="/">
            <IconLogo />
            <TextLogo fontWeight="bold">SVG 2 JSX</TextLogo>
          </Link>
        </GridCell>
        <GridCell>
          <Link href="https://github.com/balajmarius/svg2jsx" target="_blank">
            <IconStar />
            <TextStar>Star on</TextStar>
            <IconGithub />
          </Link>
        </GridCell>
      </Grid>
    </Header>
  );
};

export default NavBar;
