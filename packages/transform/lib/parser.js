const parser = require('svg-parser');

function formatParsedToReactNative(el) {
  const {
    name,
    children,
  } = el;
  el.name = name[0].toUpperCase() + name.substring(1);
  if (children) {
    children.forEach(childEl => formatParsedToReactNative(childEl));
  }
  return el;
}

/**
 * Creates tree data from SVG string.
 * @param {string} svg SVG string.
 * @returns {Object}
 */
function parse(svg, config) {
  const parsed = parser.parse(svg);
  if (config.reactNative) {
    formatParsedToReactNative(parsed);
  }
  return parsed;
}
module.exports = parse;
