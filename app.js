const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const healthcheck = require('./src/routes/healthcheck');
const registerRouter = require('./src/routes/register');
const loginRouter = require('./src/routes/login');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1/healthcheck', healthcheck);
app.use('/v1/register', registerRouter);
app.use('/v1/login', loginRouter);

module.exports = app;
