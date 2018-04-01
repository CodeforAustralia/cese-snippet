const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '10mb', extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.listen(5001, () => {
  console.log('API running at http://localhost:5001/api');
});
