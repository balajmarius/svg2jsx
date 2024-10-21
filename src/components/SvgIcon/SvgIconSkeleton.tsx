import React from "react";
import { DynamicOptionsLoadingProps } from "next/dynamic";

import { SvgIcon } from "@/components/SvgIcon";

export interface SvgIconSkeletonProps extends DynamicOptionsLoadingProps {}

export const SvgIconSkeleton: React.FC<SvgIconSkeletonProps> = () => (
  <div className="grid grid-cols-12 h-full">
    <div className="col-span-6 border-l-xl border-gray-300">
      <div className="px-4 py-4">
        <SvgIcon cx="w-full max-w-screen-sm fill-gray-150">
          <path d="M10.5,0.5H0.2C0.1,0.5,0,0.4,0,0.2C0,0.1,0.1,0,0.2,0h10.3c0.1,0,0.2,0.1,0.2,0.2 C10.8,0.4,10.7,0.5,10.5,0.5z M13.7,1.7H0.8c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2h12.8c0.1,0,0.2,0.1,0.2,0.2 C13.9,1.6,13.8,1.7,13.7,1.7z M9.4,2.8h-8c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2h8c0.1,0,0.2,0.1,0.2,0.2 C9.6,2.7,9.5,2.8,9.4,2.8L9.4,2.8z M23.8,4H1.4C1.3,4,1.2,3.9,1.2,3.8c0-0.1,0.1-0.2,0.2-0.2h22.3c0.1,0,0.2,0.1,0.2,0.2 C24,3.9,23.9,4,23.8,4z M2.3,5.2H0.8c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2h1.4c0.1,0,0.2,0.1,0.2,0.2 C2.5,5.1,2.4,5.2,2.3,5.2z M0.4,6.4H0.2C0.1,6.4,0,6.3,0,6.1C0,6,0.1,5.9,0.2,5.9h0.2c0.1,0,0.2,0.1,0.2,0.2 C0.7,6.3,0.6,6.4,0.4,6.4z" />
        </SvgIcon>
      </div>
    </div>
    <div className="col-span-6 border-l-xl border-gray-300">
      <div className="px-4 py-4">
        <SvgIcon cx="w-full max-w-screen-sm fill-gray-150">
          <path d="M10.5,0.5H0.2C0.1,0.5,0,0.4,0,0.2C0,0.1,0.1,0,0.2,0h10.3c0.1,0,0.2,0.1,0.2,0.2 C10.8,0.4,10.7,0.5,10.5,0.5z M13.7,1.7H0.8c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2h12.8c0.1,0,0.2,0.1,0.2,0.2 C13.9,1.6,13.8,1.7,13.7,1.7z M9.4,2.8h-8c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2h8c0.1,0,0.2,0.1,0.2,0.2 C9.6,2.7,9.5,2.8,9.4,2.8L9.4,2.8z M23.8,4H1.4C1.3,4,1.2,3.9,1.2,3.8c0-0.1,0.1-0.2,0.2-0.2h22.3c0.1,0,0.2,0.1,0.2,0.2 C24,3.9,23.9,4,23.8,4z M2.3,5.2H0.8c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2h1.4c0.1,0,0.2,0.1,0.2,0.2 C2.5,5.1,2.4,5.2,2.3,5.2z M0.4,6.4H0.2C0.1,6.4,0,6.3,0,6.1C0,6,0.1,5.9,0.2,5.9h0.2c0.1,0,0.2,0.1,0.2,0.2 C0.7,6.3,0.6,6.4,0.4,6.4z" />
        </SvgIcon>
      </div>
    </div>
  </div>
);

export default SvgIconSkeleton;
