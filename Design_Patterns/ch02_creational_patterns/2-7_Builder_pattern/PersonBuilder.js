var Person = require("./Person");

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }
  // every other modification of the person will come through methods

  makeEmployee() {
    this.isEmployee = true;
    // returning this allows us to chain methods on new instance
    return this;
  }

  makeManager(hours = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  makePartTime(hours = 20) {
    this.hours = hours;
    return this;
  }

  withMoney(money) {
    this.money = money;
    return this;
  }

  withList(list = []) {
    this.shoppingList = list;
    return this;
  }

  build() { 
    // return new instance of Person with all the properties of the builder
    return new Person(this);
  }
}

module.exports = PersonBuilder;
