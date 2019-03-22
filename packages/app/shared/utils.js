import { color } from './constants';

export const stripedBackground = (direction, backgroundColor, stripeColor = color.black) => `
  linear-gradient(
    to ${direction},
    ${backgroundColor},
    ${backgroundColor} calc(50% - 1px),
    ${stripeColor} calc(50% - 1px),
    ${stripeColor} calc(50% + 1px),
    ${backgroundColor} calc(50% + 1px),
    ${backgroundColor}
  );
`;

export const noop = () => {};
