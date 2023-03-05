const fs = require("fs");

if (fs.existsSync("your-files-here")) {
  console.log("Directory already there");
} else {
  fs.mkdir("your-files-here", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Directory created");
    }
  });
}
