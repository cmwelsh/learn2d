/** @jsx React.DOM */
'use strict';

var React = require('react');

var Navigation = require('../layout/navigation');

var Home = React.createClass({displayName: 'Home',
  render: function() {
    return (
      React.DOM.div( {className:"content"}, 
        Navigation(null ),

        React.DOM.h1(null, "Home")
      )
    );
  }
});

module.exports = Home;
