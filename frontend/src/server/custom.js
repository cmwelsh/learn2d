'use strict';

var Application = require('./application');

var app = new Application({
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development'
});
app.initialize();
