const path = require('path');

const appSrcPath = path.resolve(process.cwd(), 'src');

module.exports = (config, env, helpers) => {

  // resolve module paths
  const newResolveModules = [...config.resolve.modules, appSrcPath];
  config.resolve.modules = newResolveModules;

  if (env === 'development') {
    // show fullscreen error overlay
    config.devServer.overlay = true;
  }

};
