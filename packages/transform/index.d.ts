interface ConfigType {
  type: 'functional' | 'class';
  jsxSingleQuote: boolean;
}

declare function transform(svg: string, config: ConfigType): Promise<string>;

export = transform;
