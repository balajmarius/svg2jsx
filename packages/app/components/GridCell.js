import styled from 'styled-components';
import PropTypes from 'prop-types';

const GridCell = styled.div`
  grid-column: ${({ column }) => column};
`;

GridCell.propTypes = {
  column: PropTypes.string,
};

GridCell.defaultProps = {
  column: 'auto',
};

export default GridCell;
