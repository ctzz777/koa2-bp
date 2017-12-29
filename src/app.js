const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const session = require('koa-session');
const logger = require('koa-logger');
const path = require('path');
const mongoose = require('./models/index');
const passport = require('./utils/passport');
const router = require('./routes/index');
const config = require('./config/config');
const errorMiddleware = require('./middlewares/error');
const app = new Koa();
const staticPath = './public';

app.keys = [config.sessionKey];
app.use(logger());
app.use(static(path.join(__dirname, staticPath)));
app.use(bodyParser());
app.use(session({}, app));
app.use(errorMiddleware.handleError());
app.use(passport.initialize());
app.use(passport.session());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001);