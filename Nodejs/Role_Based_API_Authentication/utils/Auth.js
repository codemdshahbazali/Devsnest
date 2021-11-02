const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('./../config');
const passport = require('passport');

/**
 * @Desc To register the user (ADMIN, SUPER_ADMIN, USER)
 */
const userRegister = async (userDets, role, res) => {
  try {
    //Validate the Username
    let userNameTaken = await validateUserName(userDets.username);

    if (userNameTaken) {
      return res.status(400).json({
        message: 'Username is already taken.',
        success: false,
      });
    }

    //Validate the email
    let emailTaken = await validateEmail(userDets.email);

    if (emailTaken) {
      return res.status(400).json({
        message: 'Email is already registered.',
        success: false,
      });
    }

    //Hash the password
    const hashedPassword = await bcrypt.hash(userDets.password, 12);
    console.log(hashedPassword);

    //Create new user
    const newUser = new User({
      ...userDets,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    return res.status(201).json({
      message: 'Hurry! You are successfully registered.',
      success: true,
    });
  } catch (err) {
    //implement logger function (winston)
    return res.status(500).json({
      message: `Unable to create your account. ${err}`,
      success: false,
    });
  }
};

/**
 * @Desc To lpgin user as (ADMIN, SUPER_ADMIN, USER)
 */
const userLogin = async (userCreds, role, res) => {
  let { username, password } = userCreds;

  //First check if the username is in the database
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({
      message: 'Username is not found. Invalid login credentials.',
      success: false,
    });
  }

  //We will check the role
  if (user.role !== role) {
    return res.status(403).json({
      message: 'Please make sure you are logging in from the right portal.',
      success: false,
    });
  }

  //That means the user is existing and trying to signin from the right pprtal
  //Now check the password

  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    //Sign in the token and issue it to the user
    let token = jwt.sign(
      {
        user_id: user._id,
        role: user.role,
        username: user.username,
        email: user.email,
      },
      SECRET,
      {
        expiresIn: '20s',
      }
    );

    const result = {
      username: user.username,
      role: user.role,
      email: user.email,
      token,
      expiresIn: '20s',
    };

    return res.status(200).json({
      ...result,
      message: 'Hurray! You are logged in.',
      success: true,
    });
  } else {
    return res.status(403).json({
      message: 'Incorrect Password.',
      success: false,
    });
  }
};

const authenticateJWT = passport.authenticate('jwt', { session: false });

const checkRole = (roles) => (req, res, next) => {
  if (roles.includes(req.user.role)) {
    next();
  } else {
    return res.status(401).json({
      message: 'Unauthorized',
      succcess: false,
    });
  }
};

const serializeUser = (user) => {
  return {
    _id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

const validateUserName = async (username) => {
  const user = await User.findOne({ username });
  return user ? true : false;
};

const validateEmail = async (email) => {
  const user = await User.findOne({ email });
  return user ? true : false;
};

module.exports = {
  userRegister,
  userLogin,
  authenticateJWT,
  serializeUser,
  checkRole,
};
