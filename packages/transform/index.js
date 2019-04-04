const clean = require('./lib/cleaner');
const { parse } = require('./lib/parser');
const transform = require('./lib/transformer');
const stringify = require('./lib/stringifier');
const format = require('./lib/formatter');

/**
 * Clean-up and transform SVG into valid JSX.
 *
 * @param {string} svg SVG string
 * @param {Object} options Output component type and Prettier options.
 * @returns {string}
 */
const transformer = async (svg, options = {}) => {
  const cleaned = await clean(svg);
  const parsed = parse(cleaned);
  const transformed = transform(parsed);
  const morphed = stringify(transformed);
  const formatted = format(morphed, options);

  return formatted;
};

module.exports = transformer;
