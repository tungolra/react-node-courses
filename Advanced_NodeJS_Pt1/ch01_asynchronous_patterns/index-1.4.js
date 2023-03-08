// converts  a function that accepts a callback to a function that returns a promise
var { promisify } = require("util");
var fs = require("fs");

// var delay = (seconds, callback) => {
//   if (seconds > 3) {
//     callback(new Error(`${seconds} seconds it too long!`));
//   } else {
//     setTimeout(
//       () => callback(null, `the ${seconds} second delay is over.`),
//       seconds
//     );
//   }
// };

// // delay(2, (error, message) => {
// //     if (error) {
// //         console.log(error.message);
// //     } else {
// //         console.log(message);
// //     }
// // });

// var promiseDelay = promisify(delay);

// promiseDelay(3)
//   .then(console.log)
//   .catch((error) => console.log(`error: ${error.message}`));

var writeFile = promisify(fs.writeFile);

// don't need to use a callback bc writeFile returns a promise
writeFile("sample.txt", "this is a sample")
  .then(() => console.log("file created"))
  .catch((error) => console.log(error.message));
