const fs = require('fs');
const program = require('commander');

program.command('mkdir <dirname>').action((dir) => {
  fs.mkdir(dir, (err) => {
    if (err) throw err;
    console.log(`${dir} dir created !!!`);
  });
});

program.command('mkfile <path> <content>').action((path, content) => {
  fs.writeFile(path, content, (err) => {
    if (err) throw err;
    console.log(`Written text inside ${path}`);
  });
});

program.command('move <oldPath> <newPath>').action((oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) throw err;
    console.log(`File renamed!!!`);
  });
});

program.command('appendFile <path> <data>').action((path, data) => {
  fs.appendFile(path, data, (err) => {
    if (err) throw err;
    console.log(`Text "${data}" appeneded to ${path}`);
  });
});

program.command('deleteFile <path>').action((path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
    console.log(`File deleted in the following path ${path}`);
  });
});

program.command('deleteDir <dirPath>').action((dirPath) => {
  fs.rmdir(dirPath, (err) => {
    if (err) throw err;
    console.log(`Directory deleted ${dirPath}`);
  });
});

program.command('read <path>').action((path) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(data);
  });
});

program.parse(process.argv);
