'use strict';

const express = require('express');
const PORT = process.env.PORT || 3001
const signInRoute = require('./routes/signInRoute')
const signUpRoute = require('./routes/signUpRoute')
const notFoundError = require('./error-handler/404')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(signInRoute, signUpRoute)
app.use('*', notFoundError)

function start() {
  app.listen(PORT,() => console.log(`Listening on port ${PORT}`))
}

module.exports = { server: app, start}
