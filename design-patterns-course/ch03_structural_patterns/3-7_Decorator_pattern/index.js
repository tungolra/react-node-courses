// implementing decorator pattern 

var Shopper = require("./Shopper");
var {
  InventoryItem,
  GoldenInvestoryItem,
  DiamondInventoryItem,
} = require("./InventoryItem");

var alex = new Shopper("Alex", 4000);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

// dynamically add gold property to necklace object
var gold_necklace = new GoldenInvestoryItem(necklace);
// dynamically add diamond property to gold necklace object
var diamond_gold_necklace = new DiamondInventoryItem(gold_necklace);

// dynamically add diamond property to walkman object
var diamond_walkman = new DiamondInventoryItem(walkman);

alex.purchase(diamond_gold_necklace);
alex.purchase(diamond_walkman);

alex.printStatus();

diamond_walkman.print();
