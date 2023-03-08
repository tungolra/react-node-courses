// function hideString(str, done) {
//   // process.nextTick() is a function that will execute the callback function after the current function has finished executing.
//   process.nextTick(() => {
//     done(str.replace(/[a-zA-Z]/g, "X"));
//   });
// }

// hideString("Hello World", (hidden) => {
//   console.log(hidden);
// });

// console.log("end");

// introduce asynchronous delay
// function delay(seconds, callback) {
//   setTimeout(callback, seconds * 1000);
// }

// console.log("starting delays");

// example of sequential execution with callbacks
// anti-pattern - callback hell
// delay(2, () => {
//   console.log("two seconds");
//   delay(1, () => {
//     console.log("three seconds");
//     delay(1, () => {
//       console.log("four seconds");
//     });
//   });
// });

var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    // setTimeout(resolves, seconds * 1000);

    // throw new Error("error");
    if (seconds > 3) {
      rejects(new Error(`${seconds} is too long!`));
    }

    setTimeout(() => {
      resolves("the long delay has ended");
    }, seconds * 1000);
  });

// delay(1).then(() => console.log("the delay has ended"));
// running delay returns a promise (resolves) which is then passed to the then method
// delay(1).then((msg) => console.log(msg));

// handles promise using chain of .then methods
delay(4)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello World: ${number}`))
  .catch((error) => console.log(`error: ${error.message}`));

console.log("end first tick");
