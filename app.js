const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const healthcheck = require('./src/routes/healthcheck');
const registerRouter = require('./src/routes/register');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1/healthcheck', healthcheck);
app.use('/v1/register', registerRouter);

module.exports = app;
