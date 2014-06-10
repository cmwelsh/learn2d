/** @jsx React.DOM */
'use strict';

var React = require('react');

var NoJsFallback = require('./no-js-fallback');

var Head = React.createClass({displayName: 'Head',
  render: function() {
    return (
      React.DOM.head(null, 
        React.DOM.meta( {charSet:"utf-8"} ),
        React.DOM.title(null, "Learn2D | Online Programming Education"),
        React.DOM.link( {rel:"stylesheet", href:"/assets/stylesheets/custom.css"} ),
        React.DOM.link( {rel:"icon", href:"/favicon.ico"} ),
        React.DOM.meta( {name:"viewport", content:"width=device-width"} ),
        React.DOM.meta(
          {name:"description",
          content:"Learn to develop 2D code through online programming education at Learn2D."}
        ),
        NoJsFallback(null )
      )
    );
  }
});

module.exports = Head;
