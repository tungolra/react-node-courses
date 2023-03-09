const { createServer } = require("http");
// stat will give us information about the file
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");

const fileName = "../../ch02_advanced_streams/2-1/powder-day.mp4";
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(fileName);
  res.writeHead(200, {
    // tell browser how big the file is
    "Content-Length": size,
    // tell browser to use correct video component to handle stream coming from localhost 3000
    "Content-Type": "video/mp4",
  });
  createReadStream(fileName).pipe(res);
}).listen(3000, () => console.log("server listening on port 3000"));
