import React from "react";
import { Checkbox, type CheckboxProps } from "react-aria-components";

import { twMerge } from "tailwind-merge";

export interface SwitchProps extends CheckboxProps {}

export const Switch: React.FC<SwitchProps> = ({ children, value, ...props }) => {
  return (
    <Checkbox {...props} value={value} className="group flex items-center gap-2 cursor-pointer">
      {({ isSelected }) => (
        <>
          {children}
          <div className="bg-gray-250 border-2 border-gray-250 rounded-3xl">
            <div
              className={twMerge(
                "transition-all rounded-full w-4 h-4",
                isSelected ? "ml-4" : "mr-4",
                isSelected ? "bg-green-100 group-hover:bg-green-50" : "bg-gray-100 group-hover:bg-gray-50"
              )}
            />
          </div>
        </>
      )}
    </Checkbox>
  );
};

export default Switch;
