// rename and move/remove files

const fs = require("fs");

// fs.renameSync("./lib/config.js", "./lib/project-config.js");

// console.log("File Renamed");

// fs.rename("./lib/notes.md", "./notes.md", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Notes.md moved successfully");
//     }
// })

// fs.unlinkSync("./lib/project-config.js");

fs.unlink("notes.md", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Notes.md removed successfully");
  }
});
