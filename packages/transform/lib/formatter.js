const prettier = require('prettier');

/**
 *
 * @param {string} svg The SVG string.
 * @param {Object} options Prettier options.
 * @return {string}
 */
const format = (svg, options) => {
  const formatted = prettier.format(svg, {
    ...options,
    parser: 'babel',
  });

  return formatted;
};

module.exports = format;
