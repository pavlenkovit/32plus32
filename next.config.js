const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withImages(withCSS({
  target: 'serverless',
  cssModules: false,
}));
