const programs = require('./programs/programs.service.js');
const schools = require('./schools/schools.service.js');
const session = require('./session/session.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(programs);
  app.configure(schools);
  app.configure(session);
};
