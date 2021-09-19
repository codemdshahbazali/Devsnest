THA: Send different files with query

//this gives the path of current directory in which this file is stored
console.log(\_\_dirname);

//content type when we send a .txt file
Content-Type: "text/plain; charset=UTF-8"

Sending files
//Below won't work as it sends the relative path. sendFile expects absolute file path
//( path must be absolute or specify root to res.sendFile)
//res.sendFile('./public/hello.txt', 'test.txt');
//Below works
//res.sendFile(**dirname + '/public/hello.txt', 'test.txt');
//Better way is to use path module to concat paths
res.sendFile(path.join(**dirname, 'public/hello.txt'), 'test.txt');

res.sendFile() function automatically sends the response content type header to the browser
and helps the browser to render all the renderable files

//content type when we send a .json file
Content-Type: "application/json; charset=UTF-8"

for file download
res.download(filePath) is used

//extra header sent by server when we try to download a file(if it's a json file then below content type is applicable)
Content-Disposition: attachment; filename="data.json"
Content-Type: application/json; charset=UTF-8

//Content type for image
Content-Type: image/jpeg

jade is a templating engine for HTML
jade is renames to pug, there is ejs available too
//set the viewing engine path
app.set('views', path.join(\_\_dirname, 'views'));
//sets the viewing engine to jade
app.set('view engine', 'jade');

Jade - indentation matters
semicolon is not allowed

h1=title -> directly use it
p Welcome to #{title} -> if inside a string then use it like #{variable name}

templating engines also helps to modularize code by giving extedns functionality
extends layout

templating engines are used for sending dynamically generated files at server side (SSR)

If you want to send react then just use sendFile(index.html)

//Used for sending dynamic files
res.render('index', { title: 'Express' });


//Setting Cookies
app.get('/cookie', (req, res) => {
  res
    .status(201)
    .cookie('cookie1', 'value1', {
      expire: new Date(Date.now() + 8 * 3600000),
    })
    .cookie('cookie2', 'value2')
    .redirect(301, '/html');
});

To generate a pre-build express template we use npx express-generator