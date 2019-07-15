import transform from '@svg2jsx/transform';
import { NextApiRequest, NextApiResponse } from 'next-server/dist/lib/utils';

export default async function route(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const jsx = await transform(req.body.svg, req.body.config);
    res.send({ jsx });
  } catch (error) {
    res.status(500).send({ error });
  }
}
