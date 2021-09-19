const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT | 5000;

//handles post body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//this gives the path of current directory in which this file is stored
//console.log(__dirname);
//this gives the path of uptill the current file
//console.log(__filename);

app.get('/', (req, res) => {
  res.send('Server is working fine');
});

app.get('/file', (req, res) => {
  //Below won't work as it sends the relative path. sendFile expects absolute file path
  //( path must be absolute or specify root to res.sendFile)
  //res.sendFile('./public/hello.txt');
  //Below works
  //res.sendFile(__dirname + '/public/hello.txt');
  //Better way is to use path module to concat paths
  //   res.sendFile(path.join(__dirname, 'public/hello.txt'));
  //sending a json
  //res.sendFile(path.join(__dirname, 'public/data.json'));
  //sending image
  res.sendFile(path.join(__dirname, 'public/lion.jpg'));
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'public/data.json'));
});

app.post('/', (req, res) => {
  res.send(req.body);
});

//set the viewing engine path
app.set('views', path.join(__dirname, 'views'));
//sets the viewing engine to jade
app.set('view engine', 'jade');

app.get('/html', (req, res) => {
  res.render('index', { title: 'Express' });
});

app.get('/cookie', (req, res) => {
  res
    .status(201)
    .cookie('cookie1', 'value1', {
      expire: new Date(Date.now() + 8 * 3600000),
    })
    .cookie('cookie2', 'value2')
    .redirect(301, '/html');
});

app.listen(PORT, () => {
  console.log(`Server has started at port ${PORT}`);
});
