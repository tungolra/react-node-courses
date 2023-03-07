const myModule = require('./myModule');
const { inc, dec, getCount } = require('./myModule');

console.log(myModule.anything)
console.log(myModule.who)

inc();
inc();
inc();

console.log(getCount());