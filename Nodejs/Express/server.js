const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const checkAdmin = require('./middleware/middleware');
const productRoute = require('./routes/product');

//Routes
//http://localhost:3000 -> /
app.get('/', (req, res) => {
  res.send({ message: 'Hello World !!!' });
  //res.json({ message: 'Hello World !!!' });
  // sendStatus();
  // res.sendStatus(401);
  // res.status(200).send('Shahbaz');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(checkAdmin);

app.use('/products', productRoute);

const products = [
  {
    id: 1,
    name: 'Laptop',
  },
  {
    id: 2,
    name: 'mobile Phones',
  },
];

const loginCredentials = {
  username: 'shahbaz',
  password: 'shahbaz',
};

// //Route && query parameters
// app.get('/products', (req, res) => {
//   if (req.query.admin === 'true') {
//     res.send({ products, queryParamter: req.query });
//   } else {
//     res.sendStatus(401);
//   }
// });
// //params
// app.get('/products/:id', (req, res) => {
//   const filteredProduct = products.filter(
//     (element) => element.id === Number(req.params.id)
//   );
//   res.send({ filteredProduct });
// });

//body
app.post('/', (req, res) => {
  if (
    loginCredentials.username === req.body.username &&
    loginCredentials.password === req.body.password
  ) {
    res.status(201).send({ message: 'You are logged in' });
  } else {
    res.sendStatus(401);
  }
  // res.status(201).send(req.body);
});

//send file
app.get('/file', (req, res) => {
  // res.sendFile(path.join(__dirname, 'file/notes.txt'));
  res.sendFile(path.join(__dirname, 'file/index.html'));
});

//download file
app.get('/download', (req, res) => {
  // res.sendFile(path.join(__dirname, 'file/notes.txt'));
  res.download(path.join(__dirname, 'file/notes.txt'));
});

// app.put('/', (req, res) => {
//   res.send('Hello World !!!');
// });

// app.delete('/', (req, res) => {
//   res.send('Hello World !!!');
// });

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
