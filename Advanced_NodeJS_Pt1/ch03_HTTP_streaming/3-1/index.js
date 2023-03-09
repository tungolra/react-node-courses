const { createServer } = require("http");
// stat will give us information about the file
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");

// use rangeRequests to be compatible with safari; need to parse range header to get start and end bytes

const fileName = "../../ch02_advanced_streams/2-1/powder-day.mp4";
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(fileName);
  const range = req.headers.range;

  //   console.log("range: ", range);
  // output:
  //    range:  undefined
  //    range:  bytes=0-
  if (range) {
    // parse start and end ranges
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    // if there's an end value provided, use it, otherwise use the size of the file
    end = end ? parseInt(end, 10) : size - 1;
    // write responser header to respond to range request
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${size}`,
      // tell browser we're working with bytes
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": "video/mp4",
    });
    // create readstream that streams part of the file based on start and end point
    createReadStream(fileName, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      // tell browser how big the file is
      "Content-Length": size,
      // tell browser to use correct video component to handle stream coming from localhost 3000
      "Content-Type": "video/mp4",
    });
    createReadStream(fileName).pipe(res);
  }
}).listen(3000, () => console.log("server listening on port 3000"));
