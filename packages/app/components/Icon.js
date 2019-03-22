import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color } from '../shared/constants';

const Icon = styled.svg`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  fill: ${({ fillColor }) => color[fillColor]};
`;

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fillColor: PropTypes.string,
};

Icon.defaultProps = {
  fillColor: 'white',
};

export default Icon;
