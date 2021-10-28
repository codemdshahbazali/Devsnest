// const fs = require('fs');
// const passport = require('passport');
// const path = require('path');
const User = require('./../models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

/**
 * @description This object is has all the possible options which we can use.
 */
// const passportJWTOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: fs.readFileSync(
//     path.join(__dirname, '../config/jwt_secret.txt')
//   ),
//   issuer: 'TodoBackendPassportJWT',
//   audience: 'TodoBackendPassportJWT',
//   algorithms: ['HS256'],
//   ingoreExpiration: false,
//   passReqToCallback: false,
//   jsonWebTokenOptions: {
//     complete: false,
//     clockTolerance: '',
//     maxAge: '2d',
//     clockTimestamp: '100',
//     nonce: 'string here for OpenID',
//   },
// };

// This is used inside the verify callback of jwt strategy
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_SECRET,
};

/**
 * @description This is the strategy which will be used to authenticate the user.
 * This verifies the token and if it is valid, it gives jwt_payload(contains the user data) and done callback.
 */
const strategy = new JwtStrategy(options, (jwt_payload, done) => {
  User.findOne({ where: { id: jwt_payload.id } })
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch((err) => {
      return done(err, false);
    });
});

// When we call passport.authenticate('jwt', options), it will call this function
module.exports = (passport) => {
  //This will configure the strategy
  passport.use(strategy);
};
