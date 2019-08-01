import styled from 'styled-components';

export interface IGridCell {
  column?: string;
  fullHeight?: boolean;
}

const GridCell = styled.div<IGridCell>`
  position: relative;
  grid-column: ${({ column }) => column};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
`;

GridCell.defaultProps = {
  column: 'auto',
};

export default GridCell;
