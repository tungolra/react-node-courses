// "file system" module
const fs = require("fs");

/* ch 4.1 */
// lets you read the contents of a directory
// fs.readdir("./", function (err, files) {
//   if (err) {
//     throw err;
//   }
//   console.log(files);
// });

// console.log("Reading Files...");

/* ch 4.2 */

fs.readFile("./readme.md", "utf8", (err, ipsum) => {
  if (err) {
    throw err;
  }
  console.log(ipsum);
});
console.log("Reading Files...");

// console.log(ipsum);
