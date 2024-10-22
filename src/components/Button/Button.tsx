import React from "react";
import { twMerge } from "tailwind-merge";

import { type ButtonVariant } from "@/components/Button";

export interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: React.ReactNode | React.ReactNode[];
}

export const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "text-white cursor-pointer rounded-full w-full flex justify-center items-center gap-2 transition-transform hover:scale-110 active:scale-100",
        variant === "text" && "bg-gray-100 py-2 px-4",
        variant === "contained" && "bg-purple-100 px-6 py-3"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
