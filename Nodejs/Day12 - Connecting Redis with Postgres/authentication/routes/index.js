var express = require('express');
var router = express.Router();

const registerInitialChecks = require('./../middlewares/registerChecks');
const register = require('./../controllers/register');

/* GET home page. */
router.get('/', function (req, res, next) {
  const session = req.session;
  session.username = 'shahbaz';
  res.render('index', { title: 'Express' });
});

router.get('/test-redis', function (req, res, next) {
  console.log(req.session.username);
  res.render('index', { title: 'Express' });
});

/**
 * @requires{email. firstname, lastname, password, confirmPassword}
 * @description
 * Security, Performance and Edge Cases
 * level 1
 * email validation
 * password validation
 * password === confirm passowrd
 * level 2
 * JS/SQL injection - THA
 * level 3
 * Check if email exists
 * Password hash(encode)
 * email lowercase
 * save
 */
router.post('/register', registerInitialChecks, register);

module.exports = router;
