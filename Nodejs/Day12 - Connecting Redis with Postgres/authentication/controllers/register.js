const User = require('../models/user');
// const User = require('../models/mongoModel');
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
    //checking for user if they already exist in the database
    const alreadyExist = await User.findOne({ where: { email } });
    if (alreadyExist) {
      return res.status(401).send('Email alraedy exists!!!');
    }

    //Password encryption
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      fullName,
      email: email.toLowerCase(),
      password: hash,
    });

    //Saving the user to the database
    const savedUser = await newUser.save();

    //sending the response back with the newly created user
    res.status(201).send(savedUser);
  } catch (e) {
    //Sending back response if something goes wrong server side
    console.error(e);
    res.status(500).send('Something went wrong');
  }
};

module.exports = register;
