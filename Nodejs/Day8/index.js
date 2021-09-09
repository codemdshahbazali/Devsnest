const { response } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//CRUD -> POST, GET, PUT, DELETE
// const func = (req, res) => {
//   res.sendStatus(200);
//   res.send({ a: 1 });
// };

//we can send anything with response.send() like array, object, file, string
//To be more specific we use res.json() for sending json. res.send is very common hecne to be speciific we send res.json
//db update -> 201
//res.sendStatus(400); -> validation error from client side
//res.sendStatus(500) -> 500 series -> server side error
//res.json() is most commonly used
//In get we don't send body, we can send parameter variable(query params)
//?variableName1=value1&varName2=value2 -> we get this in request in query property as an object
//encodeURIComponent -> handles space and all and converts it to special character

// const func = (req, res) => {
//   //   res.sendStatus(200);
//   //   res.status(200).send({ a: 1 });
//   //   res.status(500).send('Database not connecting');
//   res.status(200).send('Hello world');
//   //   res.status(200).send(req.query.q);
//   //   res.status(200).send(req.query.q);
// };

// app.get('/', func);
//b optional
// app.get('/ab?cd', (req, res) => {
//   res.send('abcd');
// });
// //any number of b
// app.get('/ab+cd', (req, res) => {
//   res.send('abcd');
// });
// //any character after b and before c
// app.get('/ab*cd', (req, res) => {
//   res.send('abcd');
// });
// //making cd optional
// app.get('/ab(cd)?e', (req, res) => {
//   res.send('abcd');
// });
// //regex, anything that starts with a
// app.get(/a/, (req, res) => {
//   res.send('abcd');
// });
// //regex, anything that ends with fly
// app.get(/.*fly$/, (req, res) => {
//   res.send('abcd');
// });
//regex, anything that ends with fly (baseurl/user/1/books/2), we access this using req.params
//handling dynamic values (query params => req.query, params => req.params)
// app.get('/user/:userId/books/:bookId', (req, res) => {
//   res.send(req.params);
// });

// app.get('/about', (req, res) => {
//   res.send('Learn about me');
// });

// app.post('/', func);
// app.put('/', func);
// app.delete('/', func);

//Middlewares
// app.get(
//   '/',
//   (req, res, next) => {
//     console.log(req);
//     console.log(res);
//     next();
//   },
//   (req, res) => {
//     res.json({ message: 'well done!!!' });
//   }
// );

const sendResponse = (req, res) => {
  res.status(200).send('Authorized User');
};

const sendSecretMessage = (req, res) => {
  res.status(200).send('This is awesome');
};

const checkAuthorization = (req, res, next) => {
  if (req.query.auth === 'true') {
    next();
  } else {
    res.status(401).send('Unauthorized User');
  }
};

// Incorrect way -next() doesn't acts like return so if have things after next then the execution will come back to execute that untill it find res.json() or res.send()
// const checkAuthorization = (req, res, next) => {
//   if (req.query.auth === 'true') {
//     next();
//   }
//   res.status(401).send('Unauthorized User');
// };

// app.get('/', checkAuthorization, sendResponse);

// app.get('/secret', checkAuthorization, sendSecretMessage);

//Express provies us an function called app.use() which will automatically add middleware we want to add before each request
//Sequence of app.use() matters. It should be executed before all the app.get() methods. As invoking it after app.get will add it after app.get callback
// and next() will not be executed in correct order

// app.use(checkAuthorization);
app.get('/', sendResponse);
app.get('/secret', sendSecretMessage);

//This handles form data(url encoded)
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
//body -> passowrd: "shahbaz"
//This handles raw json data
// app.use(bodyParser.json());
app.use(express.json());
//  body -> {
//     "state": true
// }

app.post('/', (req, res) => {
  console.log('req.body->', req.body);
  res.json({ text: req.body });
});

app.listen(5000);
