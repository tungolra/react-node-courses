class FS_Proxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }
  // override readFile method
  readFile(path, format, callback) {
    // if no .md extension, return callback with error
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("Can only read Markdown files."));
    }

    // otherwise, call fs.readFile
    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.error(error);
        return callback(error);
      }

      return callback(null, contents);
    });
  }
  // in practice, write functions that overrides fs methods
  // writeFile (){

  // }
  // appendFile() {

  // }
}

module.exports = FS_Proxy;
