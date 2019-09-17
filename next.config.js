const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(withImages(withSass({
  target: 'serverless',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[hash:base64:5]__[local]",
  },
})));
