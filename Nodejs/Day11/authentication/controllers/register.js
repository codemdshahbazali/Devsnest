const User = require('../models/user');
const bcrypt = require('bcrypt');

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * level 3
 * Check if email exists
 * Password hash(encode)
 * email lowercase
 * save
 */
const saltRounds = 10;
const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const alreadyExist = await User.findOne({ where: { email } });
    if (alreadyExist) {
      return res.status(401).send('Email alraedy exists!!!');
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      fullName,
      email: email.toLowerCase(),
      password: hash,
    });

    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (e) {
    console.error(e);
    res.status(500).send('Something went wrong');
  }
};

module.exports = register;
