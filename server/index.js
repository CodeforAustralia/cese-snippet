const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json({ limit: '10mb', extended: false }));

app.use(logger('dev'));

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});