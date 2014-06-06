/** @jsx React.DOM */

var React = require('react');

var Layout = require('../layout');

var Home = React.createClass({
  render: function() {
    return (
      <Layout>
        <h1>Learn2D</h1>
      </Layout>
    );
  },
});

module.exports = Home;
