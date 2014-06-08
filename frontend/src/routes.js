'use strict';

var Response = require('./lib/response');

// About page
var about = function(req, res) {
  var response = new Response(res);
  var About = require('./views/pages/about');
  response.render(new About());
};

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
  about: about,
  favicon: favicon,
  home: home
};
