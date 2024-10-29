import React from "react";
import { useDropzone, DropEvent, FileRejection, type DropzoneProps as ReactDropzoneProps } from "react-dropzone";

export interface DropzoneProps extends ReactDropzoneProps {
  onDrop: (files: File[]) => Promise<void>;
}

export const Dropzone: React.FC<DropzoneProps> = ({ children, onDrop }) => {
  const state = useDropzone({ onDrop });

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
