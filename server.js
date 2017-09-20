// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();
app.use(bodyParser.json())
var SubTypeRoute = require('./server/routes/SubTypeRouteConfig');
new SubTypeRoute(app);
var TypeRoute = require('./server/routes/TypeRouteConfig');
new TypeRoute(app);
var UserRoute = require('./server/routes/UserRouteConfig');
new UserRoute(app);
var CompanyInfoRoute = require('./server/routes/CompanyInfoRouteConfig');
new CompanyInfoRoute(app);
var PatientInfoRoute = require('./server/routes/PatientInfoRouteConfig');
new PatientInfoRoute(app);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', function(req, res)  {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);


server.listen(port, function(){ console.log('API running on localhost:'+port)});
