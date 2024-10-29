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
    <div
      className={twMerge(
        "bg-gray-150 rounded-2xl w-64 absolute z-50 top-24 left-1/2 transform -translate-x-1/2",
        isDragActive && "outline-dashed outline-2 outline-gray-50",
      )}
    >
      <div className="grid grid-cols-12 gap-4 items-center px-8 py-6 border-b-2 border-gray-250">
        <div className="col-span-4">
          <SvgIconSvg size="full" />
        </div>
        <div className="col-span-8">
          <Text variant="subtitle">
            <FormattedMessage id="INFO_DRAG_AND_DROP" />
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-12 px-8 py-6">
        <div className="col-span-12">
          <Button variant="contained" onClick={onClick}>
            <Text variant="title">
              <FormattedMessage id="INFO_UPLOAD_YOUR_FILE" />
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
