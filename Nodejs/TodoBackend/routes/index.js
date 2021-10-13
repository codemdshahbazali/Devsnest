var express = require('express');
var router = express.Router();

const initialRegisterChecks = require('./../middleware/registerCheck');

/**
 * Registers an user
 *
 * Step 1 - Initial Check
 *   email, password and confirm password -> string
 *   email and password lenght -> 8 char
 *   validate email and passowrd
 *  Step 2 - Sql Injection
 *  Step 3 - Register User
 */
router.post('/signup', initialRegisterChecks, function (req, res, next) {
  res.status(201).send(req.body);
});

/**
 * Log in an user
 */
router.post('/login', function (req, res, next) {
  res.status(201).send('Login Successful!!!');
});

module.exports = router;
