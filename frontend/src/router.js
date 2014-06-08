'use strict';

var isServer = typeof window === 'undefined';

if (isServer) {
  var Router = require('director').http.Router;
} else {
  var Router = require('director').Router;
  var $ = require('jquery');
  var React = require('react');
}

var Response = require('./lib/response');

var home = function() {
  console.log('home');
  var Home = require('./views/pages/home');
  if (isServer) {
    var response = new Response(this.res);
    response.render(new Home());
  } else {
    React.renderComponent(new Home(), $('.site-container').get(0));
  }
};

var about = function() {
  console.log('about');
  var About = require('./views/pages/about');
  if (isServer) {
    var response = new Response(this.res);
    response.render(new About());
  } else {
    React.renderComponent(new About(), $('.site-container').get(0));
  }
};

var routes;
if (isServer) {
  routes = {
    '/': {
      get: home
    },
    '/about': {
      get: about
    }
  };
} else {
  routes = {
    '/': home,
    '/about': about
  };
}

var router = new Router(routes);

module.exports = router;
