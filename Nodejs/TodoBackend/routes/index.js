var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

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
