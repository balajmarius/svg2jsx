import React, { createContext, useEffect } from "react";
import { useToggle } from "usehooks-ts";

export interface AppBarCodeDeckStoreContextType {
  ts: boolean;
  memo: boolean;
  cleanupIDs: boolean;
  jsxSingleQuotes: boolean;
}

export interface AppBarCodeDeckStoreProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

export const AppBarCodeDeckStoreContext = createContext<AppBarCodeDeckStoreContextType>({});

export const AppBarCodeDeckStore: React.FC<AppBarCodeDeckStoreProps> = ({ children }) => {
  useEffect(() => {}, []);

  return <AppBarCodeDeckStoreContext.Provider value={{}}>{children}</AppBarCodeDeckStoreContext.Provider>;
};

export default AppBarCodeDeckStore;
