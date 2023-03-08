var fs = require("fs");
var { promisify } = require("util");

var beep = () => process.stdout.write("\x07");

var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);

var delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });
/*  callback hell problem - start */

// const doStuffSequentially = () => {
//   console.log("starting");
//   setTimeout(() => {
//     console.log("waiting");
//     setTimeout(() => {
//       console.log("waiting some more");
//       fs.writeFile("file.txt", "Sample File...", (error) => {
//         if (error) {
//           console.error(error);
//         } else {
//           beep();
//           console.log("file.txt created");
//           setTimeout(() => {
//             beep();
//             fs.unlink("file.txt", (error) => {
//               if (error) {
//                 console.error(error);
//               } else {
//                 console.log("file.txt removed");
//                 console.log("sequential execution complete");
//               }
//             });
//           }, 3000);
//         }
//       });
//     }, 2000);
//   }, 1000);
// };

// doStuffSequentially()

/*  callback hell problem - end */

/* fixes the callback hell problem using chaining - start */
// const doStuffSequentially = () =>
//   Promise.resolve()
//     .then(() => console.log("starting"))
//     .then(() => delay(1))
//     .then(() => "waiting")
//     .then(console.log)
//     .then(() => delay(2))
//     .then(() => writeFile("file.txt", "Sample File..."))
//     .then(beep)
//     .then(() => "file.txt created")
//     .then(console.log)
//     .then(() => delay(3))
//     .then(() => unlink("file.txt"))
//     .then(beep)
//     .then(() => "file.txt removed")
//     .then(console.log)
//     .catch(console.error);

// doStuffSequentially()
//   .then(() => console.log("again again!!!"))
//   .then(() => doStuffSequentially())
//   .then(() => console.log("enough already..."));

/* fixes the callback hell problem - end */

/* fixes the callback hell problem using async - start */
// const doStuffSequentially = async () => {
//   console.log("starting");
//   await delay(1);
//   console.log("waiting");
//   await delay(2);
//   try {
//     await writeFile("file.txt", "Sample File...");
//     beep();
//   } catch (error) {
//     console.error(error);
//   }
//   console.log("file.txt created");
//   await delay(3);
//   await unlink("file.txt");
//   beep();
//   console.log("file.txt removed");

//   // has to return a promise
//   return Promise.resolve();
// };

// doStuffSequentially();

/* fixes the callback hell problem using async - end */

/*  obtaining data from async function - start */

async function start() {
  // read the files in the current directory
  var files = await readdir(__dirname);
  console.log(files);
}

start();

/*  obtaining data from async function - end */
