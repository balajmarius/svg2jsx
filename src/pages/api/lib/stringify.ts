import isStringNumber from "is-number";
import type { Node, RootNode } from "svg-parser";

export const cssObjectToString = (style: Record<string, string>) => {
  const propertyNames = Object.keys(style);

  return propertyNames.reduce((accumulator, propertyName) => {
    const property = style[propertyName];
    const isCssVariable = propertyName.startsWith("--");

    const cssPropertyName = isCssVariable ? `"${propertyName}"` : propertyName;
    const cssProperty = isStringNumber(property) ? Number.parseFloat(property) : property;

    if (typeof property === "string") {
      return accumulator + `${cssPropertyName}: "${cssProperty}", `;
    }
    return accumulator + `${cssPropertyName}: ${cssProperty}, `;
  }, ``);
};

export const stringifyProperties = (properties: Record<string, string | number>) => {
  const propertyNames = Object.keys(properties);

  return propertyNames.reduce((accumulator, propertyName) => {
    const property = properties[propertyName];

    if (typeof property === "object") {
      return accumulator + ` ${propertyName}={{ ${cssObjectToString(property)} }}`;
    }
    return accumulator + ` ${propertyName}="${property}"`;
  }, ``);
};

export const stringifyRoot = (node: RootNode): string => {
  return node.children.reduce((accumulator, children) => {
    return accumulator + stringify(children);
  }, ``);
};

export const stringify = (node: string | Node | RootNode): string => {
  if (typeof node === "string") {
    return node;
  }
  if (node.type === "text") {
    return node.value as string;
  }
  if (node.type === "root") {
    return stringifyRoot(node);
  }

  const properties = stringifyProperties(node.properties ?? {});
  const buffer = `<${node.tagName}${properties}>`;

  const childrens = node.children.reduce((accumulator, children) => {
    return accumulator + stringify(children);
  }, buffer);

  return childrens + `</${node.tagName}>`;
};
