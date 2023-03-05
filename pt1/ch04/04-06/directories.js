const fs = require('fs');

// fs.renameSync("./assets/logs", "accounts/logs")
// console.log("logs folder moved")

// fs.rmdir("./assets", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("assets folder removed");
//   }
// })

// remove files and directories
fs.readdirSync("./accounts").forEach((file) => {
    fs.renameSync(`./accounts/${file}`, `./library/${file}`)
})
console.log("files removed")
fs.rmdirSync("./accounts");
console.log("accounts folder removed");