const express = require('express');
const cors = require('cors');
const { success, error } = require('consola');
const { connect } = require('mongoose');
var logger = require('morgan');
const passport = require('passport');

//Bring in the app constants
const { DB, PORT } = require('./config');

//Inialize the application
const app = express();

//Pass the global passport object into the configuration function
require('./middlewares/passport')(passport);

// This will initialize the passport object on every request
app.use(passport.initialize());

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/users'));

//Connection with the DB
connect(DB, {
  useNewUrlParser: true,
})
  .then(() => {
    success({
      message: `Successfully connected with the Database \n ${DB}`,
      badge: true,
    });
    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
  })
  .catch((err) =>
    error({ message: `Unable to connect to the database \n ${err}` })
  );
