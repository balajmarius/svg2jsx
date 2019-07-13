import React, { memo } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/jsx';
import 'brace/mode/xml';

import '../styles/editorStyle';

interface EditorType {
  mode: string;
  value: string;
  isReadOnly?: boolean;
  onChange(value: string): void;
}

function Editor({ value, mode, isReadOnly, onChange }: EditorType) {
  return (
    <AceEditor
      mode={mode}
      value={value}
      theme="svg2jsx"
      readOnly={isReadOnly}
      showPrintMargin={false}
      editorProps={{ $blockScrolling: Infinity }}
      setOptions={{ showFoldWidgets: false }}
      onChange={onChange}
    />
  );
}

Editor.defaultProps = {
  isReadOnly: false,
  onChange: undefined,
};

export default memo(Editor);
