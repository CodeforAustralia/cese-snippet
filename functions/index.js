var functions = require('firebase-functions');

var app = require('./server');

exports.app = functions.https.onRequest(app);
