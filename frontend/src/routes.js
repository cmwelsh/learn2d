'use strict';

var Response = require('./lib/response');

// Favicon
var favicon = function(req, res) {
  var response = new Response(res);
  response.sendAsset('images/favicon.ico');
};

// Home page
var home = function(req, res) {
  var response = new Response(res);
  var Home = require('./views/pages/home');
  response.render(new Home());
};

module.exports = {
  favicon: favicon,
  home: home
};
