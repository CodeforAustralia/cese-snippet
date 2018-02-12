const path = require('path');

const appSrcPath = path.resolve(process.cwd(), 'src');

module.exports = (config, env, helpers) => {
  const newResolveModules = [...config.resolve.modules, appSrcPath];
  config.resolve.modules = newResolveModules;
};
