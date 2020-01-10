const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = 3001;
const app = next({ dev });
const handle = app.getRequestHandler();

const posts = [
  'trenirovki-po-girevomu-dvoeboryu-na-sentyabr-2019',
  'trenirovki-po-girevomu-dvoeboryu-na-avgust-2019',
  'poziciya-overxed-v-uprazhnenii-tolchok-gir-problemy-testirovanie-resheniya',
  'trenirovki-po-girevomu-dvoeboryu-na-iyul-2019',
  'xvost-drakona-uprazhnenie-s-girej-na-press',
  'trenirovki-po-girevomu-dvoeboryu-na-iyun-2019',
  'trenirovki-po-girevomu-dvoeboryu-na-maj-2019',
  'podem-korpusa-s-girej',
  'russkij-tvist-s-girej',
  'xodba-vypadami-s-girej-v-fiksacii',
  'ryvok-s-vypadom-v-polozhenii-fiksacii',
  'zabros-dvux-gir-na-grud-frontalnyj-prised',
  'trenirovki-po-girevomu-dvoeboryu-na-aprel-2019',
  'trenirovki-po-girevomu-dvoeboryu-na-mart-2019-raspisanie',
  'novosti-32plus32-novyj-plan-trenirovok',
  'uprazhnenia-s-girey-na-press',
  'tolchok-giri-texnika',
  'zhim-giri-stoya',
  'podsed-pered-vytalkivaniem-gir',
  'statisticheskij-analiz-rezultatov-v-uprazhnenii-ryvok',
  'maxi-girej-vidy-maxov-i-texnika-vypolneniya',
  'dopolnitelny-max-giri',
  'pryzhki-na-tumbu',
  'vosstanovlenie-v-girevom-sporte',
  'kak-lechit-sorvannye-mozoli-na-rukax',
  'plan-trenirovok-po-girevomu-sportu-dlya-novichkov',
  'kakie-preparaty-ispolzuyut-v-girevom-sporte',
  'vypolnenie-ms-po-girevomu-sportu-za-3-mesyaca',
  'programma-trenirovok-po-girevomu-sportu-na-vtoruyu-polovinu-2017-goda',
  'stojka-s-giryami-na-grudi-texnika-i-oshibki',
  'ryvok-giri-tehnika',
  'sbros-gir-na-grud',
  'ivan-denisov-seminar',
  'sila-v-girevom-sporte',
  'tehnika-tolchka-i-ryvka',
  'kak-natrenirovat-ryvok',
  'anastasiya-zolotareva',
  'sovety-nachinayshemu-gireviku',
  'oshibki-v-tehnike-tolchka-gir',
  'planirovanie-v-girevom-sporte',
  'trenirovka-tolchka',
  'peremenniy-metod-trenirovok',
  'master-klass-timur-skorobogatyh',
  'dopolnytelnye-upragnenia-girevogo-sporta',
  'krossfit-i-girevoy-sport',
  'silovaya-podgotovka-girevika',
];

const pages = [
  'informaciya-o-trenirovkax-kak-polzovatsya-planom',
  'authors',
  'normativy-po-girevomu-sportu',
  'kontakty',
];

const trains = [
  'trenirovka-po-dvoeboryu-na-13-11-19',
  'trenirovka-po-dvoeboryu-na-12-11-19',
  'trenirovka-po-dvoeboryu-na-11-11-19',
  'trenirovka-po-dvoeboryu-na-9-11-19',
  'trenirovka-po-dvoeboryu-na-8-11-19',
  'trenirovka-po-dvoeboryu-na-6-11-19',
  'trenirovka-po-dvoeboryu-na-5-11-19',
  'trenirovka-po-dvoeboryu-na-4-11-19',
  'trenirovka-po-dvoeboryu-na-2-11-19',
  'trenirovka-po-dvoeboryu-na-1-11-19',
  'trenirovka-po-dvoeboryu-na-31-10-19',
  'trenirovka-po-dvoeboryu-na-30-10-19',
  'trenirovka-po-dvoeboryu-na-29-10-19',
  'trenirovka-po-dvoeboryu-na-28-10-19',
  'trenirovka-po-dvoeboryu-na-26-10-19',
  'trenirovka-po-dvoeboryu-na-25-10-19',
  'trenirovka-po-dvoeboryu-na-23-10-19',
  'trenirovka-po-dvoeboryu-na-22-10-19',
  'trenirovka-po-dvoeboryu-na-21-10-19',
  'trenirovka-po-dvoeboryu-na-19-10-19',
  'trenirovka-po-dvoeboryu-na-18-10-19',
  'trenirovka-po-dvoeboryu-na-17-10-19',
  'trenirovka-po-dvoeboryu-na-16-10-19',
  'trenirovka-po-dvoeboryu-na-15-10-19',
  'trenirovka-po-dvoeboryu-na-14-10-19',
  'trenirovka-po-dvoeboryu-na-12-10-19',
  'trenirovka-po-dvoeboryu-na-11-10-19',
  'trenirovka-po-dvoeboryu-na-9-10-19',
  'trenirovka-po-dvoeboryu-na-8-10-19',
  'trenirovka-po-dvoeboryu-na-7-10-19',
  'trenirovka-po-dvoeboryu-na-5-10-19',
  'trenirovka-po-dvoeboryu-na-4-10-19',
  'trenirovka-po-dvoeboryu-na-3-10-19',
  'trenirovka-po-dvoeboryu-na-2-10-19',
  'trenirovka-po-dvoeboryu-na-1-10-19',
  'trenirovka-po-dvoeboryu-na-30-09-19',
  'trenirovka-po-dvoeboryu-na-28-09-19',
  'trenirovka-po-dvoeboryu-na-27-09-19',
  'trenirovka-po-dvoeboryu-na-25-09-19',
  'trenirovka-po-dvoeboryu-na-24-09-19',
  'trenirovka-po-dvoeboryu-na-23-09-19',
  'trenirovka-po-dvoeboryu-na-21-09-19',
  'trenirovka-po-dvoeboryu-na-20-09-19',
  'trenirovka-po-dvoeboryu-na-19-09-19',
  'trenirovka-po-dvoeboryu-na-18-09-19',
  'trenirovka-po-dvoeboryu-na-17-09-19',
  'trenirovka-po-dvoeboryu-na-16-09-19',
  'trenirovka-po-dvoeboryu-na-14-09-19',
  'trenirovka-po-dvoeboryu-na-13-09-19',
  'trenirovka-po-dvoeboryu-na-11-09-19',
  'trenirovka-po-dvoeboryu-na-10-09-19',
  'trenirovka-po-dvoeboryu-na-9-09-19',
  'trenirovka-po-dvoeboryu-na-7-09-19',
  'trenirovka-po-dvoeboryu-na-6-09-19',
  'trenirovka-po-dvoeboryu-na-5-09-19',
  'trenirovka-po-dvoeboryu-na-4-09-19',
  'trenirovka-po-dvoeboryu-na-31-08-19',
  'trenirovka-po-dvoeboryu-na-29-08-19',
  'trenirovka-po-dvoeboryu-na-27-08-19',
  'trenirovka-po-dvoeboryu-na-25-08-19',
  'trenirovka-po-dvoeboryu-na-23-08-19',
  'trenirovka-po-dvoeboryu-na-21-08-19',
  'trenirovka-po-dvoeboryu-na-19-08-19',
  'trenirovka-po-dvoeboryu-na-17-08-19',
  'trenirovka-po-dvoeboryu-na-15-08-19',
  'trenirovka-po-dvoeboryu-na-14-08-19',
  'trenirovka-po-dvoeboryu-na-13-08-19',
  'trenirovka-po-dvoeboryu-na-12-08-19',
  'trenirovka-po-dvoeboryu-na-10-08-19',
  'trenirovka-po-dvoeboryu-na-9-08-19',
  'trenirovka-po-dvoeboryu-na-8-08-19',
  'trenirovka-po-dvoeboryu-na-7-08-19',
  'trenirovka-po-dvoeboryu-na-6-08-19',
  'trenirovka-po-dvoeboryu-na-5-08-19',
  'trenirovka-po-dvoeboryu-na-3-08-19',
  'trenirovka-po-dvoeboryu-na-2-08-19',
  'trenirovka-po-dvoeboryu-na-31-07-19',
  'trenirovka-po-dvoeboryu-na-30-07-19',
  'trenirovka-po-dvoeboryu-na-29-07-19',
  'trenirovka-po-dvoeboryu-na-27-07-19',
  'trenirovka-po-dvoeboryu-na-26-07-19',
  'trenirovka-po-dvoeboryu-na-25-07-19',
  'trenirovka-po-dvoeboryu-na-24-07-19',
  'trenirovka-po-dvoeboryu-na-23-07-19',
  'trenirovka-po-dvoeboryu-na-22-07-19',
  'trenirovka-po-dvoeboryu-na-20-07-19',
  'trenirovka-po-dvoeboryu-na-19-07-19',
  'trenirovka-po-dvoeboryu-na-17-07-19',
  'trenirovka-po-dvoeboryu-na-16-07-19',
  'trenirovka-po-dvoeboryu-na-15-07-19',
  'trenirovka-po-dvoeboryu-na-13-07-19',
  'trenirovka-po-dvoeboryu-na-12-07-19',
  'trenirovka-po-dvoeboryu-na-11-07-19',
  'trenirovka-po-dvoeboryu-na-10-07-19',
  'trenirovka-po-dvoeboryu-na-9-07-19',
  'trenirovka-po-dvoeboryu-na-8-07-19',
  'trenirovka-po-dvoeboryu-na-6-07-19',
  'trenirovka-po-dvoeboryu-na-5-07-19',
  'trenirovka-po-dvoeboryu-na-3-07-19',
  'trenirovka-po-dvoeboryu-na-2-07-19',
  'trenirovka-po-dvoeboryu-na-1-07-19',
  'trenirovka-po-dvoeboryu-na-29-06-19',
  'trenirovka-po-dvoeboryu-na-28-06-19',
  'trenirovka-po-dvoeboryu-na-27-06-19',
  'trenirovka-po-dvoeboryu-na-26-06-19',
  'trenirovka-po-dvoeboryu-na-25-06-19',
  'trenirovka-po-dvoeboryu-na-24-06-19',
  'trenirovka-po-dvoeboryu-na-22-06-19',
  'trenirovka-po-dvoeboryu-na-21-06-19',
  'trenirovka-po-dvoeboryu-na-19-06-19',
  'trenirovka-po-dvoeboryu-na-18-06-19',
  'trenirovka-po-dvoeboryu-na-17-06-19',
  'trenirovka-po-dvoeboryu-na-15-06-19',
  'trenirovka-po-dvoeboryu-na-14-06-19',
  'trenirovka-po-dvoeboryu-na-13-06-19',
  'trenirovka-po-dvoeboryu-na-12-06-19',
  'trenirovka-po-dvoeboryu-na-11-06-19',
  'trenirovka-po-dvoeboryu-na-10-06-19',
  'trenirovka-po-dvoeboryu-na-8-06-19',
  'trenirovka-po-dvoeboryu-na-7-06-19',
  'trenirovka-po-dvoeboryu-na-6-06-19',
  'trenirovka-po-dvoeboryu-na-5-06-19',
  'trenirovka-po-dvoeboryu-na-4-06-19',
  'trenirovka-po-dvoeboryu-na-1-06-19',
  'trenirovka-po-dvoeboryu-na-30-05-19',
  'trenirovka-po-dvoeboryu-na-28-05-19',
  'trenirovka-po-dvoeboryu-na-26-05-19',
  'trenirovka-po-dvoeboryu-na-24-05-19',
  'trenirovka-po-dvoeboryu-na-22-05-19',
  'trenirovka-po-dvoeboryu-na-20-05-19',
  'trenirovka-po-dvoeboryu-na-18-05-19',
  'trenirovka-po-dvoeboryu-na-16-05-19',
  'trenirovka-po-dvoeboryu-na-15-05-19',
  'trenirovka-po-dvoeboryu-na-13-05-19',
  'trenirovka-po-dvoeboryu-na-11-05-19',
  'trenirovka-po-dvoeboryu-na-10-05-19',
  'trenirovka-po-dvoeboryu-na-9-05-19',
  'trenirovka-po-dvoeboryu-na-8-05-19',
  'trenirovka-po-dvoeboryu-na-7-05-19',
  'trenirovka-po-dvoeboryu-na-6-05-19',
  'trenirovka-po-dvoeboryu-na-4-05-19',
  'trenirovka-po-dvoeboryu-na-3-05-19',
  'trenirovka-po-dvoeboryu-na-1-05-19',
  'trenirovka-po-dvoeboryu-na-30-04-19',
  'trenirovka-po-dvoeboryu-na-29-04-19',
  'trenirovka-po-dvoeboryu-na-27-04-19',
  'trenirovka-po-dvoeboryu-na-26-04-19',
  'trenirovka-po-dvoeboryu-na-25-04-19',
  'trenirovka-po-dvoeboryu-na-24-04-19',
  'trenirovka-po-dvoeboryu-na-23-04-19',
  'trenirovka-po-dvoeboryu-na-22-04-19',
  'trenirovka-po-dvoeboryu-na-20-04-19',
  'trenirovka-po-dvoeboryu-na-19-04-19',
  'trenirovka-po-dvoeboryu-na-17-04-19',
  'trenirovka-po-dvoeboryu-na-16-04-19',
  'trenirovka-po-dvoeboryu-na-15-04-19',
  'trenirovka-po-dvoeboryu-na-13-04-19',
  'trenirovka-po-dvoeboryu-na-12-04-19',
  'trenirovka-po-dvoeboryu-na-11-04-19',
  'trenirovka-po-dvoeboryu-na-10-04-19',
  'trenirovka-po-dvoeboryu-na-9-04-19',
  'trenirovka-po-dvoeboryu-na-8-04-19',
  'trenirovka-po-dvoeboryu-na-6-04-19',
  'trenirovka-po-dvoeboryu-na-5-04-19',
  'trenirovka-po-dvoeboryu-na-3-04-19',
  'trenirovka-po-dvoeboryu-na-2-04-19',
  'trenirovka-po-dvoeboryu-na-1-04-19',
  'trenirovka-po-dvoeboryu-na-30-03-19',
  'trenirovka-po-dvoeboryu-na-29-03-19',
  'trenirovka-po-dvoeboryu-na-28-03-19',
  'trenirovka-po-dvoeboryu-na-27-03-19',
  'trenirovka-po-dvoeboryu-na-26-03-19',
  'trenirovka-po-dvoeboryu-na-25-03-19',
  'trenirovka-po-dvoeboryu-na-23-03-19',
  'trenirovka-po-dvoeboryu-na-22-03-19',
  'trenirovka-po-dvoeboryu-na-20-03-19',
  'trenirovka-po-dvoeboryu-na-19-03-19',
  'trenirovka-po-dvoeboryu-na-18-03-19',
  'trenirovka-po-dvoeboryu-na-16-03-19',
  'trenirovka-po-dvoeboryu-na-15-03-19',
  'trenirovka-po-dvoeboryu-na-14-03-19',
  'trenirovka-po-dvoeboryu-na-13-03-19',
  'trenirovka-po-dvoeboryu-na-12-03-19',
  'trenirovka-po-dvoeboryu-na-11-03-19',
  'trenirovka-po-dvoeboryu-na-9-03-19',
  'trenirovka-po-dvoeboryu-na-8-03-19',
  'trenirovka-po-dvoeboryu-na-7-03-19',
  'trenirovka-po-dvoeboryu-na-6-03-19',
  'trenirovka-po-dvoeboryu-na-5-03-19',
  'trenirovka-po-dvoeboryu-na-4-03-19',
  'trenirovka-po-dvoeboryu-na-2-03-19',
  'trenirovka-po-dvoeboryu-na-1-03-19',
  'trenirovka-po-dvoeboryu-na-22-09-17',
  'trenirovka-po-dvoeboryu-na-20-09-17',
  'trenirovka-po-dvoeboryu-na-18-09-17',
  'trenirovka-po-dvoeboryu-na-15-09-17',
  'trenirovka-po-dvoeboryu-na-13-09-17',
  'trenirovka-po-dvoeboryu-na-11-09-17',
  'trenirovka-po-dvoeboryu-na-8-09-17',
  'trenirovka-po-dvoeboryu-na-6-09-17',
  'trenirovka-po-dvoeboryu-na-21-08-17',
  'trenirovka-po-dvoeboryu-na-18-08-17',
  'trenirovka-po-dvoeboryu-na-16-08-17',
  'trenirovka-po-dvoeboryu-na-14-08-17',
  'trenirovka-po-dvoeboryu-na-11-08-17',
  'trenirovka-po-dvoeboryu-na-9-08-17',
  'trenirovka-po-dvoeboryu-na-7-08-17',
  'trenirovka-po-dvoeboryu-na-4-08-17',
  'trenirovka-po-dvoeboryu-na-1-08-17',
  'trenirovka-po-dvoeboryu-na-31-07-17',
  'trenirovka-po-dvoeboryu-na-28-07-17',
  'trenirovka-po-dvoeboryu-na-26-07-17',
  'trenirovka-po-dvoeboryu-na-24-07-17',
  'trenirovka-po-dvoeboryu-na-21-07-17',
  'trenirovka-po-dvoeboryu-na-19-07-17',
  'trenirovka-po-dvoeboryu-na-17-07-17',
  'trenirovka-po-dvoeboryu-na-14-07-17',
  'trenirovka-po-dvoeboryu-na-12-07-17',
  'trenirovka-po-dvoeboryu-na-10-07-17',
  'trenirovka-po-dvoeboryu-na-7-07-17',
  'trenirovka-po-dvoeboryu-na-5-07-17',
  'trenirovka-po-dvoeboryu-na-3-07-17',
  'trenirovka-po-dvoeboryu-na-30-06-17',
  'trenirovka-po-dvoeboryu-na-28-06-17',
  'trenirovka-po-dvoeboryu-na-26-06-17',
  'trenirovka-po-dvoeboryu-na-23-06-17',
  'trenirovka-po-dvoeboryu-na-21-06-17',
  'trenirovka-po-dvoeboryu-na-19-06-17',
  'trenirovka-po-dvoeboryu-na-16-06-17',
  'trenirovka-po-dvoeboryu-na-14-06-17',
  'trenirovka-po-dvoeboryu-na-12-06-17',
  'trenirovka-po-dvoeboryu-na-9-06-17',
  'trenirovka-po-dvoeboryu-na-7-06-17',
  'trenirovka-po-dvoeboryu-na-4-06-17',
  'trenirovka-po-dvoeboryu-na-2-06-17',
  'trenirovka-po-dvoeboryu-na-31-05-17',
  'trenirovka-po-dvoeboryu-na-29-05-17',
  'trenirovka-po-dvoeboryu-na-26-05-17',
  'trenirovka-po-dvoeboryu-na-24-05-17',
  'trenirovka-po-dvoeboryu-na-22-05-17',
  'trenirovka-po-dvoeboryu-na-19-05-17',
  'trenirovka-po-dvoeboryu-na-17-05-17',
  'trenirovka-po-dvoeboryu-na-15-05-17',
  'trenirovka-po-dvoeboryu-na-12-05-17',
  'trenirovka-po-dvoeboryu-na-10-05-17',
  'trenirovka-po-dvoeboryu-na-8-05-17',
  'trenirovka-po-dvoeboryu-na-3-05-17',
  'trenirovka-po-dvoeboryu-na-1-05-17',
];

const redirects = [
  { from: '/category/dvoeborie', to: '/trainings' },
  { from: '/post/trenirovki-po-girevomu-dvoeboryu-na-sentyabr-2019', to: '/trainings' },
  { from: '/post/trenirovki-po-girevomu-dvoeboryu-na-avgust-2019', to: '/trainings' },
  { from: '/post/trenirovki-po-girevomu-dvoeboryu-na-iyul-2019', to: '/trainings' },
  { from: '/post/trenirovki-po-girevomu-dvoeboryu-na-iyun-2019', to: '/trainings' },
  { from: '/post/trenirovki-po-girevomu-dvoeboryu-na-maj-2019', to: '/trainings' },
  { from: '/post/trenirovki-po-girevomu-dvoeboryu-na-aprel-2019', to: '/trainings' },
  { from: '/post/trenirovki-po-girevomu-dvoeboryu-na-mart-2019-raspisanie', to: '/trainings' },
  { from: '/karta-saita', to: '/blog' },
  { from: '/page/karta-saita', to: '/blog' },
  { from: '/post/zabros-dvux-gir-na-grud-frontalnyj-prised', to: 'https://vk.com/video-52965338_456239048' },
  { from: '/post/ryvok-s-vypadom-v-polozhenii-fiksacii', to: 'https://vk.com/video-52965338_456239047' },
];

posts.forEach((post) => {
  redirects.push({
    from: `/${post}`,
    to: `/post/${post}`,
  });
});

pages.forEach((page) => {
  redirects.push({
    from: `/${page}`,
    to: `/page/${page}`,
  });
});

trains.forEach((train) => {
  redirects.push({
    from: `/${train}`,
    to: `/train/${train}`,
  });
});

app.prepare()
  .then(() => {
    const server = express();

    redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
      server[method](from, (req, res) => {
        res.redirect(type, to);
      })
    });

    server.get('/sitemap.xml', (req, res) => (
      res.status(200).sendFile('sitemap.xml', {
        root: __dirname + '/public/',
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
        }
      })
    ));

    server.get('*', (req, res) => {
      return handle(req, res);
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
