var express = require('express');
var router = express.Router();

const { initialRegisterChecks, loginChecks } = require('../middleware/check');
const register = require('./../controllers/register');
const loginController = require('./../controllers/login');

/**
 * @swagger
 * /signup:
 *  post:
 *    description: Register an user
 *    responses:
 *      '400':
 *         description: Invalid Email
 *      '201':
 *          description: Logged In
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: fullName
 *        in: formData
 *        required: true
 *        type: string
 *      - name: email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        in: formData
 *        required: true
 *        type: string
 *      - name: confirmPassword
 *        in: formData
 *        required: true
 *        type: string
 */

/**
 *  * Registers an user
 *
 * Step 1 - Initial Check
 *   email, password and confirm password -> string
 *   email and password length -> 8 char
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

/**
 * @swagger
 * /login:
 *  post:
 *    description: Login an user
 *    responses:
 *      '400':
 *         description: Invalid Email
 *      '201':
 *          description: Logged In
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        in: formData
 *        required: true
 *        type: string
 */

router.post('/login', loginChecks, loginController, function (req, res, next) {
  res.status(201).send({ token: res.locals.token });
});

module.exports = router;
