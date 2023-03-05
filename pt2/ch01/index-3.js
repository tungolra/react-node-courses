// build a web server

const { createServer } = require("http");

const server = createServer((req, res) => {
  // if OK, specify content type
  res.writeHead(200, { "Content-Type": "text/html" });
  // see all request methods
  // console.log("request details", req)

  res.end(
    `
    <!DOCTYPE html>
    <html>
        <body>
          <h1>Hello, World!</h1>
          <p>${req.method} request made for ${req.url}!</p>
        </body>
    </html>
    `
  );
}).listen(3000);

console.log("Server listening on port 3000");
