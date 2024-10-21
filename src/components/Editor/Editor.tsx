import { useMemo } from "react";
import AceEditor from "react-ace";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwindcss/defaultConfig";

import "brace/mode/svg";
import "brace/mode/jsx";
import "@/components/Editor/theme";

export interface EditorProps {
  mode: "svg" | "jsx";
  value?: string;
  readOnly?: boolean;
  onChange?(value: string): void;
}

const editorDefaultProps = {
  setOptions: {
    /**
     * Disable code folding.
     */
    showFoldWidgets: false,
  },
  editor: {
    /**
     * Needed to suppress component's debug message.
     */
    $blockScrolling: Number.POSITIVE_INFINITY,
  },
};

export const Editor: React.FC<EditorProps> = ({ mode, value, readOnly, onChange }) => {
  const config = useMemo(() => resolveConfig(tailwindConfig), []);
  const [fontSize] = config.theme.fontSize.sm;

  return (
    <AceEditor
      {...editorDefaultProps}
      fontSize={fontSize}
      theme="svg2jsx"
      mode={mode}
      value={value}
      readOnly={readOnly}
      onChange={onChange}
    />
  );
};

export default Editor;
