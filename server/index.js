const path = require('path');
const express = require('express');
const jsonServer = require('json-server');

const db = require('./db.json');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


// Optional except if you want to have JSON Server defaults
// app.use('/api', jsonServer.defaults());
app.use('/api', jsonServer.router(db));

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});