var path = require('path');
var React = require('react');

// Home page
exports.index = function(req, res) {
  var Index = require('./views/site').index;
  res.send(React.renderComponentToStaticMarkup(new Index()));
};

// Favicon
exports.favicon = function(req, res) {
  res.sendfile(path.resolve(__dirname + '/../public/images/favicon.ico'));
};
