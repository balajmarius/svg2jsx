const parser = require('svg-parser');

/**
 * Creates tree data from SVG string.
 * @param {string} svg SVG string.
 * @returns {Object}
 */
function parse(svg) {
  return parser.parse(svg);
}

module.exports = parse;
