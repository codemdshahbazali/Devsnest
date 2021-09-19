const fs = require('fs');

//creates a file synchronously
// try {
//   fs.mkdirSync('Day1');
// } catch (e) {
//   console.log('==>', e);
// }

// try {
//   fs.writeFileSync('Day1/hello.txt', 'Hello World!!!');
// } catch (e) {
//   console.log('error');
// }

// fs.writeFile('Day11/hello.txt', 'Hello World', (err) => {
//   if (err) throw err;
//   console.log('Write operation completed!!');
// });

// fs.appendFile('Day1/hello.txt', 'How are you all!!!', (err) => {
//   if (err) throw err;
//   console.log('Updated!');
// });
//

// fs.readFile('Day1/hello.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// }); // returns buffer obj as we have not passed encoding option

// fs.readFile('Day1/hello.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// }); //returns string as encoding has been passed

// fs.readFile('Day1/hello.txt').then((err, data) => {
//   if (err) throw err;
//   console.log(data);
// }); -> //throws error, says ERR_INVALID_CALLBACK, so we should use callbacks rather than promsie

//moves the file around folders
// fs.rename('Folder1/hello.txt', 'Day1/hello1.txt', (err) => {
//   if (err) throw err;
//   console.log('renamed');
// });

//renames
// fs.rename('Day1/hello1.txt', 'Day1/hello.txt', (err) => {
//   if (err) throw err;
//   console.log('renamed');
// });

//File deletion
// fs.unlink('Day5-01/hello.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted!!!');
// });

// //Folder deletion
// fs.rmdir('Day5-01', (err) => {
//   if (err) throw err;
//   console.log('File deleted!!!');
// });

console.log(process.argv[1]);
