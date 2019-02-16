const express = require('express');
const next = require('next');
const transform = require('@svg2jsx/transform');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      handle(req, res);
    });

    server.post('/', async (req, res) => {
      try {
        const transformed = await transform(req.data);
        res.send(transformed);
      } catch (error) {
        res.sendStatus(500);
      }
    });

    server.listen(port, (error) => {
      if (error) {
        throw error;
      }
      console.log(`⚡️ App started on http://localhost:${port}`);
    });
  })
  .catch(() => {
    process.exit(1);
  });
