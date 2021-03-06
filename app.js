// require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require("method-override");
const session = require('express-session');

const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');
const usuariosRouter = require('./routes/usuarios');
const loginRouter = require('./routes/login');
const produtosRouter = require('./routes/produtos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({  
  secret: 's3cur3',
  resave: true, // a session deve ser salva em todas requisições ?
  saveUninitialized: false, // mesmo usuários anônimos devem ter sessão salva ?
  cookie: { maxAge: 30 * 60 * 1000, secure: true } //30min
}));


app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use('/usuarios', usuariosRouter);
app.use('/login', loginRouter);
app.use('/produtos', produtosRouter);


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

app.listen(3000, () => {
  console.log(`Server is running...`);
})

module.exports = app;
