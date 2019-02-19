const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const transform = require('@svg2jsx/transform');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './packages/app' });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());

    server.get('*', (req, res) => handle(req, res));

    server.post('/', async (req, res) => {
      try {
        const svg = await transform(req.body.svg);
        res.send({ svg });
      } catch (error) {
        res.sendStatus(500);
      }
    });

    server.listen(port, (error) => {
      if (error) {
        throw new Error(error);
      }
      console.log(`☄️ App ready on http://localhost:${port}`);
    });
  })
  .catch(() => {
    process.exit(1);
  });
