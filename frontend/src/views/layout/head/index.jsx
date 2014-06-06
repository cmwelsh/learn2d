/** @jsx React.DOM */

var React = require('react');

var NoJsFallback = require('./no-js-fallback');

var Head = React.createClass({
  render: function() {
    return (
      <head>
        <meta charSet="utf-8" />
        <title>Learn2D | Online Programming Education</title>
        <link rel="stylesheet" href="/assets/stylesheets/custom.css" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Learn to develop 2D code through online programming education at Learn2D."
        />
        <NoJsFallback />
      </head>
    );
  },
});

module.exports = Head;
