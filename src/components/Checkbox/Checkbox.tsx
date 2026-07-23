import React from "react";
import { twMerge } from "tailwind-merge";

export interface CheckboxProps {
  name: string;
  checked?: boolean;
  children: React.ReactNode | ReadonlyArray<React.ReactNode>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, children, checked, onChange }) => {
  return (
    <>
      <label
        className="group min-h-11 flex cursor-pointer items-center justify-between gap-2 md:min-h-0 md:justify-start"
        htmlFor={name}
      >
        {children}
        <div className="bg-gray-250 border-2 border-gray-250 h-5 w-9 overflow-hidden rounded-3xl">
          <div
            className={twMerge(
              "h-4 w-4 rounded-full transition duration-150 ease-out motion-reduce:transition-none",
              checked ? "translate-x-4" : "translate-x-0",
              checked ? "bg-green-100 md:group-hover:bg-green-50" : "bg-gray-100 md:group-hover:bg-gray-50",
            )}
          />
        </div>
      </label>

      <input id={name} checked={checked} type="checkbox" className="hidden" onChange={onChange} />
    </>
  );
};

export default Checkbox;
