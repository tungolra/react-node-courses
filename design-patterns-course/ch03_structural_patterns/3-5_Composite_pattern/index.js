var CatalogItem = require("./CatalogItem");
var CatalogGroup = require("./CatalogGroup");

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_shoes = new CatalogGroup("Shoes and Such", [
  boots,
  sneakers,
  flipFlops,
]);

// bc we are treating group and item uniformly, we can create tree structure

var group_food = new CatalogGroup("Food for while you try on clothes", [
  new CatalogItem("Milkshake", 5.99),
  new CatalogItem("French Fries", 3.99),
]);

var keychain = new CatalogItem("Key Chain", 0.99);

// console.log("boots total: ", `$${boots.total}`);
// console.log("shoes total: ", `$${group_shoes.total}`);

// boots.print();
// sneakers.print();

// group_shoes.print();

// print catalogue
var catalog = new CatalogGroup("Clothes and Food", [
  keychain,
  group_shoes,
  group_food,
]);

console.log(`$${catalog.total}`);

catalog.print();
