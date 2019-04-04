const parser = require('svg-parser');

/**
 * Creates list from CSS string.
 *
 * @param {string} style CSS string.
 * @return {Object}
 */
const parseStyle = (style) => {
  const parsed = style
    .trim()
    .split(';')
    .map((proprieties) => proprieties.split(':'));

  return parsed;
};

/**
 * Creates tree data from SVG string.
 *
 * @param {string} svg SVG string.
 * @returns {Object}
 */
const parse = (svg) => parser.parse(svg);

module.exports = {
  parse,
  parseStyle,
};
