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
function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log("starting delays");

// example of sequential execution with callbacks
// anti-pattern - callback hell
delay(2, () => {
  console.log("two seconds");
  delay(1, () => {
    console.log("three seconds");
    delay(1, () => {
      console.log("four seconds");
    });
  });
});
