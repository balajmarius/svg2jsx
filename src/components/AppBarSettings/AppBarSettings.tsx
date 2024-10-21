import React from "react";
import { FormattedMessage } from "react-intl";

import { SvgIconGear } from "@/components/SvgIcon";

import { Text } from "@/components/Text";
import { Switch } from "@/components/Switch";

export interface AppBarSettingsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const AppBarSettings: React.FC<AppBarSettingsProps> = (props) => {
  return (
    <div className="bg-gray-100 border-b-2 border-gray-250 grid grid-cols-12 py-3 px-14 relative" {...props}>
      <div className="col-span-4 flex items-center justify-start gap-4">
        <Switch name="cleanupIDs">
          <Text variant="overline">
            <FormattedMessage id="APPBAR_SETTINGS_IDS" />
          </Text>
        </Switch>
        <Switch name="jsxSingleQuotes">
          <Text variant="overline">
            <FormattedMessage id="APPBAR_SETTINGS_QUOTES" />
          </Text>
        </Switch>
        <Switch name="memo">
          <Text variant="overline">
            <FormattedMessage id="APPBAR_SETTINGS_MEMO" />
          </Text>
        </Switch>
        <Switch name="typescript">
          <Text variant="overline">
            <FormattedMessage id="APPBAR_SETTINGS_TYPESCRIPT" />
          </Text>
        </Switch>
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
