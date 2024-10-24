import React, { createContext, useState, useEffect } from "react";
import { useToggle } from "usehooks-ts";

import { type Maybe } from "@/utils/types";

export interface AppBarCodeDeckStoreContextType {
  svg: Maybe<string>;
  jsx: Maybe<string>;
  memo: Maybe<boolean>;
  typescript: Maybe<boolean>;
  jsxSingleQuotes: Maybe<boolean>;
  cleanupIDs: Maybe<boolean>;
  setSvg: (value: Maybe<string>) => void;
  setMemo: () => void;
  setTypeScript: () => void;
  setJsxSingleQuotes: () => void;
  setCleanupIDs: () => void;
}

export interface AppBarCodeDeckStoreProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

export const AppBarCodeDeckStoreContext = createContext<AppBarCodeDeckStoreContextType>({
  svg: undefined,
  jsx: undefined,
  memo: undefined,
  typescript: undefined,
  jsxSingleQuotes: undefined,
  cleanupIDs: undefined,
  setSvg: () => {},
  setMemo: () => {},
  setTypeScript: () => {},
  setJsxSingleQuotes: () => {},
  setCleanupIDs: () => {},
});

export const AppBarCodeDeckStore: React.FC<AppBarCodeDeckStoreProps> = ({ children }) => {
  const [svg, setSvg] = useState<Maybe<string>>();
  const [jsx, setJsx] = useState<Maybe<string>>();

  const [memo, setMemo] = useToggle();
  const [typescript, setTypeScript] = useToggle();
  const [jsxSingleQuotes, setJsxSingleQuotes] = useToggle();
  const [cleanupIDs, setCleanupIDs] = useToggle();

  useEffect(() => {}, []);

  return (
    <AppBarCodeDeckStoreContext.Provider
      value={{
        svg,
        jsx,
        memo,
        typescript,
        jsxSingleQuotes,
        cleanupIDs,
        setSvg,
        setMemo,
        setTypeScript,
        setJsxSingleQuotes,
        setCleanupIDs,
      }}
    >
      {children}
    </AppBarCodeDeckStoreContext.Provider>
  );
};

export default AppBarCodeDeckStore;
