'use strict';

var Application = require('./src/server/application');

var app = new Application({
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development'
});
app.initialize();
