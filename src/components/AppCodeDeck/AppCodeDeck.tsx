import React from "react";

import { AppCodeDeckInfo } from "@/components/AppCodeDeckInfo";
import { Editor } from "@/components/Editor";

export interface AppCodeDeckProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const AppCodeDeck: React.FC<AppCodeDeckProps> = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-6 relative">
        <AppCodeDeckInfo />
        <Editor mode="svg" />
      </div>
      <div className="col-span-6">
        <Editor mode="jsx" readOnly />
      </div>
    </div>
  );
};

export default AppCodeDeck;
