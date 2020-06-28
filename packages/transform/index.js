const clean = require('./lib/cleaner');
const parse = require('./lib/parser');
const transform = require('./lib/transformer');
const stringify = require('./lib/stringifier');
const format = require('./lib/formatter');
const getAlternativeImports = require('./lib/getAlternativeImports');

/**
 * Clean-up and transform SVG into valid JSX.
 * @param {string} svg SVG string
 * @param {Object} config Output component type and Prettier options.
 * @returns {string}
 */
async function transformer(svg, config = {}) {
  let imports = [];
  const cleaned = await clean(svg, config);
  const parsed = parse(cleaned.data, config);
  if (config.reactNative) {
    imports = getAlternativeImports(parsed);
  }
  const transformed = transform(parsed);
  const morphed = stringify(transformed);
  const formatted = format(morphed, config, imports);

  return formatted;
}

module.exports = transformer;
