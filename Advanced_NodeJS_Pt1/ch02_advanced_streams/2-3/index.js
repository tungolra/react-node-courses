const fs = require("fs");

const readStream = fs.createReadStream("../2-1/powder-day.mp4");

// flowing stream
readStream.on("data", (chunk) => {
  console.log(`size\n ${chunk.length}`);
});

readStream.on("end", () => {
  console.log("finished reading");
});

readStream.on("error", (err) => {
  console.log(`an error has occurred: ${err}`);
});

// making flowing mode stream into non-flowing mode
readStream.pause();

// non-flowing stream
process.stdin.on("data", (chunk) => {
  //   var text = chunk.toString().trim();
  //   console.log(`echo: ${text}`);

  // can put non-flowing stream into flowing mode
  if (chunk.toString().trim().toLowerCase() === "finish") {
    readStream.resume();
  }
  readStream.read();
});
