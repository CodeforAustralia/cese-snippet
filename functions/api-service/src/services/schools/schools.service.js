// Initializes the `schools` service on path `/schools`
const createService = require('feathers-mongodb');
const hooks = require('./schools.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/api/schools', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('/api/schools');

  mongoClient.then(db => {
    service.Model = db.collection('schools');
  });

  service.hooks(hooks);
};