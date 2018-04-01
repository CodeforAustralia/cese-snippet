const programs = require('./programs/programs.service.js');
const schools = require('./schools/schools.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(programs);
  app.configure(schools);
};
