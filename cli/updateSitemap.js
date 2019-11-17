const dateFormat = require('dateformat');
const rp = require('request-promise');
const builder = require('xmlbuilder');
const fs = require('fs');
const path = require('path');

const now = new Date();
const date = dateFormat(now, 'yyyy-mm-dd\'T\'HH:MM:ss');

const site = 'https://32plus32.ru';
const baseURL = 'https://api.32plus32.ru/wp-json/wp/v2';
const root = builder.create('urlset')
  .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

const arr = [
  {
    loc: `${site}/`,
    lastmod: date,
  }, {
    loc: `${site}/trainings`,
    lastmod: date,
  },
];

const pushPost = (list) => {
  list.forEach(({ slug, modified, categories }) => {
    const type = categories.includes(77) ? 'train' : 'post';
    arr.push({
      loc: `https://32plus32.ru/${type}/${slug}`,
      lastmod: modified,
    });
  });
};

rp(`${baseURL}/pages`)
  .then(response => {
    JSON.parse(response).forEach(({ slug, modified }) => {
      arr.push({
        loc: `${site}/page/${slug}`,
        lastmod: modified,
      });
    });
    return rp(`${baseURL}/categories`)
  })
  .then(response => {
    JSON.parse(response).forEach(({ slug }) => {
      arr.push({
        loc: `${site}/category/${slug}`,
        lastmod: date,
      });
    });
    return rp(`${baseURL}/posts?per_page=100&page=1`)
  })
  .then(response => {
    pushPost(JSON.parse(response));
    return rp(`${baseURL}/posts?per_page=100&page=2`)
  })
  .then(response => {
    pushPost(JSON.parse(response));
    return rp(`${baseURL}/posts?per_page=100&page=3`)
  })
  .then(response => {
    pushPost(JSON.parse(response));

    arr.forEach(({ loc, lastmod }) => {
      const item = root.ele('url');
      item.ele('loc', {}, loc);
      item.ele('lastmod', {}, lastmod);
    });

    const xml = root.end({ pretty: true });
    fs.writeFileSync(path.resolve(__dirname, '..', 'sitemap.xml'), xml);
  })
  .catch(err => console.log(err));
