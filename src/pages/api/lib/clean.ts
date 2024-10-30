import { optimize, type PluginConfig } from "svgo";

const defaultSvgoConfig: Array<PluginConfig> = [
  "convertStyleToAttrs",
  "removeDoctype",
  "removeXMLProcInst",
  "removeComments",
  "removeMetadata",
  "removeEditorsNSData",
  "cleanupAttrs",
  "mergeStyles",
  "inlineStyles",
  "minifyStyles",
  "removeUselessDefs",
  "cleanupNumericValues",
  "convertColors",
  "removeUnknownsAndDefaults",
  "removeNonInheritableGroupAttrs",
  "removeUselessStrokeAndFill",
  "cleanupEnableBackground",
  "removeHiddenElems",
  "removeEmptyText",
  "convertShapeToPath",
  "convertEllipseToCircle",
  "moveElemsAttrsToGroup",
  "moveGroupAttrsToElems",
  "collapseGroups",
  "convertPathData",
  "convertStyleToAttrs",
  "convertTransform",
  "removeEmptyAttrs",
  "removeEmptyContainers",
  "removeUnusedNS",
  "mergePaths",
  "sortAttrs",
  "sortDefsChildren",
  "removeTitle",
  "removeDesc",
];

export const clean = (svg: string, cleanupIds: boolean) => {
  const { data } = optimize(svg, {
    plugins: cleanupIds
      ? defaultSvgoConfig.concat({ name: "cleanupIds", params: { minify: cleanupIds } })
      : defaultSvgoConfig,
  });

  return data;
};
