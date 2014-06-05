/** @jsx React.DOM */

var React = require('react');

var Index = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Learn2D - Learn To Develop 2D Code</title>
          <link rel="stylesheet" href="/assets/stylesheets/screen.css" />
        </head>
        <body>
          <div className="site-container">
            hello world!
          </div>
        </body>
      </html>
    );
  },
});

module.exports = Index;
