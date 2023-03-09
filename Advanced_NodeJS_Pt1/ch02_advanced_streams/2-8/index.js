const { Transform } = require("stream");

class ReplaceText extends Transform {
  constructor(char) {
    super();
    this.replaceChar = char;
  }

  // transform method is called for every chunk of data
  _transform(chunk, encoding, callback) {
    const transformChunk = chunk
      .toString()
      .replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar);

    this.push(transformChunk);
    callback();
  }

  // flush method is called when there is no more data to be processed
  _flush(callback) {
    this.push("More stuff is being passed...");
    callback();
  }
}

// replace all letters with x
var xStream = new ReplaceText("xX");

process.stdin.pipe(xStream).pipe(process.stdout);
