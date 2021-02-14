import styled from 'styled-components';

export interface GridCellProps {
  column?: string;
  fullHeight?: boolean;
}

const GridCell = styled.div<GridCellProps>`
  position: relative;
  grid-column: ${({ column }) => column};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
`;

GridCell.defaultProps = {
  column: 'auto',
};

export default GridCell;
