// building a page scraper using request method

const https = require("https");
const fs = require("fs");

// specify the options for http request
const options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/George_Washington",
  method: "GET",
};

const request = https.request(options, (res) => {
  // container for data
  let responseBody = "";

  res.setEncoding("UTF-8");
  // called whenever data received
  res.on("data", (chunk) => {
    console.log("---chunk: ", chunk.length);
    // append data to responseBody
    responseBody += chunk;
  });
  // write to a file
  res.on("end", () => {
    //take data and populate into html page
    fs.writeFile("george-washington.html", responseBody, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Downloaded");
      }
    });
  });
});

request.end();
