// implement promise queue to run specify number of promises at the same time
// make concurrent task queue

// log-update will log console to the same place, overwriting previous log
import logUpdate from "log-update";
var toX = () => "X";

var delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

var tasks = [
  delay(4),
  delay(6),
  delay(4),
  delay(3),
  delay(5),
  delay(7),
  delay(9),
  delay(10),
  delay(3),
  delay(5),
];

class PromiseQueue {
  constructor(promises = [], concurrentCount = 1) {
    this.concurrent = concurrentCount;
    this.total = promises.length;
    this.todo = promises;
    this.running = [];
    this.complete = [];
  }
  get runAnother() {
    // must be less than concurrent and have todo tasks remaining
    return this.running.length < this.concurrent && this.todo.length;
  }

  graphTasks() {
    var { todo, running, complete } = this;
    logUpdate(`
    todo: [${todo.map(toX)}]
    running: [${running.map(toX)}]
    complete: [${complete.map(toX)}]
    `);
  }

  run() {
    while (this.runAnother) {
      // remove promise from todo and add to running
      var promise = this.todo.shift();
      promise.then(() => {
        // remove promise from running and add to complete
        this.complete.push(this.running.shift());
        this.graphTasks();
        // run it again
        this.run();
      });
      this.running.push(promise);
      this.graphTasks();
    }
  }
}

var delayQueue = new PromiseQueue(tasks, 2);

delayQueue.run();
