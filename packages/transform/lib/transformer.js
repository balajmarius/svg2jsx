const camelCase = require('lodash.camelcase');
const cloneDeep = require('lodash.clonedeep');
const reactifyStyle = require('css-to-react-native').default;

const { parseStyle } = require('./parser');

/**
 * Custom attributes.
 *
 * @readonly
 * @type {Map<string, string>}
 */
const customAttributes = {
  class: 'className',
  'clip-path': 'clip-path',
};

/**
 * Apply transforms to styles.
 *
 * @param {string} style Style string.
 * @returns {string}
 */
const transformStyle = (style) => {
  const parsed = parseStyle(style);
  const transformed = reactifyStyle(parsed);

  return transformed;
};

/**
 * Apply transforms to SVG tree.
 *
 * @param {Object} node Root node.
 * @returns {string}
 */
const transform = (node) => {
  const clonedNode = cloneDeep(node);
  const attributeNames = Object.keys(node.attributes);

  clonedNode.attributes = attributeNames.reduce((accumulator, attributeName) => {
    const attribute = clonedNode.attributes[attributeName];

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
    if (customAttributes[attributeName]) {
      return {
        ...accumulator,
        [customAttributes[attributeName]]: attribute,
      };
    }
    return {
      ...accumulator,
      [camelCase(attributeName)]: attribute,
    };
  }, {});

  if (clonedNode.children) {
    clonedNode.children = clonedNode.children.map(transform);
  }

  return clonedNode;
};

module.exports = transform;
