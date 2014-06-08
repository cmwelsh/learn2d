/** @jsx React.DOM */
'use strict';

var React = require('react');

var Navigation = require('../layout/navigation');

var About = React.createClass({displayName: 'About',
  render: function() {
    return (
      React.DOM.div( {className:"content"}, 
        Navigation(null ),

        React.DOM.h1(null, "About")
      )
    );
  }
});

module.exports = About;
