const express = require('express');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const port = 3001;
const app = next({ dev });
const handle = app.getRequestHandler();

const buildId = !dev
  ? fs.readFileSync('./.next/BUILD_ID', 'utf8').toString()
  : null;

app.prepare()
  .then(() => {
    const server = express();

    server.get('/post/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = { slug: req.params.slug };
      return app.render(req, res, actualPage, queryParams)
    });

    server.get('/category/:slug', (req, res) => {
      const actualPage = '/category';
      const queryParams = { slug: req.params.slug };
      return app.render(req, res, actualPage, queryParams)
    });


    if (!dev) {
      server.get('/_next/-/app.js', (req, res) =>
        app.serveStatic(req, res, path.resolve('./.next/app.js'))
      );

      const hash = buildId;

      server.get(`/_next/${hash}/app.js`, (req, res) =>
        app.serveStatic(req, res, path.resolve('./.next/app.js'))
      );
    }


    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    })
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
