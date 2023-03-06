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

// class Singleton {

//   constructor() {
//       if (!Singleton.instance) {
//           Singleton.instance = new Logger();
//       }
//   }

//   getInstance() {
//       return Singleton.instance;
//   }

// }

// simply export the instance of a new Logger instead of using Singleton class
// just change imports in other files to require('./Logger')
module.exports = new Logger()
