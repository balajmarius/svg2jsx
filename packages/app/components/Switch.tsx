import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import color from '../styles/color';

import Text from './Text';

interface ISwitch {
  checked?: boolean;
  label: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

interface IInput {
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

interface IKnob {
  checked: boolean;
}

const Label = styled.label`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
`;

const Bar = styled.div`
  width: 30px;
  margin: 5px;
  border-radius: 30px;
  background: ${color.black};
`;

const Input = styled.input<IInput>`
  left: -999em;
  visibility: hidden;
  position: absolute;
`;

const Knob = styled.div<IKnob>`
  margin: 2px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  transition: 150ms ease-in-out;
  transform: ${({ checked }) => (checked ? 'translateX(11px)' : 'none')};
  background: ${({ checked }) => (checked ? color.green : color.grey)};
`;

function Switch({ label, checked, onChange }: ISwitch) {
  return (
    <Label>
      <Text textColor="lightGrey" fontWeight="bold" size="tiny">
        {label}
      </Text>
      <Bar>
        <Knob checked={checked} />
      </Bar>
      <Input type="checkbox" checked={checked} onChange={onChange} />
    </Label>
  );
}

Switch.defaultProps = {
  checked: true,
};

export default Switch;
