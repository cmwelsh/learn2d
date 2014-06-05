var React = require('react');

exports.index = React.createClass({
  render: function() {
    return React.DOM.h1({
      children: 'hello world!',
    });
  },
});
