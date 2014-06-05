var path = require('path');
var React = require('react');


var render = function(res, component) {
  var html = React.renderComponentToStaticMarkup(component);
  res.send('<!DOCTYPE html>\n' + html);
};

// Home page
exports.index = function(req, res) {
  var Index = require('./views/index');
  render(res, new Index());
};

// Favicon
exports.favicon = function(req, res) {
  res.sendfile(path.resolve(__dirname + '/../public/images/favicon.ico'));
};
