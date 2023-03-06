class Shopper {
  constructor(name = "unnamed person") {
    this._name = name;
    this._shoppingList = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList.join(", ");
  }

  addItemToList(item) {
    this._shoppingList.push(item);
  }

  clone() {
    // copy object structure
    var proto = Object.getPrototypeOf(this);
    var cloned = Object.create(proto);
    // clone any current values
    cloned._name = this._name;
    // copies all values from the shopping list array
    cloned._shoppingList = [...this._shoppingList];

    return cloned
  }
}

module.exports = Shopper;
