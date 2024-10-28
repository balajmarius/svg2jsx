import { camelCase } from "lodash";
import type { Node } from "svg-parser";
import styleToJS from "style-to-js";

const jsxPropertyOverrides: Record<string, string> = {
  class: "className",
} as const;

export const transform = (node: Node | string): Node | string => {
  if (typeof node === "string" || node?.type === "text") {
    return node;
  }

  const propertiesNames = Object.keys(node.properties ?? {});

  const properties = propertiesNames.reduce((accumulator, propertyName) => {
    const property = node?.properties?.[propertyName];

    if (typeof property === "undefined") {
      return accumulator;
    }

    const isStyleAttribute = propertyName === "style";
    const isDataAttribute = propertyName.startsWith("data-");

    if (isDataAttribute) {
      return {
        ...accumulator,
        [propertyName]: property,
      };
    }
    if (isStyleAttribute) {
      return {
        ...accumulator,
        [propertyName]: styleToJS(property as string),
      };
    }
    if (jsxPropertyOverrides[propertyName]) {
      return {
        ...accumulator,
        [jsxPropertyOverrides[propertyName]]: property,
      };
    }
    return {
      ...accumulator,
      [camelCase(propertyName)]: property,
    };
  }, {});

  return {
    ...node,
    properties,
    children: node.children.map(transform),
  };
};
