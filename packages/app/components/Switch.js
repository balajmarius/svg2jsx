import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color, transition } from '../shared/constants';

import Text from './Text';

const Label = styled.label`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
`;

const Input = styled.input`
  left: -999em;
  visibility: hidden;
  position: absolute;
`;

const Bar = styled.div`
  width: 30px;
  margin: 0 0 0 10px;
  border-radius: 30px;
  background: ${color.black};
`;

const Knob = styled.div`
  margin: 2px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  transition: ${transition.easeInOut};
  transform: ${({ checked }) => (checked ? 'translateX(11px)' : 'none')};
  background: ${({ checked }) => (checked ? color.green : color.grey)};
`;

function Switch({ label, checked, onChange }) {
  return (
    <Label>
      <Text textColor="lightGrey" fontWeight="bold">
        {label}
      </Text>
      <Bar checked={checked}>
        <Knob checked={checked} />
      </Bar>
      <Input type="checkbox" checked={checked} onChange={onChange} />
    </Label>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  checked: true,
};

export default Switch;
