const express = require('express'); // passes the function defination
const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello World !!!');
});

app.get('/status', (req, res) => {
  res.status(200).send('Hello World !!!');
  // res.status(400).send('Hello World !!!'); //400 Bad Request - The request cannot be fulfilled due to bad syntax.
  // res.status(500).send('Hello World !!!'); //500 Internal Server error - A generic error message, given when no more specific message is suitable.
});

// app.get('/promise').then((req, res) => {
//   res.send('Hello Promise !!!');
// }); - not possible, promise not supported. (TypeError: Cannot read property 'then' of undefined)

//query paramter
//end ponint example http://localhost:5000/query?name=shahbaz&title=ali
app.get('/query', (req, res) => {
  res.send(req.query);
});

//param
//end ponint example http://localhost:5000/query?name=shahbaz&title=ali
//always start with / when providing path
app.get('/params/user/:userId/book/:bookId', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

//runs the server
app.listen(5000, () => {
  console.log(`Server is running at port ${PORT}...`);
});
