// to log group, it should have same interface as CatalogItem
class CatalogGroup {
  constructor(name, composites = []) {
    this.name = name;
    this.composites = composites;
  }
  get total() {
    // reduce array to single value by adding up all the total values
    return this.composites.reduce(
      (total, nextItem) => total + nextItem.total,
      0
    );
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);
    // print each item or other catalogue groups saved in composites
    this.composites.forEach((item) => {
      item.print();
    });
  }
}

module.exports = CatalogGroup;
