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
  const { svg, jsx, isCopied, setSvg, handleDrop, handleCopy } = useCodeDeck();

  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-6 relative">
        <Dropzone onDrop={handleDrop}>
          {({ isDragActive, open }) => (
            <>
              {svg ? null : <Info isDragActive={isDragActive} onClick={open} />}
              <Editor mode="svg" value={svg} onChange={setSvg} />
            </>
          )}
        </Dropzone>
      </div>

      <div className="col-span-6 relative">
        <div className="absolute z-50 top-2 right-2">
          {jsx ? (
            <Button variant="text" onClick={handleCopy}>
              <SvgIconClipboard size="sm" copied={isCopied} />
              <Text variant="overline">
                {isCopied ? (
                  <FormattedMessage id="APPBAR_CODE_DECK_COPIED" />
                ) : (
                  <FormattedMessage id="APPBAR_CODE_DECK_COPY" />
                )}
              </Text>
            </Button>
          ) : null}
        </div>

        <Editor mode="jsx" readOnly value={jsx} />
      </div>
    </div>
  );
};

export default AppCodeDeck;
