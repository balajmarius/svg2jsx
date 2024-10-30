type ExportsType = Record<string, unknown>;

type RequireType = (module: string) => {
  importCssString: (cssText: string | null, cssClass: string) => void;
};

interface AceEditor {
  define(
    name: string,
    dependencies: ReadonlyArray<string>,
    create: (require: RequireType, exports: ExportsType) => void
  ): void;
}

declare const ace: AceEditor;

const createAceEditorStylesheet = (require: RequireType, exports: ExportsType) => {
  exports.cssClass = "ace_svg2jsx";

  require("../lib/dom").importCssString(null, "ace_svg2jsx");
};

ace.define("ace/theme/svg2jsx", ["require", "exports", "module", "ace/lib/dom"], createAceEditorStylesheet);
