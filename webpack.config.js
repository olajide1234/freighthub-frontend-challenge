/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const { merge } = require('webpack-merge');
const common = require('./webpack-configs/webpack.common');

module.exports = (env) => {
  let config;
  if (!env.mode) {
    config = require('./webpack-configs/webpack.development');
  } else {
    config = require(`./webpack-configs/webpack.${env.mode}`);
  }
  return merge({ mode: env.mode }, common, config);
};
