'use strict';

var browserify = require('browserify-middleware');
var errorhandler = require('errorhandler');
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');

var router = require('../router');

function Application(options) {
  // Create Express application instance
  this.app = express();

  // Copy environment variables to application instance
  this.app.set('environment', options.environment);
  this.app.set('port', options.port);
}

Application.prototype.initialize = function() {
  var _this = this;

  // Configure static files middleware
  this.app.use('/assets', express['static'](path.resolve(__dirname, '../../assets')));
  this.app.use('/components', express['static'](path.resolve(__dirname, '../../bower_components')));
  this.app.get('/custom.js', browserify(path.resolve(__dirname, '../client/custom.js')));
  this.app.use(favicon(__dirname + '/../../assets/images/favicon.ico'));

  // Configure routing middleware
  this.app.use(function(req, res, next) {
    router.dispatch(req, res, function(err) {
      if (err) {
        console.log(err);
        next();
      }
    });
  });

  // Development only middleware
  if (this.app.get('environment') === 'development') {
    this.app.use(errorhandler());
  }

  // Listen for HTTP connections
  http.createServer(this.app).listen(this.app.get('port'), function() {
    console.log('Express server listening on port ' + _this.app.get('port'));
  });
};

module.exports = Application;
