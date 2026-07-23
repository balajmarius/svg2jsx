import React from "react";
import { FormattedMessage } from "react-intl";

import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { SvgIconSvg } from "@/components/SvgIcon";
import { twMerge } from "tailwind-merge";

export interface InfoProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isDragActive?: boolean;
  onClick?: () => void;
}

export const Info: React.FC<InfoProps> = ({ isDragActive, onClick }) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-30 ml-14 flex-center">
      <div
        className={twMerge(
          "bg-gray-150 w-56 rounded-2xl md:w-64",
          isDragActive && "outline-dashed outline-2 outline-gray-50",
        )}
      >
        <div className="grid grid-cols-12 items-center gap-4 border-b-2 border-gray-250 px-4 py-3 md:px-8 md:py-6">
          <div className="col-span-4">
            <SvgIconSvg size="full" />
          </div>
          <div className="col-span-8">
            <Text variant="subtitle">
              <FormattedMessage id="INFO_DRAG_AND_DROP" />
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-12 px-4 py-3 md:px-8 md:py-6">
          <div className="col-span-12">
            <Button variant="contained" onClick={onClick}>
              <Text variant="title">
                <FormattedMessage id="INFO_UPLOAD_YOUR_FILE" />
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
