const staffListData = require('./staff-list.json');
const schoolsListData = require('./schools-list.json');
const programFieldsData = require('./program-field-data.json');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember, that
  // in Express the order matters

	app.get('/static/program-fields.json', (req, res) => {
		res.setHeader('Content-Type', 'application/json');
		res.send(programFieldsData);
		return res;
	});
	app.get('/static/staff-list.json', (req, res) => {
		res.setHeader('Content-Type', 'application/json');
		res.send(staffListData);
		return res;
	});
	app.get('/static/schools-list.json', (req, res) => {
		res.setHeader('Content-Type', 'application/json');
		res.send(schoolsListData);
		return res;
	});
};
