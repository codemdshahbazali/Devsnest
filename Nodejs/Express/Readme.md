Express - Nodejs framework for building server side application 

Create package.json
Install Express - npm i express

Create a serve file -> server.js

Express initialize 
Server start

Rest - Http methods

GET - Read
POST - Create
PUT - Update
DELETE - Delete

Status Codes
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Response
send - most generic method 
json - used for sending json response 

sendStatus
    res.sendStatus(200); // equivalent to res.status(200).send('OK') 
    res.sendStatus(403); // equivalent to res.status(403).send('Forbidden') 
    res.sendStatus(404); // equivalent to res.status(404).send('Not Found') 
    res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')

Client data pass to server
    queryString 
    Params

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

Route and Middleware
