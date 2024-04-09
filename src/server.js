'use strict';

const express = require('express');
const authRouter = require('./auth/router.js');
const handleNotFound = require('./middleware/404.js');
const handelServerError = require('./middleware/500.js');


const app = express();

app.use(express.json());

const environment = process.env.NODE_ENV;
const testOrProduction = (environment === 'test' || environment === 'production');


// Process FORM input and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use('/api', authRouter);
app.use(handleNotFound);
app.use(handelServerError);


module.exports = {
  start: (port) =>
    app.listen(port, () => {
      console.log('Running on PORT', port);
    }),
  app,
};
