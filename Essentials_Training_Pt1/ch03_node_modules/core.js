const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(path.basename(__filename));

// this creates a path to the uploads folder
const dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(dirUploads);

// gives and time of when logging was done
util.log(path.basename(__filename));

// gives the memory usage of the process
util.log(v8.getHeapStatistics());
