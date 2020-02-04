import transform from '@svg2jsx/transform';
import { NextApiRequest, NextApiResponse } from 'next-server/dist/lib/utils';

import httpStatusCode from '../../utils/httpStatusCode';

export default async function(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const jsx = await transform(req.body.svg, req.body.config);
    res.status(httpStatusCode.OK).send({ jsx });
  } catch (error) {
    res.status(httpStatusCode.BAD_REQUEST).send({ message: error.message });
  }
}
