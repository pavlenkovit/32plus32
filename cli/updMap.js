const dateFormat = require('dateformat');
const rp = require('request-promise');
const builder = require('xmlbuilder');
const fs = require('fs');
const path = require('path');

const now = new Date();
const date = dateFormat(now, 'yyyy-mm-dd');
//const date = dateFormat(now, 'yyyy-mm-dd\'T\'HH:MM:ss');

const site = 'https://32plus32.ru';
const baseURL = 'https://api.32plus32.ru/wp-json/wp/v2';
const root = builder.create('urlset')
  .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
  .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
  .att('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd')

const arr = [
  {
    loc: `${site}/`,
    lastmod: date,
  }, {
    loc: `${site}/trainings`,
    lastmod: date,
  },
  {
    loc: `${site}/blog`,
    lastmod: date,
  },
];

const pushPost = (list) => {
  list.forEach(({ slug, modified, categories }) => {
    const type = categories.includes(77) ? 'train' : 'post';
    arr.push({
      loc: `https://32plus32.ru/${type}/${slug}`,
      lastmod: modified.slice(0, 10),
    });
  });
};

rp(`${baseURL}/pages`)
  .then(response => {
    JSON.parse(response).forEach(({ slug, modified }) => {
      arr.push({
        loc: `${site}/page/${slug}`,
        lastmod: modified.slice(0, 10),
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
    fs.writeFileSync(path.resolve(__dirname, '..', 'public', 'sitemap.xml'), xml);
  })
  .catch(err => console.log(err));
