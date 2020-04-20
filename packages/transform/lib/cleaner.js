const Svgo = require('svgo');

/**
 * Svgo config.
 */
const PLUGINS = [
  { cleanupAttrs: true },
  { removeDoctype: true },
  { removeXMLProcInst: true },
  { removeComments: true },
  { removeMetadata: true },
  { removeTitle: true },
  { removeDesc: true },
  { removeUselessDefs: true },
  { removeEditorsNSData: true },
  { removeEmptyAttrs: true },
  { removeHiddenElems: true },
  { removeEmptyText: true },
  { removeEmptyContainers: true },
  { removeViewBox: false },
  { cleanupEnableBackground: true },
  { convertStyleToAttrs: true },
  { convertColors: true },
  { convertPathData: true },
  { convertTransform: true },
  { removeUnknownsAndDefaults: true },
  { removeNonInheritableGroupAttrs: true },
  { removeUselessStrokeAndFill: true },
  { removeUnusedNS: true },
  { cleanupNumericValues: true },
  { moveElemsAttrsToGroup: true },
  { moveGroupAttrsToElems: true },
  { collapseGroups: true },
  { removeRasterImages: false },
  { mergePaths: true },
  { convertShapeToPath: true },
  { sortAttrs: true },
  { removeDimensions: false },
];

/**
 * Clean-up SVG.
 * @param {string} svg SVG string.
 * @returns {string}
 */
async function clean(svg, { cleanupIDs = true }) {
  const cleaner = new Svgo({
    full: true,
    plugins: [...PLUGINS, { cleanupIDs: cleanupIDs && { minify: false } }],
  });

  try {
    const cleaned = await cleaner.optimize(svg);
    return cleaned;
  } catch (error) {
    return error;
  }
}

module.exports = clean;
