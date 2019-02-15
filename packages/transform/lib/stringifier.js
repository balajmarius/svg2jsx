const plainObject = require('lodash.isplainobject');

/**
 * Stringify style.
 *
 * @param   {Array} style Style data.
 * @returns {string}
 */
const stringifyStyle = (style = {}) => {
  const proprietiesNames = Object.keys(style);

  if (!proprietiesNames.length) {
    return '';
  }

  const buffer = proprietiesNames.reduce((accumulator, propriety) => {
    const value = style[propriety];

    return accumulator + `${propriety}: ${value}, `;
  }, '');

  return buffer;
};

/**
 * Stringify attributes.
 *
 * @param   {Object} attrs Node attributes data.
 * @returns {string}
 */
const stringifyAttributes = (attributes = {}) => {
  const attributesNames = Object.keys(attributes);

  if (!attributesNames.length) {
    return '';
  }

  const buffer = attributesNames.reduce((accumulator, attributeName) => {
    const attribute = attributes[attributeName];

    if (plainObject(attribute)) {
      return accumulator + ` ${attributeName}={{ ${stringifyStyle(attribute)} }}`;
    }
    return accumulator + ` ${attributeName}="${attribute}"`;
  }, '');

  return buffer;
};

/**
 * Stringify SVG tree.
 *
 * @param   {Object} node The SVG tree.
 * @returns {string}
 */
const stringify = (node) => {
  const attributes = stringifyAttributes(node.attributes);
  const buffer = `<${node.name}${attributes}`;

  if (node.children.length) {
    const childrensBuffer = node.children.reduce((accumulator, childrenNode) => {
      const children = stringify(childrenNode);

      return accumulator + '>' + children + `/></${node.name}>`;
    }, buffer);

    return childrensBuffer;
  }

  return buffer + '/>';
};

module.exports = stringify;
