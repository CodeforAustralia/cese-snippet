const functions = require('firebase-functions');

// const localServer = require('./local-server');
const api = require('./api-service/src/app');

exports.app = functions.https.onRequest(api);
