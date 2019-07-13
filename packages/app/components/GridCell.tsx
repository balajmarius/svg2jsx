import styled from 'styled-components';

export interface GridCellType {
  column?: string;
}

const GridCell = styled.div<GridCellType>`
  position: relative;
  grid-column: ${({ column }) => column};
`;

GridCell.defaultProps = {
  column: 'auto',
};

export default GridCell;
