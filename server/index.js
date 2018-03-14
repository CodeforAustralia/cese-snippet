const { join } = require('path');
const express = require('express');
const index = require('./routes/index');
const jsonServer = require('json-server');

const db = require('./db.json');

const app = express();
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

if (dev) {
	app.use(express.static(join(__dirname, 'public')))
}

app.use('/', index);

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults());
app.use('/api', jsonServer.router(db));


app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
});