/** @jsx React.DOM */

var React = require('react');

var Head = require('./head');

var Layout = React.createClass({
  render: function() {
    return (
      <html lang="en" className="no-js">
        <Head />
        <body>
          <div className="site-container">
            {this.props.children}
          </div>
        </body>
      </html>
    );
  },
});

module.exports = Layout;
