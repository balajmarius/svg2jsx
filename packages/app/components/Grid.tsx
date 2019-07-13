import styled from 'styled-components';

type JustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit';

export interface GridType {
  gap?: number;
  align?: 'left' | 'right' | 'center';
  direction?: 'rtl' | 'ltr';
  justify?: JustifyType;
  columns?: string;
}

const Grid = styled.div<GridType>`
  display: grid;
  align-items: ${({ align }) => align};
  direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  grid-template-columns: ${({ columns }) => columns};
  grid-column-gap: ${({ gap }) => gap}px;
`;

Grid.defaultProps = {
  gap: 0,
  align: 'center',
  columns: '50% 50%',
  direction: 'ltr',
  justify: 'space-between',
};

export default Grid;
