import styled from 'styled-components';

/**
 * Grid
 */
export const Grid = styled.div`
  display: flex;
  align-items: ${({ align }) => align};
  direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
`;

/**
 * Grid Cell
 */
export const GridCell = styled.div`
  display: flex;
  align-items: center;
  flex: ${({ flex }) => flex};
`;
