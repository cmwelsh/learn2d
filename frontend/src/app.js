var errorhandler = require('errorhandler');
var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes');

// Create Express application instance
var app = express();

// Copy environment variables to application instance
app.set('port', process.env.PORT || 3000);

// Configure static files middleware
app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

// Define HTTP routes
app.get('/', routes.index);
app.get('/favicon.ico', routes.favicon);

// Development only middleware
if (app.get('env') === 'development') {
  app.use(errorhandler());
}

// Listen for HTTP connections
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
