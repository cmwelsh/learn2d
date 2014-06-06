/** @jsx React.DOM */

var React = require('react');

var NoJsFallback = React.createClass({displayName: 'NoJsFallback',
  render: function() {
    return (
      React.DOM.script( {dangerouslySetInnerHTML:{
        __html: 'document.documentElement.className = ' +
          'document.documentElement.className.replace(\'no-js\', \'js\');'
      }} )
    );
  },
});

module.exports = NoJsFallback;
