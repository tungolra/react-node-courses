const { createReadStream, createWriteStream } = require("fs");
const readStream = createReadStream("../2-1/powder-day.mp4");
const writeStream = createWriteStream("./copy.mp4");

readStream.on("data", (chunk) => {
  // console.log('size: ', chunk.length);
  writeStream.write(chunk);
});

readStream.on("error", (error) => {
  console.log("an error occurred", error.message);
});

readStream.on("end", () => {
  // console.log("done!");
  // know when to stop writing
  writeStream.end();
});

writeStream.on("close", () => {
  // notify when the file has been copied
  process.stdout.write("file copied\n");
});
