import color from './color';
import fontSize from './fontSize';
import fontFamily from './fontFamily';

interface AceType {
  define(name: string, dependencies: string[], create: Function): void;
}

declare const ace: AceType;

function createStyle(require: Function, exports: any): void {
  const style = `
    .ace_editor {
      min-width: 100%;
      line-height: 1.6;
      font-size: ${fontSize.normal};
      font-family: ${fontFamily.monospace};
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
    .ace_active-line, .ace_marker-layer .ace_selection {
      background: ${color.darkGrey};
    }
    .ace_type, .ace_keyword {
      color: ${color.lightGreen};
    }
    .ace_operator, .ace_punctuation {
      color: ${color.pink};
    }
    .ace_name, .ace_class, .ace_string, .ace_numeric, .ace_attribute-value {
      color: ${color.lightPurple};
    }
  `;

  const className = 'ace_svg2jsx';

  exports.cssText = style;
  exports.cssClass = className;

  require('../lib/dom').importCssString(style, className);
}

ace.define('ace/theme/svg2jsx', ['require', 'exports', 'module', 'ace/lib/dom'], createStyle);
