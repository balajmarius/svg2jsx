export type Options = {
  memo: boolean;
  typescript: boolean;
  cleanupIds: boolean;
  jsxSingleQuote: boolean;
};

export type Variables = {
  input: {
    svg: string;
    options: Options;
  };
};
