import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'brace/mode/jsx';
import 'brace/mode/xml';
import '../shared/theme';

function Editor({ value, mode, readOnly, onChange }) {
  return (
    <AceEditor
      mode={mode}
      value={value}
      theme="svg2jsx"
      readOnly={readOnly}
      showPrintMargin={false}
      displayIndentGuides={false}
      setOptions={{
        showFoldWidgets: false,
      }}
      onLoad={(editor) => {
        editor.renderer.updateFontSize();
      }}
      onChange={onChange}
    />
  );
}

Editor.propTypes = {
  mode: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};

Editor.defaultProps = {
  readOnly: false,
  onChange: undefined,
};

export default Editor;
