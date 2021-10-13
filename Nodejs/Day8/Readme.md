npm init -> to initalize package.json
version -> 1.0.0 -> breaking change/Minor feature change/hot fix
npm i express -> install external node package
npm i --save-dev nodemon -> saves under devdependencies. This is used under development and not required in prod. Hence it is saved under devdependencies. nodemon is like life server which instantly shows the new changes

res.sendStatus() -> sends only send http status
res.status() -> sends status but we need res.send() or res.json() to return the response

In backend we need to take care of security, performance and edge cases

//res.send() is like return statement

different kind of url
handling dynamic values (query params => req.query, (dynamic url) params => req.params)

backend console.log gets printed on console where server is running
frontend console.log gets printed on broswer console

When we want to send some special character inside the query variable
encodeURIComponent('something&something') -> 'something%26something'

Middlewares
Middleware is a function which executes before the actual function to perform some specific task. We can execute as many function as we want.

next is a callback function which calls the function just after the given function. It checks that everything is on for main function to execute or not
next() doesn't acts like return so if have things after next then the execution will come back to execute that untill it find res.json() or res.send()
We use middleware in permission, authorization, login or to check if an user is authorized or not using bearer's token
app.get(
'/',
(req, res, next) => {
console.log(req);
console.log(res);
next();
},
(req, res) => {
res.json({ message: 'well done!!!' });
}
);

Browsers by default cache's all the get call for a particular url. So for first request we get 200 but after that if we query the same url then browser gives 304 as it picks up from the local cache
To save server issue

This is why we don't send passowrd and all in get call. We use post for these as it might lead to security threat as POST calls are not caches

In POST, we send body as either raw data in json format or form-data
we get post body data using req.body.
Express can't handle req.body in post directly as it comes in encrypted format. hence it can't be converted directly into objects.

For the express to work with post body which is encrypted, we use a middleware called body-parser(npm package).

//This handles form data(url encoded)
app.use(bodyParser.urlencoded({ extended: true }));
//body -> passowrd: "shahbaz"

//This handles raw json data
app.use(bodyParser.json());
// body -> {
// "state": true
// }

https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
Note: body-parser is deprecated below express 4.16

// Express v4.16.0 and higher
// --------------------------
const express = require('express');

app.use(express.json());
app.use(express.urlencoded({
extended: true
}));

// For Express version less than 4.16.0
// ------------------------------------
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
