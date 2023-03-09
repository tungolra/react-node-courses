const { Duplex, PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("../2-1/powder-day.mp4");
const writeStream = createWriteStream("./copy.mp4");

// create Throttle type of Duplex stream
class Throttle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }

  // write one chunk at a time and delay it 
  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }

  _read(){}

  //indicates no more data in read stream
  _final() {
    this.push(null);
  }
}

const report = new PassThrough();
const throttle = new Throttle(100);

var total = 0;
report.on("data", (chunk) => {
  total += chunk.length;
  console.log("bytes: ", total);
});

// duplex streams can be piped between a readable and a writeable stream
// report how many bytes are passing through duplex stream
readStream.pipe(throttle).pipe(report).pipe(writeStream);
