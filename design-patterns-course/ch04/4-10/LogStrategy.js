var path = require("path");
var { appendFile } = require("fs");
var morse = require("morse");

class LogStrategy {
  // save static methods to this class
  // each strategy need to receive payload of data - the info to be logged

  static toMorseCode(timestamp, message) {
    var morseCode = morse.encode(message);
    console.log(morseCode);
  }

  static noDate(timestamp, message) {
    console.log(message);
  }

  static toFile(timestamp, message) {
    var fileName = path.join(__dirname, "logs.txt");
    appendFile(fileName, `${timestamp} - ${message}\n`, (err) => {
      if (err) {
        console.log("Error writing to file");
        console.log(err);
      }
    });
  }

  static toConsole(timestamp, message) {
    console.log(`${timestamp} - ${message}`);
  }

  static none(timestamp, message) {}
}

module.exports = LogStrategy;
