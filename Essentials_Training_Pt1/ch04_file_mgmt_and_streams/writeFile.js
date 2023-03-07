const fs = require("fs");

let md = `
    This is a new file
    ==================

    ES6 Template String are cool. 

    * point 1
    * point 2
    * point 3
`;

fs.writeFile("newFile.md", md.trim(), (err) => {
  if (err) throw err;
  fs.appendFileSync("newFile.md", "\n\n###This is a new line")
  console.log("File Created");
});
