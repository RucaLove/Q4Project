var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const index = require('./routes/index')
const poses = require('./routes/poses');
const yoga = require('./routes/yoga');
const ayurveda = require('./routes/ayurveda');
const academy = require('./routes/academy');
const contact = require('./routes/contact');
const dosha = require('./routes/dosha');
const schedule = require('./routes/schedule');
const store = require('./routes/store');
const token = require('./routes/token');
const users = require('./routes/users');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.use('/', index)
app.use('/users', users);
app.use('/poses', poses);
app.use('/yoga', yoga);
app.use('/ayurveda', ayurveda);
app.use('/academy', academy);
app.use('/contact', contact);
app.use('/dosha', dosha);
app.use('/schedule', schedule);
app.use('/store', store);
app.use('/token', token);

app.use('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
