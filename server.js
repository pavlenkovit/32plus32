const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = 3001;
const app = next({ dev });
const handle = app.getRequestHandler();

const redirects = [
  { from: '/normativy-po-girevomu-sportu', to: '/page/normativy-po-girevomu-sportu' },
  { from: '/informaciya-o-trenirovkax-kak-polzovatsya-planom', to: '/page/informaciya-o-trenirovkax-kak-polzovatsya-planom' },
  { from: '/xvost-drakona-uprazhnenie-s-girej-na-press', to: '/post/xvost-drakona-uprazhnenie-s-girej-na-press' },
];

app.prepare()
  .then(() => {
    const server = express();

    redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
      server[method](from, (req, res) => {
        res.redirect(type, to);
      })
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
