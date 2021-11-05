// eslint-disable-next-line no-global-assign
require = require('esm')(module);
module.exports = require('./customize-vue-config.js');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/teslalife-vue/'
      : '/'
  }