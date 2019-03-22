import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color, fontSize, fontFamily } from '../shared/constants';

const Text = styled.span`
  display: block;
  text-align: ${({ align }) => align};
  color: ${({ textColor }) => color[textColor]};
  font-size: ${({ size }) => fontSize[size]};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ display }) => fontFamily[display]};
`;

Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Text.defaultProps = {
  size: 'base',
  align: 'left',
  display: 'sans',
  textColor: 'primary',
};

export default Text;
