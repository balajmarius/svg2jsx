const Svgo = require('svgo');

/**
 * Create SVGO instance.
 */
const cleaner = new Svgo();

/**
 * Clean and optimize SVG.
 *
 * @param {string} svg The SVG string.
 */
const clean = async (svg) => {
  try {
    const { data } = await cleaner.optimize(svg);
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = clean;
