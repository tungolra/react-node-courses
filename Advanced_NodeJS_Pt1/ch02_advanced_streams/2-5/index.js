const { createReadStream, createWriteStream } = require("fs");
// const readStream = createReadStream("../2-1/powder-day.mp4");
// const writeStream = createWriteStream("./copy.mp4")
const writeStream = createWriteStream("./file.txt")

// use pop method to deal with backpressure 
// readStream.pipe(writeStream).on('error', console.error)


// can pipe from stdin to a file
process.stdin.pipe(writeStream)

// use unix pipe to pipe data
// command: echo "hello world" | node .