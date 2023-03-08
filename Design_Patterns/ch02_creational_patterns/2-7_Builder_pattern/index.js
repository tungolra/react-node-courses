// Description: Builder Pattern - clearer to use this pattern when you have a lot of parameters

var PersonBuilder = require("./PersonBuilder");

// Employees
// var sue = new Person('Sue', true, true, 60);
// can also be written as:
var sue = new PersonBuilder("Sue").makeEmployee().makeManager(60).build();

// var bill = new Person('Bill', true, false, 20);
// can also be written as:
var bill = new PersonBuilder("Bill").makeEmployee().makePartTime().build();

// var phil = new Person('Phil', true, false);
// can also be written as:
var phil = new PersonBuilder("Phil").makeEmployee().build();

// Shoppers
// var charles = new Person("Charles", false, false, 0, 500, ["jeans", "sunglasses"]);
// can also be written as:
var charles = new PersonBuilder("Charles")
  .withMoney(500)
  .withList(["jeans", "sunglasses"])
  .build();

// var tabbitha = new Person("Tabbitha", false, false, 0, 1000);
var tabbitha = new PersonBuilder("Tabbitha").withMoney(1000).build();

console.log(charles.toString());
console.log(sue.toString());
