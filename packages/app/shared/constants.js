export const color = {
  black: '#0d0d0d',
  grey: '#363644',
  darkGrey: '#232329',
  lightGrey: '#949494',
  white: '#ffffff',
  purple: '#5522e6',
  green: '#21d179',
  red: '#f10c4a',
  codGrey: '#1C1C1C',
  dustyGrey: '#949494',
};

export const fontSize = {
  base: '12px',
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

export const theme = {
  plain: {
    color: color.white,
    backgroundColor: color.black,
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: { color: 'rgb(189, 147, 249)' },
    },
    {
      types: ['inserted', 'function'],
      style: { color: 'rgb(80, 250, 123)' },
    },
    {
      types: ['deleted'],
      style: { color: 'rgb(255, 85, 85)' },
    },
    {
      types: ['changed'],
      style: { color: 'rgb(255, 184, 108)' },
    },
    {
      types: ['punctuation', 'symbol'],
      style: { color: 'rgb(248, 248, 242)' },
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: { color: 'rgb(255, 121, 198)' },
    },
    {
      types: ['keyword', 'variable'],
      style: { color: 'rgb(189, 147, 249)', fontStyle: 'italic' },
    },
    {
      types: ['comment'],
      style: { color: 'rgb(98, 114, 164)' },
    },
    {
      types: ['attr-name'],
      style: { color: 'rgb(241, 250, 140)' },
    },
  ],
};
