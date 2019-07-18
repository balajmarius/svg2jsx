import color from '../styles/color';

export enum VariantType {
  CLEAR,
  SUCCESS,
  ERROR,
}

const variantColors = {
  [VariantType.CLEAR]: color.purple,
  [VariantType.SUCCESS]: color.green,
  [VariantType.ERROR]: color.red,
};

export default function getVariantColor(variant: VariantType): string {
  return variantColors[variant];
}
