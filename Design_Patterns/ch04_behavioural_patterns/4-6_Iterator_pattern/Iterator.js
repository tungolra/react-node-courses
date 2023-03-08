class Iterator {
  constructor(items = []) {
    //save index to handle mechanics of iteration
    this.index = 0;
    this.items = items;
  }

  first() {
    var [first] = this.items;
    return first;
  }

  last() {
    // create copy of array and reverse it
    var [last] = [...this.items].reverse();
    return last;
  }

  hasNext() {
    // check if there is a next item based on location of next index
    return this.index < this.items.length - 1;
  }

  current() {
    return this.items[this.index];
  }

  next() {
    if (this.hasNext()) {
      this.index++;
    }
    return this.current();
  }

  prev() {
    if (this.index !== 0) {
      this.index--;
    }
    return this.current();
  }
}

module.exports = Iterator;
