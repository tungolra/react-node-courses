const path = require("path");

/* ch 2.1 */
// console.log(__dirname);
// console.log(__filename);
// console.log(path.basename(__filename));

/* ch 2.2 */
// for (let key in global) {
//   console.log(key);
// }
// available globally :
// global
// queueMicrotask
// clearImmediate
// setImmediate
// structuredClone
// clearInterval
// clearTimeout
// setInterval
// setTimeout
// atob
// btoa
// performance
// fetch

// console.log(process.argv)
// => [
//   '/Users/rtungol/.nvm/versions/node/v18.14.2/bin/node',
//   '/Users/rtungol/Developer/Tutorials/node-essentials-course/ch02/global.js'
// ]

/* ch 2.3 */
// give position of index after flag --greeting
// function grab(flag) {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indexAfterFlag];
// }

// let greeting = grab("--greeting");
// let user = grab("--user");

// console.log(`Greeting: ${greeting} | User: ${user}`);

/* ch 2.4-5 */
//standard input and output give tools to interact with user
// process.stdout.write("Hello \n \n");
// const questions = [
//     "What is your name?",
//     "What would you rather be doing?",
//     "What is your preferred programming language?",
// ];
// const answers = [];

// function ask(i = 0) {
//   process.stdout.write(`\n\n ${questions[i]}`);
//   process.stdout.write(" > ");
// }

// ask();

// process.stdin.on("data", function (data) {
//   answers.push(data.toString().trim());
//   if (answers.length < questions.length) {
//     ask(answers.length);
//   } else {
//     process.exit();
//   }
// });

// process.on("exit", function () {
//   process.stdout.write(`\n\n\n\n`);
//   process.stdout.write(
//     `Go ${answers[1]}, ${answers[0]}, you can finish writing ${answers[2]} later`
//   );
// });

/* ch 2.6 */
//practicing asynchronous functions and using stdout to show progress
// const waitTime = 3000;
// console.log(`setting a ${waitTime / 1000} second delay`);

// const timerFinished = () => {
//   clearInterval(interval);
//   console.log("\ndone");
// };

// setTimeout(timerFinished, waitTime);

// const waitInterval = 500;
// let currentTime = 0;

// const incrementTime = () => {
//   currentTime += waitInterval;
//   const p = Math.floor((currentTime / waitTime) * 100);
//   process.stdout.clearLine();
//   process.stdout.cursorTo(0);
//   process.stdout.write(`waiting ... ${p}%`);
//   //   console.log(`waiting ${currentTime / 1000} seconds`);
// };

// const interval = setInterval(incrementTime, waitInterval);


