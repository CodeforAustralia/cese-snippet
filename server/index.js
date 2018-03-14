const path = require('path');
const express = require('express');
const index = require('./routes/index');
const jsonServer = require('json-server');

const db = require('./db.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// Optional except if you want to have JSON Server defaults
// app.use('/api', jsonServer.defaults());
app.use('/api', jsonServer.router(db));


app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});