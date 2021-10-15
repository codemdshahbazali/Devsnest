var express = require('express');
var router = express.Router();

const initialRegisterChecks = require('./../middleware/registerCheck');
const register = require('./../controllers/register');
const loginController = require('./../controllers/login');

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
router.post('/signup', initialRegisterChecks, register, function (req, res) {
  res.status(201).send(res.locals.savedUser);
});

/**
 * Log in an user
 */
router.post('/login', loginController, function (req, res, next) {
  res.status(201).send(res.locals.user);
});

module.exports = router;
