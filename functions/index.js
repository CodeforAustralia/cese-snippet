const functions = require('firebase-functions');

const api = require('./api-service/src/app');

exports.app = functions.https.onRequest(api);
