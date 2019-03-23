export const color = {
  black: '#0d0d0d',
  grey: '#363644',
  darkGrey: '#232329',
  lightGrey: '#949494',
  white: '#ffffff',
  purple: '#5522e6',
  lightPurple: '#8a74fc',
  green: '#21d179',
  lightGreen: '#57FFB1',
  red: '#f10c4a',
  pink: '#FF659F',
  codGrey: '#1C1C1C',
  dustyGrey: '#949494',
};

export const fontSize = {
  base: '12px',
  normal: '14px',
  medium: '16px',
  large: '18px',
};

export const fontFamily = {
  sans: 'Roboto, Helvetica, Arial, sans-serif',
  monospace: 'Inconsolata, Courier New, Courier, monospace',
};

export const transition = {
  easeInOut: '300ms ease-in-out',
};

export const editorStyles = {
  plain: {
    color: color.white,
    backgroundColor: color.black,
  },
  styles: [
    {
      types: ['punctuation'],
      style: { color: color.pink },
    },
    {
      types: ['attr-name'],
      style: { color: color.white },
    },
    {
      types: ['attr-value'],
      style: { color: color.lightPurple },
    },
    {
      types: ['keyword'],
      style: { color: color.lightGreen },
    },
  ],
};
