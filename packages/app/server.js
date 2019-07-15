const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const transform = require('@svg2jsx/transform');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({
  dev,
  dir: 'packages/app',
});

const handle = app.getRequestHandler();

function createServer() {
  const server = express();

  server.use(compression());
  server.use(bodyParser.json());

  server.get('*', (req, res) => handle(req, res));

  server.post('/', async (req, res) => {
    try {
      const jsx = await transform(req.body.svg, req.body.config);
      res.send({ jsx });
    } catch (error) {
      res.status(500).send({ error });
    }
  });

  server.listen(port);
}

app
  .prepare()
  .then(createServer)
  .catch(() => process.exit(1));
