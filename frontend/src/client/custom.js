'use strict';

var $ = require('jquery');

var Application = require('./application');
var app = new Application({
  container: $('.site-container').get(0)
});
app.initialize();
