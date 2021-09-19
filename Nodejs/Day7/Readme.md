"express" for making a web server

npm init -> to initalize package.json
version -> 1.0.0 -> breaking change(Major version)/Normal feature change(Normal feature)/hot fix

npm --save express-> it install the package in dependencies
npm --save-dev nodemon-> it install the package in dev-dependencies. This is removed in production

npm i express -> install external node package
npm i --save-dev nodemon -> saves under devdependencies. This is used under development and not required in prod. Hence it is saved under devdependencies. nodemon is like life server which instantly shows the new changes

const express = require('express'); // passes the function defination
const app = express(); // call express function

With REST API we can POST, GET, PUT and DELETE

Used to perform get request
app.get('/', (req, res) => {
res.send('Hello World !!!');
});

Second argument is a callback function which accepts request and response objects
We send back response using res.send() method. We can send anything we want, object, array, string
Callback function is common for POST, GET, PUT and DELETE

we use res.json() for sending json

Using browser we can only see get request
//res.send() is like return statement

HTTP response status codes (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
Informational responses (100–199)
Successful responses (200–299)
Redirects (300–399)
Client errors (400–499)
Server errors (500–599)

While building APIs we should always take care of these things

- Security
- Performance
- Edge Cases

res.sendStatus() -> sends http status only and returns

//query paramter
//end ponint example http://localhost:5000/query?name=shahbaz&title=ali
//query is part of request object
// & is used to seperate two query param variable while sending request
//if the variable value contains a special character like say % or & then we use encodeURIComponent from browser console
// encodeURIComponent('md&shahbaz') => 'md%26shahbaz'
// To decode we use decodeURIComponent("md%26shahbaz") => 'md&shahbaz'
app.get('/query', (req, res) => {
res.send(req.query);
});

//param
//end ponint example http://localhost:5000/params/user/1/book/5
//always start with / when providing path
//used for database query
app.get('/params/user/:userId/book/:bookId', (req, res) => {
console.log(req.params);
res.send(req.params);
});

different kind of url
handling dynamic values (query params => req.query, (dynamic url) params => req.params)

backend console.log gets printed on console where server is running
frontend console.log gets printed on broswer console

THA: Setup MVC and express
