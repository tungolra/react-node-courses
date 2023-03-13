const { LocalStorage } = require("node-localstorage");

const dbA = new LocalStorage("data-a-m");
const dbB = new LocalStorage("data-m-z");

// function to choose which db to use
const whichDB = (name) => (name.match(/^[A-M]|^[a-m]/) ? dbA : dbB);

// read cats from db; modified to use whichDB
const loadCats = (db) => JSON.parse(db.getItem("cats") || "[]");

// check if cat already exists; modified to use whichDB
const hasCat = (name) =>
  loadCats(whichDB(name))
    .map((cat) => cat.name)
    .includes(name);

module.exports = {
  addCat(newCat) {
    if (!hasCat(newCat.name)) {
      let db = whichDB(newCat.name);
      let cats = loadCats(db);
      cats.push(newCat);
      db.setItem("cats", JSON.stringify(cats, null, 2));
    }
  },

  findCatByName(name) {
    let db = whichDB(name);
    let cats = loadCats(db);
    return cats.find((cat) => cat.name === name);
  },

  findCatsByColor(color) {
    // let cats = loadCats();
    // return cats.filter((cat) => cat.color === color);

    // use spread operator to combine arrays
    return [
      ...loadCats(dbA).filter((cat) => cat.color === color),
      ...loadCats(dbB).filter((cat) => cat.color === color),
    ];
  },
};
