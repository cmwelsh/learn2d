var path = require('path');

// Home page
exports.index = function(req, res) {
  res.send('hello world');
};

// Favicon
exports.favicon = function(req, res) {
  res.sendfile(path.resolve(__dirname + '/../public/images/favicon.ico'));
};
