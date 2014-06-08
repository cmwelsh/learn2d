/** @jsx React.DOM */
'use strict';

var React = require('react');

var Navigation = React.createClass({displayName: 'Navigation',
  render: function() {
    return (
      React.DOM.ul(null, 
        React.DOM.li(null, 
          React.DOM.a( {href:"/"}, 
            "Home"
          )
        ),
        React.DOM.li(null, 
          React.DOM.a( {href:"/about"}, 
            "About"
          )
        )
      )
    );
  }
});

module.exports = Navigation;
