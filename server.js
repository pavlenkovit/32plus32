const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = 3001;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/post/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = { slug: req.params.slug };
      return app.render(req, res, actualPage, queryParams)
    });

    server.get('/trainings/:page', (req, res) => {
      const actualPage = '/trainings';
      const queryParams = { page: req.params.page };
      return app.render(req, res, actualPage, queryParams)
    });

    server.get('/category/:slug', (req, res) => {
      const actualPage = '/category';
      const queryParams = { slug: req.params.slug, page: 1 };
      return app.render(req, res, actualPage, queryParams)
    });

    server.get('/category/:slug/:page', (req, res) => {
      const actualPage = '/category';
      const queryParams = { slug: req.params.slug, page: req.params.page };
      return app.render(req, res, actualPage, queryParams)
    });

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
