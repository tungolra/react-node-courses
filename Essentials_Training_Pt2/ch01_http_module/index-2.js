// building a page scraper using GET method

const https = require("https");
const fs = require("fs");

const url = "https://en.wikipedia.org/wiki/George_Washington";

const request = https.get(url, (res) => {
  let download = fs.createWriteStream("george-washington2.html");
  console.log("Downloading file...");
  //pipe the response to the file
  res.pipe(download);

  res.on("end", () => {
    console.log("Download complete");
  });
});

request.end();
