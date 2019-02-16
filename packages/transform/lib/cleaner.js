const Svgo = require('svgo');

/**
 * Create Svgo instance.
 */
const cleaner = new Svgo();

/**
 * Clean and optimize SVG.
 *
 * @param   {string} svg     The SVG string.
 * @returns {string}
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
