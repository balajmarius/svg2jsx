import React from "react";
import { twMerge } from "tailwind-merge";

export interface CheckboxProps {
  name: string;
  checked?: boolean;
  children: React.ReactNode | React.ReactNode[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, children, checked, onChange }) => {
  return (
    <>
      <label className="group flex items-center gap-2 cursor-pointer" htmlFor={name}>
        {children}
        <div className="bg-gray-250 border-2 border-gray-250 rounded-3xl">
          <div
            className={twMerge(
              "transition-all rounded-full w-4 h-4",
              checked ? "ml-4" : "mr-4",
              checked ? "bg-green-100 group-hover:bg-green-50" : "bg-gray-100 group-hover:bg-gray-50"
            )}
          />
        </div>
      </label>

      <input id={name} checked={checked} type="checkbox" className="hidden" onChange={onChange} />
    </>
  );
};

export default Checkbox;
