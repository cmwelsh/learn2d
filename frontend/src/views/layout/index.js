/** @jsx React.DOM */
'use strict';

var React = require('react');

var Head = require('./head');
var Navigation = require('./navigation');

var Layout = React.createClass({displayName: 'Layout',
  render: function() {
    return (
      React.DOM.html( {lang:"en", className:"no-js"}, 
        Head(null ),
        React.DOM.body(null, 
          React.DOM.div( {className:"site-container"}, 
            this.props.children
          ),

          React.DOM.script( {src:"/custom.js"})
        )
      )
    );
  }
});

module.exports = Layout;
