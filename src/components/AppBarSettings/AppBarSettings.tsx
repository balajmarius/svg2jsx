import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

import { useCodeDeck } from "@/hooks/useCodeDeck";

import { SvgIconGear } from "@/components/SvgIcon";

import { Text } from "@/components/Text";
import { Checkbox } from "@/components/Checkbox";

export interface AppBarSettingsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const AppBarSettings: React.FC<AppBarSettingsProps> = (props) => {
  const { memo, typescript, jsxSingleQuotes, cleanupIDs, setMemo, setTypeScript, setJsxSingleQuotes, setCleanupIDs } =
    useCodeDeck();

  return (
    <div className="bg-appbar-1 border-b-2 border-gray-250 grid grid-cols-12 py-3 px-14 relative" {...props}>
      <div className="col-span-4 flex items-center justify-start gap-4 text-gray-50">
        <Checkbox name="cleanupIDs" checked={cleanupIDs} onChange={setCleanupIDs}>
          <Text variant="overline">
            <FormattedMessage id="APPBAR_SETTINGS_IDS" />
          </Text>
        </Checkbox>
        <Checkbox name="jsxSingleQuotes" checked={jsxSingleQuotes} onChange={setJsxSingleQuotes}>
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
      </div>

      <div className="col-span-4 flex items-center justify-center gap-3">
        <Text variant="body" cx="w-12 text-right">
          <FormattedMessage id="APPBAR_SETTINGS_INPUT" />
        </Text>
        <Text variant="title" cx="w-9">
          <FormattedMessage id="APPBAR_SETTINGS_SVG" />
        </Text>

        <div className="bg-purple-100 border-2 border-gray-250 flex items-center justify-center w-10 h-10 rounded-full">
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
