var express = require('express');
var router = express.Router();

/**
 * Registers an user
 */
router.post('/signup', function (req, res, next) {
  res.status(201).send('User is registered!!!');
});

/**
 * Log in an user
 */
router.post('/login', function (req, res, next) {
  res.status(201).send('Login Successful!!!');
});

module.exports = router;
