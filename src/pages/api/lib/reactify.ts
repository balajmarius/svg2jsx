import { template } from "lodash";
import { format } from "prettier";

import type { Options } from "@/utils/types";

const defaultReactComponent = `
  import * as React from "react";

  <%= definitions %> = (props) => (
    <%= svg %>
  );

  <%= exports %>
`;

export const reactify = async (svg: string, { typescript, memo, jsxSingleQuote }: Options) => {
  const render = template(defaultReactComponent);

  const parser = typescript ? "typescript" : "babel";
  const definitions = typescript ? "const SvgIcon: React.FC<React.SVGProps<SVGElement>>" : "const SvgIcon";
  const exports = memo ? "export default React.memo(SvgIcon);" : "export default SvgIcon;";

  const component = render({
    svg,
    exports,
    definitions,
  });

  return await format(component, {
    parser,
    jsxSingleQuote,
  });
};
