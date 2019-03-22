import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  display: grid;
  align-items: ${({ align }) => align};
  direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  grid-template-columns: ${({ columns }) => columns};
  grid-column-gap: ${({ gap }) => gap}px;
`;

Grid.propTypes = {
  align: PropTypes.string,
  columns: PropTypes.string,
  direction: PropTypes.string,
  gap: PropTypes.number,
  justify: PropTypes.string,
};

Grid.defaultProps = {
  gap: 0,
  align: 'center',
  columns: '50% 50%',
  direction: 'ltr',
  justify: 'space-between',
};

export default Grid;
