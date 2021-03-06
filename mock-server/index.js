const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const logger = require('morgan');
const jsonServer = require('json-server');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '10mb', extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
app.use(jsonServer.bodyParser);
app.use((req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});
app.use('/api', apiRouter);


// todo - image service

// todo - email service

// todo - export to pdf service

app.listen(5001, () => {
  console.log('API running at http://localhost:5001/api');
});
