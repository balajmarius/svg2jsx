import flow from "lodash.flow";
import type { NextApiRequest, NextApiResponse } from "next";
import { parse, type Node } from "svg-parser";
import { StatusCodes } from "http-status-codes";

import { Options } from "@/utils/types";

import { clean } from "./lib/clean";
import { stringify } from "./lib/stringify";
import { reactify } from "./lib/reactify";
import { transform } from "./lib/transform";

export type Data = {
  jsx?: string;
  error?: unknown;
};

export const svg2jsx = flow(
  (svg: string, options: Options) => clean(svg, options?.cleanupIds),
  (svg: string) => parse(svg),
  (node: Node) => transform(node),
  (node: Node) => stringify(node),
);

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== "POST") {
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
    return null;
  }

  try {
    const result = svg2jsx(req.body.input.svg, req.body.input.options);
    const jsx = await reactify(result, req.body.input.options);
    res.status(StatusCodes.OK).json({ jsx });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
