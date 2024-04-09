'use strict';

const express = require('express');
const { signUp, signIn } = require('./middleware/basic.js');

const router = express.Router();

router.post('/signup', signUp, async(req, res) => {
  
  res.send('Youve signed up').status(200);
});

router.post('/signin', signIn, async(req, res) => {
  
  res.send('Youve signed in').status(200);
});

module.exports = router;