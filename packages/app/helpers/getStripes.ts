import color, { ColorType } from '../styles/color';

type DirectionType = 'bottom' | 'left';

export default function getStripes(
  direction: DirectionType,
  backgroundColor: ColorType,
  stripeColor: ColorType = 'black',
): string {
  return `
    linear-gradient(
      to ${direction},
      ${color[backgroundColor]},
      ${color[backgroundColor]} calc(50% - 1px),
      ${color[stripeColor]} calc(50% - 1px),
      ${color[stripeColor]} calc(50% + 1px),
      ${color[backgroundColor]} calc(50% + 1px),
      ${color[backgroundColor]}
    );
  `;
}
