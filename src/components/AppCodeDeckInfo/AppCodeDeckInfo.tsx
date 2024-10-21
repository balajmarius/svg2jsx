import React from "react";

export interface AppCodeDeckInfoProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const AppCodeDeckInfo: React.FC<AppCodeDeckInfoProps> = () => {
  return <div className="bg-gray-150 rounded-2xl w-64 absolute top-24 left-1/2 transform -translate-x-1/2" />;
};

export default AppCodeDeckInfo;
