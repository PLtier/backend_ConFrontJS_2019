const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// const sendMailRouter = require('./routes/api/sendMail');
const usersRouter = require('./routes/api/users');
const sendMailRouter = require('./routes/sendMail');
const loginRouter = require('./routes/logging/loginRouter');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

// server.use(
//     cors({
//       origin: [
//         `${process.env.FRONT_URL}`,
//         'http://localhost:3000',
//         'https://mypage.com',
//       ],
//       credentials: true
//     })
// );
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/users', usersRouter);
app.use('/sendmail', sendMailRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});


const db = require('./config/keys').mongoURI;
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('conntected'))
    .catch(err => console.log(err));
module.exports = app;
