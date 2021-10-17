const User = require('./../models/User');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const loginController = async (req, res, next) => {
  try {
    //Fetching email and password
    const { email, password } = req.body;

    //Fetching registered user
    let user = await User.findAll({
      where: {
        email: email.toLowerCase(),
      },
    });

    //Checking if user exists using email
    if (user.length > 0) {
      user = Array.from(user)[0].dataValues;
    } else {
      throw new Error('Email not found');
    }

    //Verifying password
    if (bcrypt.compareSync(password, user.password)) {
      //Generating JWT token
      const token = jwt.sign(user, 'secret', { expiresIn: '1h' });
      res.locals.token = token;
      next();
    } else {
      return res.status(400).send('Incorrect Password');
    }
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

module.exports = loginController;
