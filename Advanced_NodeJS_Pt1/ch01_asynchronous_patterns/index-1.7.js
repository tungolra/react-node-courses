var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

// returns a single promise invoked once all promises are resolved
// Promise.all([
//   writeFile("readme.md", "Hello World"),
//   writeFile("readme.txt", "Hello World"),
//   writeFile("readme.json", '{"hello": "world"}'),
// ])
// Promise.all([
//   unlink("readme.md", "Hello World"),
//   unlink("readme.txt", "Hello World"),
//   delay(3),
//   unlink("readme.json", '{"hello": "world"}'),
// ])
//   .then(() => readdir(__dirname))
//   .then(console.log);


Promise.race([
  delay(5),
  delay(2),
  delay(3),
  delay(5)
]).then(() => readdir(__dirname))
  .then(console.log);
