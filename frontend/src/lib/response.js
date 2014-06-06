'use strict';

var path = require('path');
var React = require('react');

var beautifyHtml = require('./beautify-html');

function Response(res) {
  this.res = res;
}

Response.prototype.sendAsset = function(filename) {
  this.res.sendfile(path.resolve(__dirname + '/../../assets/' + filename));
};

Response.prototype.render = function(component) {
  var html = React.renderComponentToStaticMarkup(component);
  var prettyHtml = beautifyHtml(html);
  this.res.send('<!DOCTYPE html>\n' + prettyHtml);
};

module.exports = Response;
