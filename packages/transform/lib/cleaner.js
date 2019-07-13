const Svgo = require('svgo');

/**
 * Svgo instance.
 */
const cleaner = new Svgo();

/**
 * Clean-up SVG.
 * @param {string} svg SVG string.
 * @returns {string}
 */
async function clean(svg) {
  try {
    return await cleaner.optimize(svg);
  } catch (error) {
    return error;
  }
}

module.exports = clean;
