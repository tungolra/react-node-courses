const { createReadStream, createWriteStream, read } = require("fs");
const readStream = createReadStream("../2-1/powder-day.mp4");
const writeStream = createWriteStream("./copy.mp4", {
  highWaterMark: 16384346, // bits for highWaterMark
});

// decide when to use highWaterMark depending on the size of the file

readStream.on("data", (chunk) => {
  // console.log('size: ', chunk.length);
  // let us know if there's backpressure on the write stream
  const result = writeStream.write(chunk);
  if (!result) {
    console.log("backpressure");
    readStream.pause();
  }
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

// when the write stream is ready to receive more data, resume readstream
writeStream.on("drain", () => {
  console.log("drained");
  readStream.resume();
});

writeStream.on("close", () => {
  // notify when the file has been copied
  process.stdout.write("file copied\n");
});
