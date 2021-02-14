import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import Text from './Text';

interface SwitchProps {
  checked?: boolean;
  label: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

interface InputProps {
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

interface KnobProps {
  checked: boolean;
}

const Label = styled.label`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  text-transform: uppercase;
`;

const Bar = styled.div`
  width: 30px;
  margin: 0 0 0 10px;
  border-radius: 30px;
  background: ${({ theme }) => theme.color.black};
`;

const Input = styled.input<InputProps>`
  left: -999em;
  visibility: hidden;
  position: absolute;
`;

const Knob = styled.div<KnobProps>`
  margin: 2px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  transition: 150ms ease-in-out;
  transform: ${({ checked }) => (checked ? 'translateX(11px)' : 'none')};
  background: ${({ checked, theme }) => (checked ? theme.color.green : theme.color.grey)};
`;

const Switch: React.FC<SwitchProps> = ({ label, checked, onChange }: SwitchProps) => {
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
};

Switch.defaultProps = {
  checked: true,
};

export default Switch;
