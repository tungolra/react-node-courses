class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      // only creates one instance whenever instantiating Singleton class
      Singleton.instance = new Logger();
    }
  }
  // return logger to any class that wants to use it; without chaining it to each 
  // class that uses it, it will only run on the main app 
  getInstance() {
    return Singleton.instance;
  }
}

module.exports = Singleton;
