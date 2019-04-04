const Svgo = require('svgo');

/**
 * Svgo instance.
 */
const cleaner = new Svgo();

/**
 * Clean-up SVG.
 *
 * @param {string} svg SVG string.
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
