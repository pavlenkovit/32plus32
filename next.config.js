//const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  target: 'serverless',
  cssModules: false,
});
