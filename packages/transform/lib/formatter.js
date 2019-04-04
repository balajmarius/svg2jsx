const prettier = require('prettier');
const template = require('lodash.template');

/**
 * React component templates.
 *
 * @readonly
 * @type {Map<string, string>}
 */
const templates = {
  class: `
    import React from "react";

    class Icon extends React.Component {
      render() {
        return <%= svg %>;
      }
    }

    export default Icon;
  `,
  functional: `
    import React from "react";
    
    function Icon() {
      return <%= svg %>;
    }

    export default Icon;
  `,
};

/**
 * Creates React component.
 *
 * @param {string} svg Transformed SVG string.
 * @param {string="functional","class"} options.type Desired component type.
 * @return {string}
 */
const reactify = (svg, { type = 'functional' }) => {
  const compile = template(templates[type]);
  const component = compile({ svg });

  return component;
};

/**
 * Creates React component and formats with Prettier.
 *
 * @param {string} svg Transformed SVG string.
 * @param {Object=} options Component type and Prettier config.
 * @return {string}
 */
const format = (svg, options) => {
  const component = reactify(svg, options);
  const formatted = prettier.format(component, {
    ...options,
    parser: 'babel',
  });

  return formatted;
};

module.exports = format;
