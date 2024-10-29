import React from "react";
import { FormattedMessage } from "react-intl";
import { twMerge } from "tailwind-merge";
import { useIsClient } from "usehooks-ts";

import { useCodeDeck } from "@/hooks/useCodeDeck";

import { Text } from "@/components/Text";
import { Checkbox } from "@/components/Checkbox";
import { SvgIconGear } from "@/components/SvgIcon";

export interface AppBarSettingsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const AppBarSettings: React.FC<AppBarSettingsProps> = (props) => {
  const {
    memo,
    typescript,
    jsxSingleQuote,
    cleanupIds,
    isSuccess,
    isError,
    setMemo,
    setTypeScript,
    setJsxSingleQuote,
    setCleanupIds,
  } = useCodeDeck();

  const isClient = useIsClient();

  return (
    <div className="bg-appbar-1 border-b-2 border-gray-250 grid grid-cols-12 py-3 px-6 relative" {...props}>
      <div className="col-span-4 flex items-center justify-start gap-4 text-gray-50">
        {isClient ? (
          <>
            <Checkbox name="cleanupIds" checked={cleanupIds} onChange={setCleanupIds}>
              <Text variant="overline">
                <FormattedMessage id="APPBAR_SETTINGS_IDS" />
              </Text>
            </Checkbox>
            <Checkbox name="jsxSingleQuote" checked={jsxSingleQuote} onChange={setJsxSingleQuote}>
              <Text variant="overline">
                <FormattedMessage id="APPBAR_SETTINGS_QUOTES" />
              </Text>
            </Checkbox>
            <Checkbox name="memo" checked={memo} onChange={setMemo}>
              <Text variant="overline">
                <FormattedMessage id="APPBAR_SETTINGS_MEMO" />
              </Text>
            </Checkbox>
            <Checkbox name="typescript" checked={typescript} onChange={setTypeScript}>
              <Text variant="overline">
                <FormattedMessage id="APPBAR_SETTINGS_TYPESCRIPT" />
              </Text>
            </Checkbox>
          </>
        ) : null}
      </div>

      <div className="col-span-4 flex-center gap-3">
        <Text variant="body" cx="w-12 text-right">
          <FormattedMessage id="APPBAR_SETTINGS_INPUT" />
        </Text>
        <Text variant="title" cx="w-9">
          <FormattedMessage id="APPBAR_SETTINGS_SVG" />
        </Text>

        <div
          className={twMerge(
            "bg-purple-100 border-2 border-gray-250 size-10 flex-center	rounded-full transition-all duration-300 ease-linear",
            isError && "bg-red-50",
            isSuccess && "bg-green-100"
          )}
        >
          <SvgIconGear />
        </div>

        <Text variant="title" cx="w-9">
          <FormattedMessage id="APPBAR_SETTINGS_JSX" />
        </Text>
        <Text variant="body" cx="w-12">
          <FormattedMessage id="APPBAR_SETTINGS_OUTPUT" />
        </Text>
      </div>
    </div>
  );
};

export default AppBarSettings;
