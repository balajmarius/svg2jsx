import React from "react";
import { useDropzone, DropEvent, FileRejection, type DropzoneProps as ReactDropzoneProps } from "react-dropzone";

export interface DropzoneProps extends ReactDropzoneProps {}

export const Dropzone: React.FC<DropzoneProps> = ({ children }) => {
  const state = useDropzone({});

  const rootProps = state.getRootProps();
  const inputProps = state.getInputProps();

  return (
    <div {...rootProps} className="w-full h-full" onClick={undefined}>
      <input {...inputProps} accept="image/svg+xml" />
      {children?.(state)}
    </div>
  );
};

export default Dropzone;
