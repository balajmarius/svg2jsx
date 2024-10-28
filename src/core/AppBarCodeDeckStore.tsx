import React, { createContext, useState, useEffect, useCallback } from "react";
import { useToggle, useCopyToClipboard } from "usehooks-ts";

import { useApi } from "@/hooks/useApi";

import { readAndFormatFileContents } from "@/utils/helpers";

export interface AppBarCodeDeckStoreContextType {
  svg?: string;
  jsx?: string;
  memo?: boolean;
  typescript?: boolean;
  jsxSingleQuote?: boolean;
  cleanupIds?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  setSvg: (value: string | undefined) => void;
  setMemo: () => void;
  setTypeScript: () => void;
  setJsxSingleQuote: () => void;
  setCleanupIds: () => void;
  copy: () => void;
  drop: (files: File[]) => Promise<void>;
}

export interface AppBarCodeDeckStoreProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

export const AppBarCodeDeckStoreContext = createContext<AppBarCodeDeckStoreContextType>({
  svg: undefined,
  jsx: undefined,
  memo: undefined,
  typescript: undefined,
  jsxSingleQuote: undefined,
  cleanupIds: undefined,
  isSuccess: undefined,
  isError: undefined,
  setSvg: () => {},
  setMemo: () => {},
  setTypeScript: () => {},
  setJsxSingleQuote: () => {},
  setCleanupIds: () => {},
  drop: async () => {},
  copy: () => {},
});

export const AppBarCodeDeckStore: React.FC<AppBarCodeDeckStoreProps> = ({ children }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [svg, setSvg] = useState<string | undefined>();

  const [memo, setMemo] = useToggle();
  const [typescript, setTypeScript] = useToggle();
  const [jsxSingleQuote, setJsxSingleQuote] = useToggle();
  const [cleanupIds, setCleanupIds] = useToggle();

  const { jsx, isSuccess, isError, mutate, reset } = useApi();

  const drop = useCallback(async ([file]: File[]) => {
    try {
      const fileContents = await readAndFormatFileContents(file);
      setSvg(fileContents);
    } catch (error) {}
  }, []);

  const copy = useCallback(() => {
    if (jsx) {
      copyToClipboard(jsx);
    }
  }, [jsx, copyToClipboard]);

  const clear = useCallback(() => {
    reset();
    setSvg(undefined);
  }, [reset]);

  useEffect(() => {
    if (svg) {
      mutate({ input: { svg, options: { memo, typescript, jsxSingleQuote, cleanupIds } } });
    } else {
      clear();
    }
  }, [svg, memo, typescript, jsxSingleQuote, cleanupIds, mutate, clear]);

  return (
    <AppBarCodeDeckStoreContext.Provider
      value={{
        svg,
        jsx,
        memo,
        typescript,
        jsxSingleQuote,
        cleanupIds,
        isSuccess,
        isError,
        setSvg,
        setMemo,
        setTypeScript,
        setJsxSingleQuote,
        setCleanupIds,
        drop,
        copy,
      }}
    >
      {children}
    </AppBarCodeDeckStoreContext.Provider>
  );
};

export default AppBarCodeDeckStore;
