import React from "react";
import { FormattedMessage } from "react-intl";

import { useCodeDeck } from "@/hooks/useCodeDeck";

import { SvgIconClipboard } from "@/components/SvgIcon";

import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Info } from "@/components/Info";
import { Editor } from "@/components/Editor";
import { Dropzone } from "@/components/Dropzone";

export interface AppCodeDeckProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const AppCodeDeck: React.FC<AppCodeDeckProps> = () => {
  const { svg, jsx, setSvg } = useCodeDeck();

  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-6 relative">
        <Dropzone>
          {({ isDragActive }) => (
            <>
              {svg ? null : <Info isDragActive={isDragActive} />}
              <Editor mode="svg" value={svg} onChange={setSvg} />
            </>
          )}
        </Dropzone>
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

        <Editor mode="jsx" readOnly value={jsx} />
      </div>
    </div>
  );
};

export default AppCodeDeck;
