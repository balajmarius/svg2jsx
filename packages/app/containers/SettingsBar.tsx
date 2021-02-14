import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import getStripes from '../utils/getStripes';
import getVariantColor, { VariantType } from '../utils/getVariantColor';

import Grid from '../components/Grid';
import GridCell from '../components/GridCell';
import Switch from '../components/Switch';
import Headings from '../components/Headings';

import IconGear from '../icons/IconGear';
import IconCross from '../icons/IconCross';
import IconCheckMark from '../icons/IconCheckMark';

interface Props {
  memo: boolean;
  variant: VariantType;
  cleanupIDs: boolean;
  jsxSingleQuote: boolean;
  type: 'functional' | 'class';
  onChangeType(event: ChangeEvent<HTMLInputElement>): void;
  onChangeQuote(event: ChangeEvent<HTMLInputElement>): void;
  onChangeIDs(event: ChangeEvent<HTMLInputElement>): void;
  onChangeMemo(event: ChangeEvent<HTMLInputElement>): void;
}

interface IStatus {
  variant: VariantType;
}

const Section = styled.section`
  padding: 10px 50px;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  background: ${getStripes('left', 'grey')};
`;

const Status = styled.div<IStatus>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 40px;
  justify-content: center;
  transition: 300ms linear;
  border: 2px solid ${({ theme }) => theme.color.black};
  background: ${({ variant }) => getVariantColor(variant)};
`;

const SettingsBar: React.FC<Props> = ({
  type,
  memo,
  variant,
  jsxSingleQuote,
  cleanupIDs,
  onChangeType,
  onChangeQuote,
  onChangeIDs,
  onChangeMemo,
}: Props) => {
  const isFunctional = type === 'functional';

  return (
    <Section>
      <Grid columns="2fr 1fr 2fr">
        <GridCell>
          <Grid columns="auto auto auto auto" justify="flex-start" gap={20}>
            <Switch label="Functional" checked={isFunctional} onChange={onChangeType} />
            <Switch label="Remove IDs" checked={cleanupIDs} onChange={onChangeIDs} />
            <Switch label="Single quotes" checked={jsxSingleQuote} onChange={onChangeQuote} />
            <Switch label="Memo" checked={memo} onChange={onChangeMemo} />
          </Grid>
        </GridCell>
        <GridCell>
          <Grid columns="1fr auto 1fr" gap={10}>
            <GridCell>
              <Headings primary="SVG" secondary="Input" />
            </GridCell>
            <GridCell>
              <Status variant={variant}>
                {variant === VariantType.CLEAR && <IconGear />}
                {variant === VariantType.SUCCESS && <IconCheckMark />}
                {variant === VariantType.ERROR && <IconCross />}
              </Status>
            </GridCell>
            <GridCell>
              <Headings primary="JSX" secondary="Output" inverse />
            </GridCell>
          </Grid>
        </GridCell>
      </Grid>
    </Section>
  );
};

export default SettingsBar;
