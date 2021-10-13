const express = require('express');
const app = express();

const checkLogin = (req, res, next) => {
  if (req.query.admin === 'true') {
    next();
  } else {
    //if we don't put an else statement here, then if the condtion is true then using next statement the control
    //will go to main function, execute it and then again come back and try to execute the below line
    //This is so because next is not treated as return or final statement hence it comes back and tries to execute whatever
    //is after it. The below is not permiited as we can have only one res.send()
    res.status(401).send('Unauthorized, User should be admin.');
  }
  //This will always be executed
  console.log("I'm here");
};

//app.use() applies the middleware to all the paths
//Sequence of app.use() matters, it should be before app the routes else it will not be applied
app.use(checkLogin);

app.get('/', (req, res) => {
  res.send('This is magic');
});

app.get(
  '/middleware',
  (req, res, next) => {
    console.log(req.headers);
    next();
  },
  (req, res) => {
    res.send('This is magic');
  }
);

//middleware runs behind the main function to check a particular function
app.get(
  '/login',
  (req, res, next) => {
    if (req.query.admin !== 'true') {
      res.status(401).send('Unauthorized, User should be admin.');
    } else {
      next();
    }
  },
  (req, res) => {
    res.send('You are logged In');
  }
);

//This will not work without decrypting body using middlewares.
//For this we use express.urlencoded({ extended: true }) and express.json() for decoding it
app.use(express.urlencoded({ extended: true })); //handles when we send form data
app.use(express.json()); //handles when we send json data

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(201).send(req.body);
});

app.listen(5000, () => {
  console.log('Server started a port 5000...');
});
