// architecting zero downtime deployments

const http = require("http");
// give info of every processor avble on machine
const cpus = require("os").cpus();
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

// pooling forks
if (cluster.isMaster) {
  console.log("This is the master process: ", process.pid);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log("worker ", worker.process.pid, " has died");
    console.log(`only ${Object.keys(cluster.workers).length} left`);
    console.log("starting a new worker");
    // always have n workers running even after worker is killed
    cluster.fork();
  });
} else {
  //   console.log("This is a worker process: ", process.pid);
  console.log("started a worker at ", process.pid);
  http
    .createServer((req, res) => {
      //   const message = `worker ${process.pid} ...`;
      //   console.log(message);
      res.end(`process: ${process.pid}`);

      // kill worker process (not typically used for production)
      if (req.url === "/kill") {
        process.exit();
      } else if (req.url === "/") {
        console.log(`serving form ${process.pid}...`);
      } else {
        console.log("working on request ", process.pid);
      }
    })
    .listen(3000);
}
