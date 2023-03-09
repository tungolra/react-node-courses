const { createServer } = require("http");
// stat will give us information about the file
const { stat, createReadStream, createWriteStream } = require("fs");
const { promisify } = require("util");

// multiparty to parse data
const multiparty = require("multiparty");

// use rangeRequests to be compatible with safari; need to parse range header to get start and end bytes
const fileName = "../../ch02_advanced_streams/2-1/powder-day.mp4";
const fileInfo = promisify(stat);

const respondWithVideo = async (req, res) => {
  const { size } = await fileInfo(fileName);
  const range = req.headers.range;

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
};
createServer((req, res) => {
  // handle video upload
  if (req.method === "POST") {
    // since req is a readable stream, we can pipe it to a writable stream
    // req.pipe(res);
    // // can also fork stream
    // req.pipe(process.stdout);
    // // can also pipe to a file
    // req.pipe(createWriteStream("uploaded-file.mp4"));

    // use multiparty to parse data
    let form = new multiparty.Form();
    // as multiparty parses data, it will emit a part event for each part of the data
    form.on("part", (part) => {
      // since part is a readable stream, we'll upload it
      part.pipe(createWriteStream(`./${part.filename}`)).on("close", () => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>File uploaded: ${part.filename}</h1>`);
      });
    });
    form.parse(req);
  } else if (req.url === "/video") {
    respondWithVideo(req, res);
  } else {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    // data will be encoded as multipart forma data required to upload files
    res.end(` 
      <form enctype="multipart/form-data" action="/" method="POST">
        <input type="file" name="upload-file" />
        <button>Upload File</button>
      </form>
    `);
  }
}).listen(3000, () => console.log("server listening on port 3000"));
