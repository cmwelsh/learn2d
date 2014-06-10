/** @jsx React.DOM */
'use strict';

var React = require('react');

var NoJsFallback = React.createClass({
  render: function() {
    return (
      <script dangerouslySetInnerHTML={{
        __html: 'document.documentElement.className = ' +
          'document.documentElement.className.replace(\'no-js\', \'js\');'
      }} />
    );
  },
});

module.exports = NoJsFallback;
