var Store = require("./Store");
var Shopper = require("./Shopper");
var Mall = require("./Mall");

// observer patterns concerned with the relationship between objects
var catsAndThings = new Store("Cats & Things");
var insAndOuts = new Store("Ins and Outs");

var alex = new Shopper("Alex");
var eve = new Shopper("Eve");
var sharon = new Shopper("Sharon");
var mike = new Shopper("Mike");

var valleyMall = new Mall();

//mall will listen to any sales attraction

catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(mike);
catsAndThings.subscribe(valleyMall);

insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

// all observers should be notified of these sales
catsAndThings.sale(20);
insAndOuts.sale(50);

console.log(valleyMall.sales);
