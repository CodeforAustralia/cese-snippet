const path = require('path');
const express = require('express');
const { handlebars } = require('consolidate');

const app = express();

app.engine('hbs', handlebars);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/*', (req, res) => {
	res.render('index', {});
});

module.exports = app;