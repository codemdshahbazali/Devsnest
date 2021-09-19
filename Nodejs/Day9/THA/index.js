const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT | 5000;

app.get('/', (req, res) => {
  res.send('Welcome to THA 9');
});

app.get('/image/img/:img', (req, res) => {
  console.log(req.params);
  res.sendFile(path.join(__dirname, `../public/${req.params.img}`));
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
