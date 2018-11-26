const webpack = require("../../webpack.config");

module.exports = (baseConfig, env, config) => {
  config.module = webpack.module;
  config.resolve = { ...config.resolve, ...webpack.resolve };

  return config;
};
