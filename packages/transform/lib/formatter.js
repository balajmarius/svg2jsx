const prettier = require('prettier');

/**
 * Format SVG string.
 *
 * @param {string} svg The SVG string.
 * @param {Object} options Prettier options.
 * @return {string}
 */
const format = (svg, options) => {
  const component = `
    const SvgComponent = () => (
      ${svg}
    )
  `;
  const formatted = prettier.format(component, {
    ...options,
    parser: 'babel',
  });

  return formatted;
};

module.exports = format;
