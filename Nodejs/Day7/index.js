const express = require('express');
const app = express();

//CRUD -> POST, GET, PUT, DELETE
// const func = (req, res) => {
//   res.sendStatus(200);
//   res.send({ a: 1 });
// };

//we can send anything with response.send() like array, object, file, string
//To be more specific we use res.json() for sending json. res.send is very common hence to be speciific we send res.json
//db update -> 201
//res.sendStatus(400); -> validation error from client side
//res.sendStatus(500) -> 500 series -> server side error
//res.json() is most commonly used
//In get we don't send body, we can send parameter variable(query params)
//?variableName1=value1&varName2=value2 -> we get this in request in query property as an object
//encodeURIComponent -> handles space and all and converts it to special character

const func = (req, res) => {
  //   res.sendStatus(200);
  //   res.status(200).send({ a: 1 });
  //   res.status(500).send('Database not connecting');
  res.status(200).send('Hello world');
  //   res.status(200).send(req.query.q);
  //   res.status(200).send(req.query.q);
};

app.get('/', func);
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
app.get('/user/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});

// app.get('/about', (req, res) => {
//   res.send('Learn about me');
// });

// app.post('/', func);
// app.put('/', func);
// app.delete('/', func);

app.listen(5000, () => {
  console.log('Server started at port 5000!!!');
});
