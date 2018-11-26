const { webpackModule, resolve } = require("../../webpack.config");

module.exports = (baseConfig, env, config) => {
  config.module = webpackModule;
  config.resolve = { ...config.resolve, ...resolve };

  return config;
};
