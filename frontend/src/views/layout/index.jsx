/** @jsx React.DOM */
'use strict';

var React = require('react');

var Head = require('./head');
var Navigation = require('./navigation');

var Layout = React.createClass({
  render: function() {
    return (
      <html lang="en" className="no-js">
        <Head />
        <body>
          <div className="site-container">
            {this.props.children}
          </div>

          <script src="/custom.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = Layout;
