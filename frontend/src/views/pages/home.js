/** @jsx React.DOM */

var React = require('react');

var Layout = require('../layout');

var Home = React.createClass({displayName: 'Home',
  render: function() {
    return (
      Layout(null, 
        React.DOM.h1(null, "Learn2D")
      )
    );
  },
});

module.exports = Home;
