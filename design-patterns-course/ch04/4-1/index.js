var Store = require('./Store');
var inventory = require('./inventory');

var skiShop = new Store('Steep and Deep', inventory.floor);

var searchItem = 'ski hats';

//improve find method to look through entire catalog
var results = skiShop.find(searchItem);

console.log( results );
