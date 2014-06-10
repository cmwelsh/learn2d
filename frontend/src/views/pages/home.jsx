/** @jsx React.DOM */
'use strict';

var React = require('react');

var Navigation = require('../layout/navigation');

var Home = React.createClass({
  render: function() {
    return (
      <div className="content">
        <Navigation />

        <h1>Home</h1>
      </div>
    );
  }
});

module.exports = Home;
