var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.use(bodyParser.json())
var SubTypeRoute = require('./routes/SubTypeRouteConfig');
new SubTypeRoute(app);
var TypeRoute = require('./routes/TypeRouteConfig');
new TypeRoute(app);
var UserRoute = require('./routes/UserRouteConfig');
new UserRoute(app);
var CompanyInfoRoute = require('./routes/CompanyInfoRouteConfig');
new CompanyInfoRoute(app);
var PatientInfoRoute = require('./routes/PatientInfoRouteConfig');
new PatientInfoRoute(app);

app.set('port', process.env.PORT || 3900);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname + '/bower_components')));
app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log("err: ",err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
module.exports = app;
