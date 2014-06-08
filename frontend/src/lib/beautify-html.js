'use strict';

var beautifyHtmlFunc = require('js-beautify').html;
var _ = require('underscore');

var beautifyHtml  = _.partial(beautifyHtmlFunc, _, {
  indent_inner_html: true,
  indent_size: 2,
  wrap_line_length: 80
});

module.exports = beautifyHtml;
