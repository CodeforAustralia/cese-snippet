// Initializes the `session` service on path `/session`
const createService = require('feathers-mongodb');
const hooks = require('./session.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/session', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('session');

  mongoClient.then(db => {
    service.Model = db.collection('session');
  });

  service.hooks(hooks);
};