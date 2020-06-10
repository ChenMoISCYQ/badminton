var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//引入ejs 
var ejs = require('ejs')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var cors = require('cors');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// 设置html引擎
app.engine('.html',ejs.__express)
app.set('view engine', 'html');

//解决跨域问题
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
})
// app.all("*", function(req, res, next) {
//   if (!req.get("Origin")) return next();
//   // use "*" here to accept any origin
//   res.set("Access-Control-Allow-Origin","*");
//   res.set("Access-Control-Allow-Methods", "GET");
//   res.set("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
//   // res.set('Access-Control-Allow-Max-Age', 3600);
//   if ("OPTIONS" === req.method) return res.sendStatus(200);
//   next();
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
