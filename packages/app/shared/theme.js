import { color, fontSize, fontFamily } from './constants';

function createStyle(acequire, exports) {
  const style = `
    .ace_editor {
      min-width: 100%;
      min-height: 100vh;
      line-height: 1.6;
      font-size: ${fontSize.normal};
      font-family: ${fontFamily.mono};
    }
    .ace_scroller {
      margin: 15px 0 0;
    }
    .ace_content {
      border-left: 2px solid ${color.black};
    }
    .ace_gutter {
      padding: 15px 0 0;
      color: ${color.lightGrey};
      background: ${color.codGrey};
    }
    .ace_gutter-cell {
      padding: 0 20px;
    }
    .ace_comment {
      color: ${color.lightGrey};
    }
    .ace_xml.ace_keyword {
      color: ${color.white};
    }
    .ace_active-line,
    .ace_marker-layer .ace_selection {
      background: ${color.darkGrey};
    }
    .ace_type,
    .ace_keyword {
      color: ${color.lightGreen};
    }
    .ace_operator,
    .ace_punctuation {
      color: ${color.pink};
    }
    .ace_name,
    .ace_class,
    .ace_string,
    .ace_numeric,
    .ace_attribute-value {
      color: ${color.lightPurple};
    }
  `;

  const className = 'ace_svg2jsx';

  /* eslint-disable no-param-reassign */
  exports.padding = 15;
  exports.isDark = true;
  exports.cssText = style;
  exports.cssClass = className;

  acequire('../lib/dom').importCssString(style, className);
}

/* eslint-disable no-undef  */
ace.define('ace/theme/svg2jsx', ['require', 'exports', 'module', 'ace/lib/dom'], createStyle);
