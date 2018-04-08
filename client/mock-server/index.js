const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const logger = require('morgan');

const staffListData = require('./staff-list.json');
const programFieldsData = require('./program-field-data.json');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '10mb', extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

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

app.listen(5001, () => {
  console.log('API running at http://localhost:5001/api');
});
