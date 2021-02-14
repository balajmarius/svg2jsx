import styled from 'styled-components';

type JustifyType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';

export interface GridProps {
  gap?: number;
  fullHeight?: boolean;
  align?: 'left' | 'right' | 'center';
  direction?: 'rtl' | 'ltr';
  justify?: JustifyType;
  columns?: string;
}

const Grid = styled.div<GridProps>`
  display: grid;
  align-items: ${({ align }) => align};
  direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  grid-column-gap: ${({ gap }) => gap}px;
  grid-template-columns: ${({ columns }) => columns};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
`;

Grid.defaultProps = {
  gap: 0,
  align: 'center',
  columns: '50% 50%',
  direction: 'ltr',
  justify: 'space-between',
};

export default Grid;
