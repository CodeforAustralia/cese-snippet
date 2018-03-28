var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./routes/api');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '10mb', extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './../../', 'client/build')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './../../', 'client/build/index.html'));
});

module.exports = app;