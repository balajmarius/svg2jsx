const isPlainObject = require('lodash.isplainobject');
const isString = require('lodash.isstring');

/**
 * Stringify style.
 *
 * @param {Object=} style Node style.
 * @returns {string}
 */
const stringifyStyle = (style = {}) => {
  const proprietiesNames = Object.keys(style);

  if (!proprietiesNames.length) {
    return '';
  }

  const buffer = proprietiesNames.reduce((accumulator, proprietyName) => {
    const propriety = style[proprietyName];

    if (isString(propriety)) {
      return accumulator + `${proprietyName}: "${propriety}", `;
    }
    return accumulator + `${proprietyName}: ${propriety}, `;
  }, '');

  return buffer;
};

/**
 * Stringify attributes.
 *
 * @param {Object=} attributes Node attributes.
 * @returns {string}
 */
const stringifyAttributes = (attributes = {}) => {
  const attributesNames = Object.keys(attributes);

  if (!attributesNames.length) {
    return '';
  }

  const buffer = attributesNames.reduce((accumulator, attributeName) => {
    const attribute = attributes[attributeName];

    if (isPlainObject(attribute)) {
      return accumulator + ` ${attributeName}={{ ${stringifyStyle(attribute)} }}`;
    }
    return accumulator + ` ${attributeName}="${attribute}"`;
  }, '');

  return buffer;
};

/**
 * Stringify SVG tree.
 *
 * @param {Object} node Root node.
 * @returns {string}
 */
const stringify = (node) => {
  const attributes = stringifyAttributes(node.attributes);
  const buffer = `<${node.name}${attributes}>`;

  if (node.children.length) {
    const childrensBuffer = node.children.reduce((accumulator, childrenNode) => {
      const children = stringify(childrenNode);

      return accumulator + children;
    }, buffer);

    return childrensBuffer + `</${node.name}>`;
  }

  return buffer + `</${node.name}>`;
};

module.exports = stringify;
