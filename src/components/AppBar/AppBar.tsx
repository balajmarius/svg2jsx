import React from "react";
import { twMerge } from "tailwind-merge";
import { FormattedMessage } from "react-intl";

import { useCodeDeck } from "@/hooks/useCodeDeck";

import { Text } from "@/components/Text";
import { SvgIconSvg2Jsx, SvgIconGithub, SvgIconStar } from "@/components/SvgIcon";

export interface AppBarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const AppBar: React.FC<AppBarProps> = (props) => {
  const { isError, isSuccess } = useCodeDeck();

  return (
    <header
      className={twMerge(
        "bg-purple-100 border-b-2 border-gray-250 grid grid-cols-12 py-4 px-6 duration-300 transition-all ease-linear",
        isError && "bg-red-50",
        isSuccess && "bg-green-100",
      )}
      {...props}
    >
      <div className="col-span-6 flex justify-start">
        <a href="/" target="_self" className="flex items-center gap-2">
          <SvgIconSvg2Jsx size="md" />
          <Text variant="caption">
            <FormattedMessage id="APPBAR_TITLE" />
          </Text>
        </a>
      </div>

      <div className="col-span-6 flex justify-end">
        <a
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
          href="https://github.com/balajmarius/svg2jsx"
        >
          <SvgIconStar size="sm" />
          <Text variant="caption">
            <FormattedMessage id="APPBAR_STAR" />
          </Text>
          <SvgIconGithub size="lg" />
        </a>
      </div>
    </header>
  );
};

export default AppBar;
