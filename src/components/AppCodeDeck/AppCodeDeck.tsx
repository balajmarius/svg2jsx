import React from "react";
import { FormattedMessage } from "react-intl";
import { useCopyToClipboard } from "usehooks-ts";

import { SvgIconClipboard } from "@/components/SvgIcon";

import { Info } from "@/components/Info";
import { Editor } from "@/components/Editor";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";

export interface AppCodeDeckProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const AppCodeDeck: React.FC<AppCodeDeckProps> = () => {
  const [, copy] = useCopyToClipboard();

  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-6 relative">
        <Info />
        <Editor mode="svg" />
      </div>

      <div className="col-span-6 relative">
        <div className="absolute z-50 top-2 right-2">
          <Button variant="text">
            <SvgIconClipboard size="sm" />
            <Text variant="overline">
              <FormattedMessage id="APPBAR_CODE_DECK_COPY" />
            </Text>
          </Button>
        </div>

        <Editor mode="jsx" readOnly />
      </div>
    </div>
  );
};

export default AppCodeDeck;
