// Initializes the `programs` service on path `/programs`
const createService = require('feathers-mongodb');
const hooks = require('./programs.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = {
    paginate,
	  id: "id",
  };

  // Initialize our service with any options it requires
  app.use('/api/programs', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('/api/programs');

  mongoClient.then(db => {
    service.Model = db.collection('programs');
  });

  service.hooks(hooks);
};
