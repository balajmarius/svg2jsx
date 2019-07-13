const camelCase = require('lodash.camelcase');
const nativeCSS = require('css-to-object');

/**
 * Custom attributes.
 * @readonly
 * @type {Map<string, string>}
 */
const CUSTOM_ATTRIBUTES = {
  class: 'className',
  'clip-path': 'clip-path',
};

/**
 * Apply transforms to styles.
 * @param {string} style Style string.
 * @returns {string}
 */
function transformStyle(style) {
  const transformed = nativeCSS(style, {
    numbers: true,
    camelCase: true,
  });

  return transformed;
}

/**
 * Apply transforms to SVG tree.
 * @param {Object} node Root node.
 * @returns {string}
 */
function transform(node) {
  const attributeNames = Object.keys(node.attributes);

  const attributes = attributeNames.reduce((accumulator, attributeName) => {
    const attribute = node.attributes[attributeName];

    const isStyleAttribute = attributeName === 'style';
    const isDataAttribute = attributeName.startsWith('data-');

    if (isDataAttribute) {
      return {
        ...accumulator,
        [attributeName]: attribute,
      };
    }
    if (isStyleAttribute) {
      return {
        ...accumulator,
        [attributeName]: transformStyle(attribute),
      };
    }
    if (CUSTOM_ATTRIBUTES[attributeName]) {
      return {
        ...accumulator,
        [CUSTOM_ATTRIBUTES[attributeName]]: attribute,
      };
    }
    return {
      ...accumulator,
      [camelCase(attributeName)]: attribute,
    };
  }, {});

  const children = node.children.map(transform);

  return {
    ...node,
    children,
    attributes,
  };
}

module.exports = transform;
