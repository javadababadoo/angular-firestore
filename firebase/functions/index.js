const functions = require('firebase-functions');
const express = require('express');

const app = express();

var routes = require('./api/routes/devices-routes');
routes(app); //register the route

// app.get('/timestamp', (request, response) => {
//     response.send(`${Date.now()}`);
// });

// app.get('/timestamp-cached', (request, response) => {
//     response.set('Cache-control', 'public, max-age=300, s-maxage=600');
//     response.send(`${Date.now()}`);
// });

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
      res.status(err.status || 500).send({ error: err.message });
    } else {
      next(err);
    }
}  

function errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
      });
}

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

exports.app = functions.https.onRequest(app);
