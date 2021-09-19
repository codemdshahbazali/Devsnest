const fs = require('fs');
const program = require('commander');

program.command('mkdir <dirname>').action((dir) => {
  try {
    fs.mkdirSync(dir);
    console.log(`${dir} dir created !!!`);
  } catch (e) {
    console.log(e.message);
  }
});

program.command('mkfile <path> <content>').action((path, content) => {
  try {
    fs.writeFileSync(path, content);
    console.log(`Written text inside ${path}`);
  } catch (e) {
    console.log(e.message);
  }
});

program.command('move <oldPath> <newPath>').action((oldPath, newPath) => {
  try {
    fs.renameSync(oldPath, newPath);
    console.log(`File renamed!!!`);
  } catch (e) {
    console.log(e.message);
  }
});

program.command('appendFile <path> <data>').action((path, data) => {
  try {
    fs.appendFileSync(path, data);
    console.log(`Text "${data}" appeneded to ${path}`);
  } catch (e) {
    console.log(e.message);
  }
});

program.command('deleteFile <path>').action((path) => {
  try {
    fs.unlinkSync(path);
    console.log(`File deleted in the following path ${path}`);
  } catch (e) {
    console.log(e.message);
  }
});

program.command('deleteDir <dirPath>').action((dirPath) => {
  try {
    fs.rmdirSync(dirPath);
    console.log(`Directory deleted ${dirPath}`);
  } catch (e) {
    console.log(e.message);
  }
});

program.command('read <path>').action((path) => {
  try {
    const text = fs.readFileSync(path, 'utf-8');
    console.log(text);
  } catch (e) {
    console.log(e.message);
  }
});

program.parse(process.argv);
