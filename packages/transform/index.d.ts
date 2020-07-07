export interface ConfigType {
  type: 'functional' | 'class';
  cleanupIDs: boolean;
  jsxSingleQuote: boolean;
  memo: boolean;
  reactNative: boolean;
}

declare const transform: (svg: string, config: ConfigType) => Promise<string>;

export default transform;
