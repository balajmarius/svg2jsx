import styled from 'styled-components';

export interface GridCellType {
  column?: string;
  fullHeight?: boolean;
}

const GridCell = styled.div<GridCellType>`
  position: relative;
  grid-column: ${({ column }) => column};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
`;

GridCell.defaultProps = {
  column: 'auto',
};

export default GridCell;
