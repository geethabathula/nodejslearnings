
//Default Export and Import Examples
const names = require('./nodelearnings/names');
const hiFunc = require('./nodelearnings/utils')
const items = require('./nodelearnings/items');
console.log(items);
console.log(items.items[0], items.user.age);
hiFunc(names.john);
hiFunc(names.peter);
hiFunc("susan berry");

// console.log(module);
