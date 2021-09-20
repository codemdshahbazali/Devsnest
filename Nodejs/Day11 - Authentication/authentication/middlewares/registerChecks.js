const { emailValidate, passwordValidate } = require('./../utils/validate');

/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 *
 * * level 1
 * email validation
 * password validation
 * password === confirm passowrd
 */
const regsiterInitialChecks = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;

  if (
    typeof email === 'string' &&
    typeof password === 'string' &&
    typeof confirmPassword === 'string' &&
    email.length > 0 &&
    password.length > 8 &&
    confirmPassword === password &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else {
    res.status(401).send('Email and password validation failed !!!');
  }
};

module.exports = regsiterInitialChecks;
