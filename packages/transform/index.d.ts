interface TransformConfigType {
  type: 'functional' | 'class';
  jsxSingleQuote: boolean;
}

declare function transform(
  svg: string,
  config: TransformConfigType,
): Promise<string>;

export = transform;
