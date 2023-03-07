// decorates can have more functionality than base class; doesn't have to have the same properties

class InventoryItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  print() {
    console.log(`${item.name} costs ${item.price}`);
  }
}
class GoldenInvestoryItem {
  constructor(baseItem) {
    // extend baseItem
    this.name = `Golden ${baseItem.name}`;
    this.price = 1000 + baseItem.price;
  }
}

class DiamondInventoryItem {
  constructor(baseItem) {
    this.name = `Diamond ${baseItem.name}`;
    this.price = 1000 + baseItem.price;
    // extend properties
    this.cutsGlass = true;
  }
  // extend functionality
  print() {
    console.log(`${this.name} costs a lot of money...`);
  }
}

module.exports = { InventoryItem, GoldenInvestoryItem, DiamondInventoryItem };
