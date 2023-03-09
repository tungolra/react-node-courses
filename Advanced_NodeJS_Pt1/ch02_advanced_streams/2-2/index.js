const { Readable } = require("stream");

const peaks = [
  "Tallac",
  "Ralston",
  "Rubicon",
  "Twin Peaks",
  "Castle Peak",
  "Rose",
  "Freel Peak",
];

// Create a new class that extends the Readable class
// readable sends binary data to the consumer
class StreamFromArray extends Readable {
  // read one line of the array and then pass it on
  constructor(array) {
    // invoke readable stream
    // encode it using utf8 in super
    // super({ encoding: "utf8" });
    // objectmode is a readable stream that sends objects
    super({ objectMode: true });
    this.array = array;
    this.index = 0;
  }
  // push chunks of data into the stream
  _read() {
    // if there is no more data left in the array, push null
    if (this.index <= this.array.length) {
      const chunk = {
        data: this.array[this.index],
        index: this.index,
      };
      this.push(chunk);
      this.index += 1;
    } else {
      this.push(null);
    }
  }
}

const peakStream = new StreamFromArray(peaks);

peakStream.on("data", (chunk) => console.log(chunk));

peakStream.on("end", () => console.log("Done!"));
