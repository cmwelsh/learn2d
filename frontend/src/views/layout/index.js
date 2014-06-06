/** @jsx React.DOM */

var React = require('react');

var Head = require('./head');

var Layout = React.createClass({displayName: 'Layout',
  render: function() {
    return (
      React.DOM.html( {lang:"en", className:"no-js"}, 
        Head(null ),
        React.DOM.body(null, 
          React.DOM.div( {className:"site-container"}, 
            this.props.children
          )
        )
      )
    );
  },
});

module.exports = Layout;
