'use strict';

var React = require('react');
var Router = require('director');
var $ = require('jquery');

var About = require('../views/pages/about');
var Home = require('../views/pages/home');

var about = function() {
  React.renderComponent(new About(), $('.site-container').get(0));
};

var home = function() {
  React.renderComponent(new Home(), $('.site-container').get(0));
};

var routes = {
  '/': home,
  '/about': about
};

var router = new Router(routes);
router.configure({
  html5history: true
});
router.init();

$(document).on('click', 'a', function(event) {
  var href = $(this).attr('href');

  console.log(href.slice(0,1));

  if (href.slice(0,1) === '/') {
    event.preventDefault();

    console.log('test');
    console.log(href);
    router.setRoute(href);
  }
});
