/** @jsx React.DOM */

var React = require('react');

var Index = React.createClass({displayName: 'Index',
  render: function() {
    return (
      React.DOM.html(null, 
        React.DOM.head(null, 
          React.DOM.title(null, "Learn2D - Learn To Develop 2D Code"),
          React.DOM.link( {rel:"stylesheet", href:"/assets/stylesheets/screen.css"} )
        ),
        React.DOM.body(null, 
          React.DOM.div( {className:"site-container"}, 
            "hello world!"
          )
        )
      )
    );
  },
});

module.exports = Index;
