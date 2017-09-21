// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Predix config start
var cookieParser = require('cookie-parser'); // used for session cookie
var passport;
var session = require('express-session');
var proxy = require('./proxy');
var config = require('./predix-config');
var passportConfig = require('./passport-config');
var node_env = process.env.node_env || 'development';
var node_env = process.env.node_env || 'development';
if (node_env === 'development') {
  var devConfig = require('./localConfig.json')[node_env];
	proxy.setServiceConfig(config.buildVcapObjectFromLocalConfig(devConfig));
	proxy.setUaaConfig(devConfig);
}

var windServiceURL = devConfig ? devConfig.windServiceURL : process.env.windServiceURL;

console.log('************'+node_env+'******************');
var uaaIsConfigured = config.clientId &&
    config.uaaURL &&
    config.uaaURL.indexOf('https') === 0 &&
    config.base64ClientCredential;
if (uaaIsConfigured) {
	passport = passportConfig.configurePassportStrategy(config);
}

app.set('trust proxy', 1);
app.use(cookieParser('predixsample'));
app.use(session({
	secret: 'predixsample',
	name: 'cookie_name',
	proxy: true,
	resave: true,
	saveUninitialized: true}));

if (uaaIsConfigured) {
  app.use(passport.initialize());
  // Also use passport.session() middleware, to support persistent login sessions (recommended).
  app.use(passport.session());
}

if (!uaaIsConfigured) { // no restrictions
  app.use(express.static(path.join(__dirname, process.env['base-dir'] ? process.env['base-dir'] : '../public')));
} else {
  //login route redirect to predix uaa login page
  app.get('/login',passport.authenticate('predix', {'scope': ''}), function(req, res) {
    // The request will be redirected to Predix for authentication, so this
    // function will not be called.
  });

  // access real Predix services using this route.
  // the proxy will add UAA token and Predix Zone ID.
  app.use('/predix-api',
  	passport.authenticate('main', {
  		noredirect: true
  	}),
  	proxy.router);

  //callback route redirects to secure route after login
  app.get('/callback', passport.authenticate('predix', {
  	failureRedirect: '/'
  }), function(req, res) {
  	console.log('Redirecting to secure route...');
  	res.redirect('/');
    });

  // example of calling a custom microservice.
  if (windServiceURL && windServiceURL.indexOf('https') === 0) {
    app.get('/windy/*', passport.authenticate('main', { noredirect: true}),
      // if calling a secure microservice, you can use this middleware to add a client token.
      // proxy.addClientTokenMiddleware,
      proxy.customProxyMiddleware('/windy', windServiceURL)
    );
  }

  //Use this route to make the entire app secure.  This forces login for any path in the entire app.
  app.use('/', passport.authenticate('main', {
    noredirect: false //Don't redirect a user to the authentication page, just show an error
    }),
    express.static(path.join(__dirname, process.env['base-dir'] ? process.env['base-dir'] : '../public'))
  );

  //Or you can follow this pattern to create secure routes,
  // if only some portions of the app are secure.
  app.get('/secure', passport.authenticate('main', {
    noredirect: true //Don't redirect a user to the authentication page, just show an error
    }), function(req, res) {
    console.log('Accessing the secure route');
    // modify this to send a secure.html file if desired.
    res.send('<h2>This is a sample secure route.</h2>');
  });

}

//logout route
app.get('/logout', function(req, res) {
	req.session.destroy();
	req.logout();
  passportConfig.reset(); //reset auth tokens
  res.redirect(config.uaaURL + '/logout?redirect=' + config.appURL);
});

// Predix config end


// Get our API routes
const api = require('./server/routes/api');
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
