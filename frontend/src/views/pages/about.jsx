/** @jsx React.DOM */
'use strict';

var React = require('react');

var Navigation = require('../layout/navigation');

var About = React.createClass({
  render: function() {
    return (
      <div className="content">
        <Navigation />

        <h1>About</h1>
      </div>
    );
  }
});

module.exports = About;
