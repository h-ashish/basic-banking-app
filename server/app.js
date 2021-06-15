var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require('mongoose');
var dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

//connecting to database

const DB = process.env.DATABASE;

mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(()=>{
  console.log("connection successful")
})
.catch((err)=>console.log("no connection"));


// var mongoConnUrl = 'mongodb://localhost/usersdb';
// mongoose.connect(mongoConnUrl,{useNewUrlParser: true, useUnifiedTopology: true})

// let db = mongoose.connection;

// //check connection
// db.once('open', function(){
//   console.log('connected to mongodb');
// })


// //check for db errors
// db.on('error', function(err){
//   console.log(err);
// })

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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
