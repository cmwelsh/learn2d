'use strict';

var Response = require('./lib/response');

// Favicon
var favicon = function(req, res) {
  var response = new Response(res);
  response.sendAsset('images/favicon.ico');
};

module.exports = {
  favicon: favicon
};
