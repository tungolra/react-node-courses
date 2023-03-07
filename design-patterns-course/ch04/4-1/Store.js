var Storage = require('./Storage');

class Store {

    constructor(name, inventory=[]) {
        this.name = name;
        var floor = new Storage('store floor', inventory.floor);
        var backroom = new Storage('backroom', inventory.backroom);
        var localStore = new Storage('nearby store', inventory.localStore, 1);
        var warehouse = new Storage('warehouse', inventory.warehouse, 5);

        // then will look through backroom, then nearby store, then warehouse
        // chain of responsibility design patter
        floor.setNext(backroom)
        backroom.setNext(localStore)
        localStore.setNext(warehouse)

        // first place we'll look for an item
        this.storage = floor
    }

    find(itemName) {
        // var index = this.inventory.map(item => item.name).indexOf(itemName);
        // return this.inventory[index];

        // use chain of responsibility design pattern
        return this.storage.find(itemName);

    }

}

module.exports = Store;
