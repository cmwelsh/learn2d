'use strict';

var browserify = require('browserify-middleware');
var errorhandler = require('errorhandler');
var express = require('express');
var http = require('http');
var path = require('path');

var router = require('./router');
var routes = require('./routes');

// Create Express application instance
var app = express();

// Copy environment variables to application instance
app.set('port', process.env.PORT || 3000);

// Configure static files middleware
app.use('/assets', express['static'](path.resolve(__dirname, '../assets')));
app.use('/components', express['static'](path.resolve(__dirname, '../bower_components')));
app.get('/custom.js', browserify(path.resolve(__dirname, './client/custom.js')));
app.get('/favicon.ico', routes.favicon);

// Configure routing middleware
app.use(function(req, res, next) {
  router.dispatch(req, res, function(err) {
    if (err) {
      console.log(err);
      next();
    }
  });
});

// Development only middleware
if (app.get('env') === 'development') {
  app.use(errorhandler());
}

// Listen for HTTP connections
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
