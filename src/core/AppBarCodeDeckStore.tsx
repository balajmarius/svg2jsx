import React, { createContext, useState, useCallback, useMemo } from "react";
import useDebouncedEffect from "use-debounced-effect";
import { useCopyToClipboard } from "usehooks-ts";

import { useApi } from "@/hooks/useApi";
import { useLocalStorageToggle } from "@/hooks/useLocalStorageToggle";

import { EDITOR_DEBOUNCE_TIME } from "@/utils/const";
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
  isPending?: boolean;
  isCopied?: boolean;
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
  isPending: undefined,
  isCopied: undefined,
  setSvg: () => {},
  setMemo: () => {},
  setTypeScript: () => {},
  setJsxSingleQuote: () => {},
  setCleanupIds: () => {},
  drop: async () => {},
  copy: () => {},
});

export const AppBarCodeDeckStore: React.FC<AppBarCodeDeckStoreProps> = ({ children }) => {
  const [svg, setSvg] = useState<string | undefined>();
  const [copied, copyToClipboard] = useCopyToClipboard();

  const [memo, setMemo] = useLocalStorageToggle("memo");
  const [typescript, setTypeScript] = useLocalStorageToggle("typescript");
  const [jsxSingleQuote, setJsxSingleQuote] = useLocalStorageToggle("jsxSingleQuote");
  const [cleanupIds, setCleanupIds] = useLocalStorageToggle("cleanupIds");

  const { jsx, isSuccess, isError, isPending, mutate, reset } = useApi();

  const isCopied = useMemo(() => {
    if (copied) {
      return btoa(jsx) === btoa(copied);
    }
  }, [jsx, copied]);

  const drop = useCallback(async ([file]: File[]) => {
    try {
      const fileContents = await readAndFormatFileContents(file);
      setSvg(fileContents);
    } catch (error) {}
  }, []);

  const copy = useCallback(async () => {
    if (jsx) {
      try {
        await copyToClipboard(jsx);
      } catch (error) {}
    }
  }, [jsx, copyToClipboard]);

  const clear = useCallback(() => {
    reset();
    setSvg(undefined);
  }, [reset]);

  useDebouncedEffect(
    () => {
      if (svg) {
        mutate({ input: { svg, options: { memo, typescript, jsxSingleQuote, cleanupIds } } });
      } else {
        clear();
      }
    },
    EDITOR_DEBOUNCE_TIME,
    [svg, memo, typescript, jsxSingleQuote, cleanupIds, mutate, clear]
  );

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
        isPending,
        isCopied,
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
