const fs = require('fs') -> it basically imports all the javascript written inside 'fs' module and puts it into fs variable
fs is file system. Gives us access to modify/access file system.

Normal Js which runs on the browser doesn't have access to the file system

fs.mkdirSync('Day1'); -> makes a folder synchronously. Use try catch in Sync mode to handle error.
fs.mkdir('Day1'); -> makes a folder asynchronously. Use try catch or callback function to handle error. If folder already exists then it throws error

fs.writeFileSync('Day1/hello.txt', 'Hello World'); -> //Error: ENOENT: no such file or directory. throws this error if path/folder doesn't exist. Overrides the existing string with new string

In async mode, callback function is always called once the operation is complete

fs.readFile('Day1/hello.txt', (err, data) => {
    if(err) throw err;
    console.log(data);
});

 readFile -> Fulfills upon a successful read with the contents of the file. If no encoding is specified (using options.encoding), the data is returned as a <Buffer> object. Otherwise, the data will be a string.

renames the file
 fs.rename('Day1/hello1.txt', 'Day1/hello2.txt', (err) => {
  if (err) throw err;
  console.log('renamed');
});  

move file using rename. Folder should exist
fs.rename('Day1/hello.txt', 'Folder1/hello.txt', (err) => {
  if (err) throw err;
  console.log('renamed');
});

For deletion first we have to delete the file inside a folder then delete the folder itself
for file deletion we use

//File deletion
fs.unlink('Day5-01/hello.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!!!');
});

//Folder deletion
fs.rmdir('Day5-01', (err) => {
  if (err) throw err;
  console.log('File deleted!!!');
});


we use module.exports to export a class, object, function in node.js
module.exports = functionName

we use require("path to module.exports file") to use that exported function

fs is an example of node core modules. So we don't need to install it using npm

THA - read from terminal and perform crud