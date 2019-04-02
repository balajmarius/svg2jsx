const prettier = require('prettier');

/**
 * Format SVG string.
 *
 * @param  {string}  svg     The SVG string.
 * @param  {Object}  options Prettier options.
 * @return {string}
 */
const format = (svg, options) => {
  const formatted = prettier.format(svg, {
    ...options,
    parser: 'babel',
  });

  // remove unnecessary
  // semicolon added by prettier
  return formatted.replace(/;/g, '');
};

module.exports = format;
