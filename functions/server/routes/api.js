const path = require('path');
const jsonServer = require('json-server');

const router = jsonServer.router(path.join(__dirname, './../', 'db.json'));

router.render = (req, res) => {
	res.set('Content-Type', 'application/json');
	// wrap returned resources will be wrapped in a body property
	res.jsonp({
		data: res.locals.data
	});
};

module.exports = router;