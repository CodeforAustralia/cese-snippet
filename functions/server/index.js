const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '10mb', extended: false }));

app.use(express.static(path.join(__dirname, './../../', 'client/build')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './../../', 'client/build/index.html'));
});

module.exports = app;